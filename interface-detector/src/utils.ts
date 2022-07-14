import axios from "axios";
import { Alert, AlertQueryOptions, AlertsResponse, FORTA_GRAPHQL_URL, getQueryFromAlertOptions, RawGraphqlAlertResponse } from "./interfaces";

export function filterRepeatedAlerts(alerts: Alert[]): any[] {
    var o: any = {};
    for (const a of alerts) (o[a.metadata.contractAddress] ??= []).push(a);
    const filteredAlerts = Object.entries(o).map(([contractAddress, alerts]) => ( o[contractAddress][0] ))
    return filteredAlerts;
}

export function condensateResults(
    results: {
        status: boolean, 
        type: string, 
        fmatches: {text: string, hex: string, confidence: number}[] | null, 
        ematches: {text: string, hex: string, confidence: number}[] | null,
        extra: object
    }[]
) {
    var interfaces: {type: string, fmatches: object[], ematches: object[], extra: object}[] = [];
    
    // Filter out interfaces that don't match
    results.forEach(result => {
        if(result.status) interfaces.push({
            type: result.type, 
            fmatches: result.fmatches ? result.fmatches : [], 
            ematches: result.ematches ? result.ematches : [],
            extra: result.extra
        });
    })

    // Consolidate
    var types: string[] = [];
    var fmatches: object[] = [];
    var ematches: object[] = [];
    var extras = {};
    interfaces.forEach(element => {
        types.push(element.type);
        fmatches = fmatches.concat(element.fmatches);
        ematches = ematches.concat(element.ematches);
        extras = { ...element.extra }
    })

    return {
        types,
        fmatches,
        ematches,
        extras
    }
}

export async function getLatestAlerts(blockNumber: number, botId: string) {
    var parsedResponse: AlertsResponse;

    var delayInBlocks: number = 40;
  
    var input: AlertQueryOptions = {
        "first": 50,
        "botIds": [botId],
        "blockNumberRange": {
          startBlockNumber: blockNumber-delayInBlocks, // Scan 10 minutes the past to get time the API to index latest data
          endBlockNumber: blockNumber-delayInBlocks
        },
        "chainId": 1
    }
  
    var response: RawGraphqlAlertResponse = await axios.post(FORTA_GRAPHQL_URL, getQueryFromAlertOptions(input), {headers: {"content-type": "application/json"}});
    parsedResponse = response.data.data.alerts;

    return parsedResponse;
}

export function parseData(events: any[], functions: any[]) {
    var o: any = {};
    for (const f of functions) (o[f.hex] ??= []).push(f.text);
    const functionsGroupedByHex = Object.entries(o).map(([hex, texts]) => ({ hex, texts }))
    o = {};
    for (const e of events) (o[e.hex] ??= []).push(e.text);
    const eventsGroupedByHex = Object.entries(o).map(([hex, texts]) => ({ hex, texts }))
    return {eventsGroupedByHex, functionsGroupedByHex}
}