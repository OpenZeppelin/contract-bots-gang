import {
  Finding,
  FindingSeverity,
  FindingType,
  Initialize,
  HandleAlert,
  AlertEvent,
} from "forta-agent";

import { condensateResults, parseData } from "./utils";

import {
  isItOwnable,
  isItOwnable2Step,
  isItIAccessControl,
  isItIAccessControlEnumerable,
  isItAccessControl,
  isItAccessControlEnumerable,
  isItIERC20,
  isItERC20,
  isItERC20Burnable,
  isItERC20Capped,
  isItERC20FlashMint,
  isItERC20Snapshot,
  isItERC20Votes,
  isItERC20VotesComp,
  isItERC20Wrapper,
  isItERC20Permit,
  isItIERC4626,
  isItERC4626,
  isItIERC20Metadata,
  isItTokenTimelock,
  isItIERC721,
  isItIERC721Receiver,
  isItERC721Burnable,
  isItIERC721Enumerable,
  isItIERC721Metadata,
  isItIERC1155,
  isItIERC1155Receiver,
  isItERC1155,
  isItERC1155Burnable,
  isItERC1155Supply,
  isItIERC1155MetadataURI,
  isItIERC777,
  isItIERC777Recipient,
  isItIERC777Sender,
  isItProxy,
  isItUUPSUpgradeable,
  isItERC1967Upgrade,
  isItProxyAdmin,
  isItTransparentUpgradeableProxy,
  isItInitializable,
  isItPausable,
  isItPullPayment,
  isItIGovernor,
  isItGovernor,
  isItIGovernorCompatibilityBravo,
  isItGovernorCompatibilityBravo,
  isItGovernorCountingSimple,
  isItGovernorPreventLateQuorum,
  isItGovernorSettings,
  isItGovernorTimelockCompound,
  isItGovernorVotesQuorumFraction,
  isItIGovernorTimelock,
  isItGovernorTimelock,
  isItTimelockController,
  isItIVotes,
  isItVestingWallet,
  isItPaymentSplitter,
  isItIERC165,
  isItIERC1820Implementer,
  isItIERC1820Registry,
  isItEscrow,
  isItConditionalEscrow,
  isItRefundEscrow,
  isItERC2771Context,
  isItMinimalForwarder,
  isItIAMB,
  isItIArbSys,
  isItIBridge,
  isItIDelayedMessageProvider,
  isItIInbox,
  isItIOutbox,
  isItICompoundTimelock,
  isItICrossDomainMessenger,
  isItIFxMessageProcessor,
  isItIERC1271,
  isItIERC1363,
  isItIERC1363Receiver,
  isItIERC1363Spender,
  isItIERC2309,
  isItIERC2612,
  isItIERC2981,
  isItIERC3156FlashBorrower,
  isItIERC3156FlashLender,
  isItIERC1822Proxiable,
  isItIBeacon,
  isItUpgradeableBeacon,
  isItERC1155Pausable,
  isItERC20Pausable,
  isItERC721,
  isItERC721Enumerable,
  isItERC721Consecutive,
  isItERC721Pausable,
  isItERC721Royalty,
  isItERC721Votes,
} from "./inspectors";

