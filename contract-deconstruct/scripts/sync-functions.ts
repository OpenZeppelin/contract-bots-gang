
import axios, { AxiosError, AxiosResponse } from "axios";
import * as functionJSON from '../src/static/functions.json';
import { writeFileSync } from "fs";
import { join } from "path";

const fileLocation = join('src', "static", "functions.json");

interface JSONInterface {
    [key: string]: Object|number|string|Array<any>;
}

let dumpCopy: JSONInterface = { ...functionJSON };

const endpoint = (page: number) =>
  `https://www.4byte.directory/api/v1/signatures/?ordering=created_at&page=${page}`;

const loop = async() => {
    var pagesPerIteration = 5;

    const {
        data: { count },
    } = await axios.get(endpoint(1));
    
    while (true) {
        await delay(1000);
        var currentPage = dumpCopy.latestPage ? dumpCopy.latestPage as number : 1;
        var currentID = dumpCopy.latestID ? dumpCopy.latestID as number : 111;
        if(currentPage > 1 && currentID == 111) currentPage = 1;
        var maxNumberOfPages = Math.ceil(count / 100);
        if(maxNumberOfPages < 8000) break;
        const lastPageOfThisRound = currentPage + pagesPerIteration > maxNumberOfPages ? maxNumberOfPages : currentPage + pagesPerIteration;

        if(pagesPerIteration > lastPageOfThisRound - currentPage) pagesPerIteration = lastPageOfThisRound - currentPage;

        if(pagesPerIteration == 0) cleanup();

        console.info(`Getting page ${currentPage} to ${lastPageOfThisRound}`);
        const allResults = await Promise.all(
            new Array(pagesPerIteration+1).fill('').map(async (_, index) => {
                return axios.get(endpoint(index + currentPage)).catch((error: AxiosError) => {
                    const response = error.response;
                    var data: any;
                    if(response && response.data) data = response.data;
                    var detail;
                    if(data && data.detail) detail = data.detail;
                    if(detail as string === 'Invalid page.') {
                        dumpCopy.latestPage = index + currentPage - 1;
                        dumpCopy.latestID = currentID;
                        cleanup();
                    } else {
                        console.log("Unexpected answer, exiting...")
                        dumpCopy.latestPage = currentPage;
                        dumpCopy.latestID = currentID;
                        cleanup();
                    }
                });
            })
        ) as unknown as AxiosResponse<any,any>[];
        
        const mergedResults = allResults
        .map(({ data: { results } }) => results)
        .flat();

        const filteredByLatestId = mergedResults.filter((element, index, _) => {
            return element.id > currentID
        })
  
        filteredByLatestId.forEach(({ hex_signature, text_signature, id }) => {
            if (dumpCopy[hex_signature]) {
                dumpCopy[hex_signature] = Array.from(
                    new Set(dumpCopy[hex_signature] as any).add(text_signature)
                );
            }

            else dumpCopy[hex_signature] = [text_signature];
            if(id > currentID) currentID = id;
        });
    
        dumpCopy.latestPage = lastPageOfThisRound;
        dumpCopy.latestID = currentID;
    }
}

const cleanup = () => {
    writeFileSync(fileLocation, JSON.stringify(dumpCopy));
    process.exit(0);
};

const delay = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));
  
// do something when app is closing
process.on("exit", cleanup);
// catches ctrl+c event
process.on("SIGINT", cleanup);
// catches "kill pid" (for example: nodemon restart)
process.on("SIGUSR1", cleanup);
process.on("SIGUSR2", cleanup);
// catches uncaught exceptions
process.on("uncaughtException", cleanup);

loop()
  .then(() => console.log("success"))
  .catch(console.error);