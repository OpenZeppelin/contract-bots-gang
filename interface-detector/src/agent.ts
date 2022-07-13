import {
  BlockEvent,
  Finding,
  FindingSeverity,
  FindingType,
  HandleBlock
} from "forta-agent";

import {
  filterRepeatedAlerts,
  getLatestAlerts,
  parseData
} from './utils'

import {
  isItOwnable,
  isItERC20,
  isItERC721,
  isItAccessControl,
  isItProxy,
  isItUUPS,
  isItERC1967,
  isItProxyAdmin,
  isItTransparentUpgradeableProxyPattern
} from './inspectors'

const analyzeInterface = (events: any[], functions: any[]) => {
  var parsedData = parseData(events, functions);
  var observationResults: any[] = [];

  var {result, functionmatches, eventmatches} = isItOwnable(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)
  
  observationResults.push(
    {
      type: 'Ownable', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItERC20(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ERC20', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItERC721(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ERC721', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItAccessControl(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'AccessControl', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItProxy(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'Proxy', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItUUPS(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'UUPS', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItERC1967(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ERC1967', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItTransparentUpgradeableProxyPattern(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'TransparentProxyPattern', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItProxyAdmin(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ProxyAdmin', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  return observationResults;
}

const handleBlock: HandleBlock = async (blockEvent: BlockEvent) => {
  const findings: Finding[] = [];
  try {
    var {alerts, } = await getLatestAlerts(
      blockEvent.block.number, 
      '0x9703bb3bf08bc89e6d0fd273fa995c32f75e8998c314bafdafcfe2491678f083'
    );

    if(alerts.length == 0) return findings;

    var filteredAlerts = filterRepeatedAlerts(alerts);

    filteredAlerts.forEach(async alert => {
      var knownFunctions = JSON.parse(alert.metadata.functions);
      var knownEvents = JSON.parse(alert.metadata.events);

      var results = analyzeInterface(knownEvents, knownFunctions);
      results.forEach(record => {
        if(record.status) {
          var confidence: number = 0;

          record.fmatches.forEach((match: { confidence: number; }) => {
            confidence += match.confidence;
          })
  
          record.ematches.forEach((match: { confidence: number; }) => {
            confidence += match.confidence;
          })
  
          confidence /= (record.fmatches.length + record.ematches.length)
  
          findings.push(
            Finding.fromObject({
              name: `${record.type} interface detected`,
              description: `Contract ${alert.metadata.contractAddress} adheres ${record.type} interface`,
              alertId: `${record.type} interface detected`,
              severity: FindingSeverity.Info,
              type: FindingType.Info,
              metadata: {
                contractAddress: alert.metadata.contractAddress,
                overallConfidence: `${confidence}%`,
                extras: JSON.stringify(record.extras)
              },
            })
          );
        }
      })
    });
  } catch(error: any) {
    console.log(error);
  }

  return findings;
}

export default {
  handleBlock
};