const analyzeInterface = (events: any[], functions: any[]) => {
  var parsedData = parseData(events, functions);
  var observationResults: any[] = [];

  /****************** ACCESS *******************************/

  var { result, functionmatches, eventmatches } = isItOwnable(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "Ownable",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItOwnable2Step(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "Ownable2Step",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIAccessControl(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IAccessControl",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIAccessControlEnumerable(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IAccessControlEnumerable",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItAccessControl(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "AccessControl",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItAccessControlEnumerable(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "AccessControlEnumerable",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  /****************** FINANCE *******************************/

  var { result, functionmatches, eventmatches } = isItVestingWallet(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "VestingWallet",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItPaymentSplitter(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "PaymentSplitter",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  /****************** GOVERNANCE *******************************/

  var { result, functionmatches, eventmatches } = isItIGovernor(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IGovernor",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItGovernor(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "Governor",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItTimelockController(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "TimelockController",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  /****************** GOVERNANCE/COMPATIBILITY *******************************/

  var { result, functionmatches, eventmatches } =
    isItIGovernorCompatibilityBravo(
      parsedData.eventsGroupedByHex,
      parsedData.functionsGroupedByHex
    );

  observationResults.push({
    type: "IGovernorCompatibilityBravo",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } =
    isItGovernorCompatibilityBravo(
      parsedData.eventsGroupedByHex,
      parsedData.functionsGroupedByHex
    );

  observationResults.push({
    type: "GovernorCompatibilityBravo",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  /****************** GOVERNANCE/EXTENSIONS *******************************/

  var { result, functionmatches, eventmatches } = isItGovernorCountingSimple(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "GovernorCountingSimple",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItGovernorPreventLateQuorum(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "GovernorPreventLateQuorum",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItGovernorSettings(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "GovernorSettings",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIGovernorTimelock(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IGovernorTimelock",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItGovernorTimelock(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "GovernorTimelock",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItGovernorTimelockCompound(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "GovernorTimelockCompound",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } =
    isItGovernorVotesQuorumFraction(
      parsedData.eventsGroupedByHex,
      parsedData.functionsGroupedByHex
    );

  observationResults.push({
    type: "GovernorVotesQuorumFraction",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIVotes(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IVotes",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  /****************** INTERFACES *******************************/

  var { result, functionmatches, eventmatches } = isItIERC1155(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IERC1155",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIERC1155MetadataURI(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IERC1155MetadataURI",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIERC1155Receiver(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IERC1155Receiver",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIERC1271(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IERC1271",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIERC1363(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IERC1363",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIERC1363Receiver(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IERC1363Receiver",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIERC1363Spender(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IERC1363Spender",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIERC165(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IERC165",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIERC1820Implementer(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IERC1820Implementer",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIERC1820Registry(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IERC1820Registry",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIERC20(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IERC20",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIERC20Metadata(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IERC20Metadata",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIERC2309(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IERC2309",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIERC2612(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IERC2612",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIERC2981(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IERC2981",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIERC3156FlashBorrower(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IERC3156FlashBorrower",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIERC3156FlashLender(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IERC3156FlashLender",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIERC4626(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IERC4626",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIERC721(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IERC721",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIERC721Enumerable(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IERC721Enumerable",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIERC721Metadata(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IERC721Metadata",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIERC721Receiver(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IERC721Receiver",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIERC777(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IERC777",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIERC777Recipient(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IERC777Recipient",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIERC777Sender(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IERC777Sender",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIERC1822Proxiable(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IERC1822Proxiable",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  /****************** METATX *******************************/

  var { result, functionmatches, eventmatches } = isItERC2771Context(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "ERC2771Context",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItMinimalForwarder(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "MinimalForwarder",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  /****************** PROXY *******************************/

  var { result, functionmatches, eventmatches } = isItProxy(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "Proxy",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItERC1967Upgrade(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "ERC1967Upgrade",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIBeacon(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IBeacon",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItUpgradeableBeacon(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "UpgradeableBeacon",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItProxyAdmin(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "ProxyAdmin",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } =
    isItTransparentUpgradeableProxy(
      parsedData.eventsGroupedByHex,
      parsedData.functionsGroupedByHex
    );

  observationResults.push({
    type: "TransparentUpgradeableProxy",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches,  } = isItInitializable(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "Initializable",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItUUPSUpgradeable(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "UUPSUpgradeable",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  /****************** SECURITY *******************************/

  var { result, functionmatches, eventmatches } = isItPausable(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "Pausable",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItPullPayment(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "PullPayment",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  /****************** TOKEN *******************************/

  /****************** ERC1155 *******************************/

  var { result, functionmatches, eventmatches } = isItERC1155(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "ERC1155",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  /****************** ERC1155/EXTENSIONS *******************************/

  var { result, functionmatches, eventmatches } = isItERC1155Burnable(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "ERC1155Burnable",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItERC1155Pausable(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "ERC1155Pausable",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItERC1155Supply(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "ERC1155Supply",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  /****************** ERC20 *******************************/

  var { result, functionmatches, eventmatches } = isItERC20(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  
  observationResults.push({
    type: "ERC20",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  /****************** ERC20/EXTENSIONS *******************************/

  var { result, functionmatches, eventmatches } = isItERC20Burnable(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  
  observationResults.push({
    type: "ERC20Burnable",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItERC20Capped(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "ERC20Capped",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItERC20FlashMint(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "ERC20FlashMint",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItERC20Pausable(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "ERC20Pausable",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItERC20Permit(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "ERC20Permit",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItERC20Snapshot(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "ERC20Snapshot",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItERC20Votes(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "ERC20Votes",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItERC20VotesComp(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "ERC20VotesComp",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItERC20Wrapper(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "ERC20Wrapper",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItERC4626(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "ERC4626",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItTokenTimelock(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "TokenTimelock",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  /****************** ERC721 *******************************/

  var { result, functionmatches, eventmatches } = isItERC721(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "ERC721",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  /****************** ERC721/EXTENSIONS *******************************/

  var { result, functionmatches, eventmatches } = isItERC721Burnable(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "ERC721Burnable",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItERC721Consecutive(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "ERC721Consecutive",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItERC721Enumerable(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "ERC721Enumerable",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItERC721Pausable(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "ERC721Pausable",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItERC721Royalty(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "ERC721Royalty",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItERC721Votes(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "ERC721Votes",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  /****************** UTILS *******************************/

  /****************** UTILS/ESCROW *******************************/

  var { result, functionmatches, eventmatches } = isItEscrow(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "Escrow",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItConditionalEscrow(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "ConditionalEscrow",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItRefundEscrow(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "RefundEscrow",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  /****************** VENDOR *******************************/

  /****************** VENDOR/AMB *******************************/

  var { result, functionmatches, eventmatches } = isItIAMB(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IAMB",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  /****************** VENDOR/ARBITRUM *******************************/

  var { result, functionmatches, eventmatches } = isItIArbSys(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IArbSys",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIBridge(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IBridge",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIDelayedMessageProvider(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IDelayedMessageProvider",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIInbox(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IInbox",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  var { result, functionmatches, eventmatches } = isItIOutbox(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IOutbox",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  /****************** VENDOR/COMPOUND *******************************/

  var { result, functionmatches, eventmatches } = isItICompoundTimelock(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "ICompoundTimelock",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  /****************** VENDOR/OPTIMISM *******************************/

  var { result, functionmatches, eventmatches } = isItICrossDomainMessenger(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "ICrossDomainMessenger",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  /****************** VENDOR/POLYGON *******************************/

  var { result, functionmatches, eventmatches } = isItIFxMessageProcessor(
    parsedData.eventsGroupedByHex,
    parsedData.functionsGroupedByHex
  );

  observationResults.push({
    type: "IFxMessageProcessor",
    status: result,
    fmatches: functionmatches,
    ematches: eventmatches,
    extras: {},
  });

  return observationResults;
};

const initialize: Initialize = async () => {
  // do some initialization on startup e.g. fetch data
  return {
    alertConfig: {
      subscriptions: [
        {
          botId:
            "0x9703bb3bf08bc89e6d0fd273fa995c32f75e8998c314bafdafcfe2491678f083",
          alertId: "CD",
        },
      ],
    },
  };
};

const handleAlert: HandleAlert = async (alertEvent: AlertEvent) => {
  const findings: Finding[] = [];

  const alert = alertEvent.alert;

  var knownFunctions = JSON.parse(alert.metadata.functions);

  var knownEvents = JSON.parse(alert.metadata.events);

  var results = analyzeInterface(knownEvents, knownFunctions);

  //Condensate results
  var condensatedResults: any = condensateResults(results);

  if (condensatedResults.types.length == 0) return findings;

  var confidence: number = 0;

  condensatedResults.fmatches.forEach((match: { confidence: number }) => {
    confidence += match.confidence;
  });

  condensatedResults.ematches.forEach((match: { confidence: number }) => {
    confidence += match.confidence;
  });

  confidence /=
    condensatedResults.fmatches.length + condensatedResults.ematches.length;

  findings.push(
    Finding.fromObject({
      name: `Interface detected`,
      description: `${alert.metadata.contractAddress.substring(0,10)} adheres to ${JSON.stringify(condensatedResults.types)}`,
      alertId: `ID`,
      severity: FindingSeverity.Info,
      type: FindingType.Info,
      metadata: {
        types: JSON.stringify(condensatedResults.types),
        contractAddress: alert.metadata.contractAddress,
        fmatches: JSON.stringify(condensatedResults.fmatches),
        ematches: JSON.stringify(condensatedResults.ematches),
        overallConfidence: `${confidence}%`,
        extras: JSON.stringify(condensatedResults.extras),
      },
    })
  );

  return findings;
};

export default {
  initialize,
  handleAlert,
};
