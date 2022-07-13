import axios from "axios";
import { Alert, AlertQueryOptions, AlertsResponse, FORTA_GRAPHQL_URL, getQueryFromAlertOptions, RawGraphqlAlertResponse } from "./interfaces";

export function filterRepeatedAlerts(alerts: Alert[]): any[] {
    var o: any = {};
    for (const a of alerts) (o[a.metadata.contractAddress] ??= []).push(a);
    const filteredAlerts = Object.entries(o).map(([contractAddress, alerts]) => ( o[contractAddress][0] ))
    return filteredAlerts;
}

export async function getLatestAlerts(blockNumber: number, botId: string) {
    var parsedResponse: AlertsResponse;
  
    var input: AlertQueryOptions = {
        "first": 50,
        "botIds": [botId],
        "blockNumberRange": {
          startBlockNumber: blockNumber-40, // Scan 10 minutes the past to get time the API to index latest data
          endBlockNumber: blockNumber-39
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