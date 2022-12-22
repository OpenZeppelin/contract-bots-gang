import {
  BlockEvent,
  Finding,
  FindingSeverity,
  FindingType,
  HandleBlock,
  Initialize,
  HandleAlert,
  AlertEvent,
} from "forta-agent";

import {
  condensateResults,
  parseData
} from './utils'

import {
  isItOwnable,
  isItOwnable2Step,
  isItAccessControl,
  isItAccessControlEnumerable,
  isItERC20,
  isItERC20Burnable,
  isItERC20Capped,
  isItERC20FlashMint,
  isItERC20Permit,
  isItERC20Snapshot,
  isItERC20Votes,
  isItERC20VotesComp,
  isItERC20Wrapper,
  isItERC4626,
  isItERC20Metadata,
  isItTokenTimelock,
  isItERC721,
  isItERC721Receiver,
  isItERC721Burnable,
  isItERC721Enumerable,
  isItERC721Metadata,
  isItERC1155,
  isItERC1155Receiver,
  isItERC1155Burnable,
  isItERC1155Supply,
  isItERC1155MetadataURI,
  isItERC777,
  isItERC777Recipient,
  isItERC777Sender,
  isItProxy,
  isItUUPS,
  isItERC1967,
  isItProxyAdmin,
  isItTransparentUpgradeableProxyPattern,
  isItInitializable, 
  isItPausable,
  isItPullPayment,
  isItGovernor,
  isItGovernorCompatibilityBravo,
  isItGovernorCountingSimple,
  isItGovernorPreventLateQuorum,
  isItGovernorSettings,
  isItGovernorTimelockCompound,
  isItGovernorVotesQuorumFraction,
  isItGovernorTimelock,
  isItTimelockController,
  isItVotes,
  isItVestingWallet,
  isItPaymentSplitter,
  isItERC165,
  isItERC1820Implementer,
  isItERC1820Registry,
  isItEscrow,
  isItConditionalEscrow,
  isItRefundEscrow,
  isItERC2771Context,
  isItMinimalForwarder,
} from './inspectors'

const analyzeInterface = (events: any[], functions: any[]) => {
  var parsedData = parseData(events, functions);
  var observationResults: any[] = [];

  /****************** ACCESS *******************************/

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

  var {result, functionmatches, eventmatches} = isItOwnable2Step(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)
  
  observationResults.push(
    {
      type: 'Ownable2Step', 
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

  var {result, functionmatches, eventmatches} = isItAccessControlEnumerable(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'AccessControlEnumerable', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );
  
  /****************** TOKEN *******************************/

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

  var {result, functionmatches, eventmatches} = isItERC20Burnable(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ERC20Burnable', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItERC20Capped(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ERC20Capped', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItERC20FlashMint(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ERC20FlashMint', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItERC20Permit(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ERC20Permit', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItERC20Snapshot(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ERC20Snapshot', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItERC20Votes(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ERC20Votes', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItERC20VotesComp(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ERC20VotesComp', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItERC20Wrapper(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ERC20Wrapper', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItERC4626(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ERC4626', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItERC20Metadata(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ERC20Metadata', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItTokenTimelock(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'TokenTimelock', 
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

  var {result, functionmatches, eventmatches} = isItERC721Receiver(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ERC721Receiver', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItERC721Burnable(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ERC721Burnable', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItERC721Enumerable(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ERC721Enumerable', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItERC721Metadata(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ERC721Metadata', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItERC1155(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ERC1155', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItERC1155Receiver(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ERC1155Receiver', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItERC1155Burnable(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ERC1155Burnable', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItERC1155Supply(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ERC1155Supply', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItERC1155MetadataURI(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ERC1155MetadataURI', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItERC777(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ERC777', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItERC777Recipient(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ERC777Recipient', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItERC777Sender(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ERC777Sender', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  /****************** PROXY *******************************/

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

  var {result, functionmatches, } = isItInitializable(parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'Initializable', 
      status: result, 
      fmatches: functionmatches, 
      ematches: null,
      extras: {}
    }
  );

  /****************** SECURITY *******************************/

  var {result, functionmatches, eventmatches} = isItPausable(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'Pausable', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItPullPayment(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'PullPayment', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  /****************** GOVERNANCE *******************************/

  var {result, functionmatches, eventmatches} = isItGovernor(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'Governor', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItGovernorCompatibilityBravo(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'GovernorCompatibilityBravo', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItGovernorCountingSimple(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'GovernorCountingSimple', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItGovernorPreventLateQuorum(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'GovernorPreventLateQuorum', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItGovernorSettings(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'GovernorSettings', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItGovernorSettings(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'GovernorSettings', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItGovernorTimelockCompound(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'GovernorTimelockCompound', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItGovernorVotesQuorumFraction(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'GovernorVotesQuorumFraction', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItGovernorTimelock(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'GovernorTimelock', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItTimelockController(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'TimelockController', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItVotes(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'Votes', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  /****************** METATX *******************************/

  var {result, functionmatches, eventmatches} = isItERC2771Context(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ERC2771Context', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItMinimalForwarder(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'MinimalForwarder', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );


  /****************** FINANCE *******************************/

  var {result, functionmatches, eventmatches} = isItVestingWallet(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'VestingWallet', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItPaymentSplitter(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'PaymentSplitter', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  /****************** UTILS *******************************/

  var {result, functionmatches, eventmatches} = isItERC165(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ERC165', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItERC1820Implementer(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ERC1820Implementer', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItERC1820Registry(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ERC1820Registry', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItEscrow(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'Escrow', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItConditionalEscrow(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'ConditionalEscrow', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  var {result, functionmatches, eventmatches} = isItRefundEscrow(parsedData.eventsGroupedByHex, parsedData.functionsGroupedByHex)

  observationResults.push(
    {
      type: 'RefundEscrow', 
      status: result, 
      fmatches: functionmatches, 
      ematches: eventmatches,
      extras: {}
    }
  );

  return observationResults;
}

const initialize: Initialize = async () => {
  // do some initialization on startup e.g. fetch data
  return {
    'alertConfig': {
        'subscriptions': [
            {
                'botId': '0x9703bb3bf08bc89e6d0fd273fa995c32f75e8998c314bafdafcfe2491678f083',
                'alertId': 'CD'
            }
        ]
    }
  }
}

const handleAlert: HandleAlert = async (alertEvent: AlertEvent) => {
  const findings: Finding[] = [];
  
  const alert = alertEvent.alert;

  var knownFunctions = JSON.parse(alert.metadata.functions);

  var knownEvents = JSON.parse(alert.metadata.events);

  var results = analyzeInterface(knownEvents, knownFunctions);

  //Condensate results
  var condensatedResults: any = condensateResults(results);

  if(condensatedResults.types.length == 0) return findings;

  var confidence: number = 0;

  condensatedResults.fmatches.forEach((match: { confidence: number; }) => {
    confidence += match.confidence;
  })

  condensatedResults.ematches.forEach((match: { confidence: number; }) => {
    confidence += match.confidence;
  })

  confidence /= (condensatedResults.fmatches.length + condensatedResults.ematches.length);

  findings.push(
    Finding.fromObject({
      name: `ID-${new Date().getTime()}`,
      description: `${alert.metadata.contractAddress.substring(0,10)} adheres to ${JSON.stringify(condensatedResults.types)}`,
      alertId: `ID-${new Date().getTime()}`,
      severity: FindingSeverity.Info,
      type: FindingType.Info,
      metadata: {
        types: JSON.stringify(condensatedResults.types),
        contractAddress: alert.metadata.contractAddress,
        fmatches: JSON.stringify(condensatedResults.fmatches),
        ematches: JSON.stringify(condensatedResults.ematches),
        overallConfidence: `${confidence}%`,
        extras: JSON.stringify(condensatedResults.extras)
      },
    })
  );

  return findings;
}

export default {
  initialize,
  handleAlert
};
