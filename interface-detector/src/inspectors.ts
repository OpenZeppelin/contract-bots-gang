function match(
  events: any[],
  functions: any[],
  functionsInInterface: any[],
  eventsInInterface: any[]
) {
  var functionMatchesResults: any[] = [];
  functionsInInterface.forEach((toBeMatched) => {
    functions.forEach((matches) => {
      matches.texts.forEach((text: any) => {
        if (toBeMatched === text)
          functionMatchesResults.push({
            text: toBeMatched,
            hex: matches.hex,
            confidence: (1 / matches.texts.length) * 100,
          });
      });
    });
  });

  var eventMatchesResults: any[] = [];
  eventsInInterface.forEach((toBeMatched) => {
    events.forEach((matches) => {
      matches.texts.forEach((text: any) => {
        if (toBeMatched === text)
          eventMatchesResults.push({
            text: toBeMatched,
            hex: matches.hex,
            confidence: (1 / matches.texts.length) * 100,
          });
      });
    });
  });

  // Here we should detect percentage of adherence, it would be interesting to detect if a contract half satisfies an interface
  var isItInterface =
    functionMatchesResults.length == functionsInInterface.length &&
    eventMatchesResults.length == eventsInInterface.length;
  return { isItInterface, functionMatchesResults, eventMatchesResults };
}

/****************** ACCESS *******************************/

export function isItOwnable(events: any[], functions: any[]) {
  var functionsInInterface = [
    "owner()",
    "renounceOwnership()",
    "transferOwnership(address)",
  ];

  var eventsInInterface = ["OwnershipTransferred(address,address)"];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItOwnable2Step(events: any[], functions: any[]) {
  var functionsInInterface = [
    "pendingOwner()",
    "transferOwnership(address)",
    "acceptOwnership()",
    // Ownable
    "owner()",
    "renounceOwnership()",
  ];

  var eventsInInterface = [
    "OwnershipTransferStarted(address,address)",
    // Ownable
    "OwnershipTransferred(address,address)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIAccessControl(events: any[], functions: any[]) {
  var functionsInInterface = [
    "hasRole(bytes32,address)",
    "getRoleAdmin(bytes32)",
    "grantRole(bytes32,address)",
    "revokeRole(bytes32,address)",
    "renounceRole(bytes32,address)",
  ];

  var eventsInInterface = [
    "RoleRevoked(bytes32,address,address)",
    "RoleGranted(bytes32,address,address)",
    "RoleAdminChanged(bytes32,bytes32,bytes32)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIAccessControlEnumerable(events: any[], functions: any[]) {
  var functionsInInterface = [
    "getRoleMember(bytes32,uint256)",
    "getRoleMemberCount(bytes32)",
    // IAccessControl
    "hasRole(bytes32,address)",
    "getRoleAdmin(bytes32)",
    "grantRole(bytes32,address)",
    "revokeRole(bytes32,address)",
    "renounceRole(bytes32,address)",
  ];

  var eventsInInterface: any[] = [
    // IAccessControl
    "RoleRevoked(bytes32,address,address)",
    "RoleGranted(bytes32,address,address)",
    "RoleAdminChanged(bytes32,bytes32,bytes32)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItAccessControl(events: any[], functions: any[]) {
  var functionsInInterface = [
    // ERC165
    "supportsInterface(bytes4)",
    // IAccessControl
    "hasRole(bytes32,address)",
    "getRoleAdmin(bytes32)",
    "grantRole(bytes32,address)",
    "revokeRole(bytes32,address)",
    "renounceRole(bytes32,address)",
  ];

  var eventsInInterface: any[] = [
    // IAccessControl
    "RoleRevoked(bytes32,address,address)",
    "RoleGranted(bytes32,address,address)",
    "RoleAdminChanged(bytes32,bytes32,bytes32)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItAccessControlEnumerable(events: any[], functions: any[]) {
  var functionsInInterface = [
    // ERC165
    "supportsInterface(bytes4)",
    // IAccessControl
    "hasRole(bytes32,address)",
    "getRoleAdmin(bytes32)",
    "grantRole(bytes32,address)",
    "revokeRole(bytes32,address)",
    "renounceRole(bytes32,address)",
    // IAccessControlEnumerable
    "getRoleMember(bytes32,uint256)",
    "getRoleMemberCount(bytes32)",
  ];

  var eventsInInterface: any[] = [
    // IAccessControl
    "RoleRevoked(bytes32,address,address)",
    "RoleGranted(bytes32,address,address)",
    "RoleAdminChanged(bytes32,bytes32,bytes32)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

/****************** FINANCE *******************************/

export function isItVestingWallet(events: any[], functions: any[]) {
  var functionsInInterface: any[] = [
    // 'receive',
    "beneficiary()",
    "start()",
    "duration()",
    "released()",
    "released(address)",
    "releasable()",
    "releasable(address)",
    "release()",
    "release(address)",
    "vestedAmount(uint64)",
    "vestedAmount(address,uint64)",
  ];

  var eventsInInterface = [
    "EtherReleased(uint256)",
    "ERC20Released(address,uint256)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItPaymentSplitter(events: any[], functions: any[]) {
  var functionsInInterface: any[] = [
    // 'receive()',
    "totalShares()",
    "totalReleased()",
    "totalReleased(address)",
    "shares(address)",
    "released(address)",
    "released(address,address)",
    "payee(uint256)",
    "releasable(address)",
    "releasable(address,address)",
    "release(address)",
    "release(address,address)",
  ];

  var eventsInInterface = [
    "PayeeAdded(address,uint256)",
    "PaymentReleased(address,uint256)",
    "ERC20PaymentReleased(address,address,uint256)",
    "PaymentReceived(address,uint256)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

/****************** GOVERNANCE *******************************/

export function isItIGovernor(events: any[], functions: any[]) {
  var functionsInInterface: any[] = [
    "name()",
    "version()",
    "COUNTING_MODE()",
    "hashProposal(address[],int256[],bytes[],bytes32)",
    "state(uint256)",
    "proposalSnapshot(uint256)",
    "proposalDeadline(uint256)",
    "votingDelay()",
    "votingPeriod()",
    "quorum(uint256)",
    "getVotes(address,uint256)",
    "getVotesWithParams(address,uint256,bytes)",
    "hasVoted(uint256,address)",
    "propose(address[],uint256[],bytes[],string)",
    "execute(address[],uint256[],bytes[],bytes32)",
    "castVote(uint256,uint8)",
    "castVoteWithReason(uint256,uint8,string)",
    "castVoteWithReasonAndParams(uint256,uint8,string,bytes)",
    "castVoteBySig(uint256,uint8,uint8,bytes32,bytes32)",
    "castVoteWithReasonAndParamsBySig(uint256,uint8,string,bytes,uint8,bytes32,bytes32)",
    // IERC165
    "supportsInterface(bytes4)",
  ];

  var eventsInInterface = [
    "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)",
    "ProposalCanceled(uint256)",
    "ProposalExecuted(uint256)",
    "VoteCast(address,uint256,uint8,uint256,string)",
    "VoteCastWithParams(address,uint256,uint8,uint256,string,bytes)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItGovernor(events: any[], functions: any[]) {
  var functionsInInterface: any[] = [
    // IGovernor
    "name()",
    "version()",
    "COUNTING_MODE()",
    "hashProposal(address[],int256[],bytes[],bytes32)",
    "state(uint256)",
    "proposalSnapshot(uint256)",
    "proposalDeadline(uint256)",
    "votingDelay()",
    "votingPeriod()",
    "quorum(uint256)",
    "getVotes(address,uint256)",
    "getVotesWithParams(address,uint256,bytes)",
    "hasVoted(uint256,address)",
    "propose(address[],uint256[],bytes[],string)",
    "execute(address[],uint256[],bytes[],bytes32)",
    "castVote(uint256,uint8)",
    "castVoteWithReason(uint256,uint8,string)",
    "castVoteWithReasonAndParams(uint256,uint8,string,bytes)",
    "castVoteBySig(uint256,uint8,uint8,bytes32,bytes32)",
    "castVoteWithReasonAndParamsBySig(uint256,uint8,string,bytes,uint8,bytes32,bytes32)",
    // IERC165
    "supportsInterface(bytes4)",
    // IERC721Receiver
    "onERC721Received(address,address,uint256,bytes)",
    // IERC1155Receiver
    "onERC1155Received(address,address,uint256,uint256,bytes)",
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)",
  ];

  var eventsInInterface = [
    // IGovernor
    "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)",
    "ProposalCanceled(uint256)",
    "ProposalExecuted(uint256)",
    "VoteCast(address,uint256,uint8,uint256,string)",
    "VoteCastWithParams(address,uint256,uint8,uint256,string,bytes)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItTimelockController(events: any[], functions: any[]) {
  var functionsInInterface: any[] = [
    // 'receive()',
    "isOperation(bytes32)",
    "isOperationPending(bytes32)",
    "isOperationReady(bytes32)",
    "isOperationDone(bytes32)",
    "getTimestamp(bytes32)",
    "getMinDelay()",
    "hashOperation(address,uint256,bytes,bytes32,bytes32)",
    "hashOperationBatch(address[],uint256[],bytes[],bytes32,bytes32)",
    "schedule(address,uint256,bytes,bytes32,bytes32,uint256)",
    "scheduleBatch(address[],uint256[],bytes[],bytes32,bytes32,uint256)",
    "cancel(bytes32)",
    "execute(address,uint256,bytes,bytes32,bytes32)",
    "executeBatch(address[],uint256[],bytes[],bytes32,bytes32)",
    "updateDelay(uint256)",
    // IAccessControl
    "hasRole(bytes32,address)",
    "getRoleAdmin(bytes32)",
    "grantRole(bytes32,address)",
    "revokeRole(bytes32,address)",
    "renounceRole(bytes32,address)",
    // IERC721Receiver
    "onERC721Received(address,address,uint256,bytes)",
    // IERC1155Receiver
    "onERC1155Received(address,address,uint256,uint256,bytes)",
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)",
    // IERC165
    "supportsInterface(bytes4 interfaceId)",
  ];

  var eventsInInterface = [
    "CallScheduled(bytes32,uint256,address,uint256,bytes,bytes32,uint256)",
    "CallExecuted(bytes32,uint256,address,uint256,bytes)",
    "Cancelled(bytes32)",
    "MinDelayChange(uint256,uint256)",
    // IAccessControl
    "RoleRevoked(bytes32,address,address)",
    "RoleGranted(bytes32,address,address)",
    "RoleAdminChanged(bytes32,bytes32,bytes32)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

/****************** GOVERNANCE/COMPATIBILITY *******************************/

export function isItIGovernorCompatibilityBravo(
  events: any[],
  functions: any[]
) {
  var functionsInInterface: any[] = [
    "quorumVotes()",
    "proposals(uint256)",
    "propose(address[],uint256[],string[],bytes[],string)",
    "queue(uint256)",
    "execute(uint256)",
    "cancel(uint256)",
    "getActions(uint256)",
    "getReceipt(uint256,address)",
    // IGovernor
    "name()",
    "version()",
    "COUNTING_MODE()",
    "hashProposal(address[],int256[],bytes[],bytes32)",
    "state(uint256)",
    "proposalSnapshot(uint256)",
    "proposalDeadline(uint256)",
    "votingDelay()",
    "votingPeriod()",
    "quorum(uint256)",
    "getVotes(address,uint256)",
    "getVotesWithParams(address,uint256,bytes)",
    "hasVoted(uint256,address)",
    "propose(address[],uint256[],bytes[],string)",
    "execute(address[],uint256[],bytes[],bytes32)",
    "castVote(uint256,uint8)",
    "castVoteWithReason(uint256,uint8,string)",
    "castVoteWithReasonAndParams(uint256,uint8,string,bytes)",
    "castVoteBySig(uint256,uint8,uint8,bytes32,bytes32)",
    "castVoteWithReasonAndParamsBySig(uint256,uint8,string,bytes,uint8,bytes32,bytes32)",
    // IERC165
    "supportsInterface(bytes4)",
  ];

  var eventsInInterface = [
    // IGovernor
    "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)",
    "ProposalCanceled(uint256)",
    "ProposalExecuted(uint256)",
    "VoteCast(address,uint256,uint8,uint256,string)",
    "VoteCastWithParams(address,uint256,uint8,uint256,string,bytes)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItGovernorCompatibilityBravo(
  events: any[],
  functions: any[]
) {
  var functionsInInterface: any[] = [
    // IGovernorTimelock
    "timelock()",
    "proposalEta(uint256)",
    "queue(address[],uint256[],bytes[],bytes32)",
    // IGovernorCompatibilityBravo
    "quorumVotes()",
    "proposals(uint256)",
    "propose(address[],uint256[],string[],bytes[],string)",
    "queue(uint256)",
    "execute(uint256)",
    "cancel(uint256)",
    "getActions(uint256)",
    "getReceipt(uint256,address)",
    // IGovernor
    "name()",
    "version()",
    "COUNTING_MODE()",
    "hashProposal(address[],int256[],bytes[],bytes32)",
    "state(uint256)",
    "proposalSnapshot(uint256)",
    "proposalDeadline(uint256)",
    "votingDelay()",
    "votingPeriod()",
    "quorum(uint256)",
    "getVotes(address,uint256)",
    "getVotesWithParams(address,uint256,bytes)",
    "hasVoted(uint256,address)",
    "propose(address[],uint256[],bytes[],string)",
    "execute(address[],uint256[],bytes[],bytes32)",
    "castVote(uint256,uint8)",
    "castVoteWithReason(uint256,uint8,string)",
    "castVoteWithReasonAndParams(uint256,uint8,string,bytes)",
    "castVoteBySig(uint256,uint8,uint8,bytes32,bytes32)",
    "castVoteWithReasonAndParamsBySig(uint256,uint8,string,bytes,uint8,bytes32,bytes32)",
    // IERC165
    "supportsInterface(bytes4)",
    // IERC721Receiver
    "onERC721Received(address,address,uint256,bytes)",
    // IERC1155Receiver
    "onERC1155Received(address,address,uint256,uint256,bytes)",
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)",
  ];

  var eventsInInterface = [
    // IGovernorTimelock
    "ProposalQueued(uint256,uint256)",
    // IGovernor
    "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)",
    "ProposalCanceled(uint256)",
    "ProposalExecuted(uint256)",
    "VoteCast(address,uint256,uint8,uint256,string)",
    "VoteCastWithParams(address,uint256,uint8,uint256,string,bytes)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

/****************** GOVERNANCE/EXTENSIONS *******************************/

export function isItGovernorCountingSimple(events: any[], functions: any[]) {
  var functionsInInterface: any[] = [
    "COUNTING_MODE()",
    // 'hasVoted(uint256,address)',
    "proposalVotes(uint256)",
    // IGovernor
    "name()",
    "version()",
    "COUNTING_MODE()",
    "hashProposal(address[],int256[],bytes[],bytes32)",
    "state(uint256)",
    "proposalSnapshot(uint256)",
    "proposalDeadline(uint256)",
    "votingDelay()",
    "votingPeriod()",
    "quorum(uint256)",
    "getVotes(address,uint256)",
    "getVotesWithParams(address,uint256,bytes)",
    "hasVoted(uint256,address)",
    "propose(address[],uint256[],bytes[],string)",
    "execute(address[],uint256[],bytes[],bytes32)",
    "castVote(uint256,uint8)",
    "castVoteWithReason(uint256,uint8,string)",
    "castVoteWithReasonAndParams(uint256,uint8,string,bytes)",
    "castVoteBySig(uint256,uint8,uint8,bytes32,bytes32)",
    "castVoteWithReasonAndParamsBySig(uint256,uint8,string,bytes,uint8,bytes32,bytes32)",
    // IERC165
    "supportsInterface(bytes4)",
    // IERC721Receiver
    "onERC721Received(address,address,uint256,bytes)",
    // IERC1155Receiver
    "onERC1155Received(address,address,uint256,uint256,bytes)",
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)",
  ];

  var eventsInInterface = [
    // IGovernor
    "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)",
    "ProposalCanceled(uint256)",
    "ProposalExecuted(uint256)",
    "VoteCast(address,uint256,uint8,uint256,string)",
    "VoteCastWithParams(address,uint256,uint8,uint256,string,bytes)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItGovernorPreventLateQuorum(events: any[], functions: any[]) {
  var functionsInInterface: any[] = [
    // 'proposalDeadline(uint256)',
    "lateQuorumVoteExtension()",
    "setLateQuorumVoteExtension(uint64)",
    // IGovernor
    "name()",
    "version()",
    "COUNTING_MODE()",
    "hashProposal(address[],int256[],bytes[],bytes32)",
    "state(uint256)",
    "proposalSnapshot(uint256)",
    "proposalDeadline(uint256)",
    "votingDelay()",
    "votingPeriod()",
    "quorum(uint256)",
    "getVotes(address,uint256)",
    "getVotesWithParams(address,uint256,bytes)",
    "hasVoted(uint256,address)",
    "propose(address[],uint256[],bytes[],string)",
    "execute(address[],uint256[],bytes[],bytes32)",
    "castVote(uint256,uint8)",
    "castVoteWithReason(uint256,uint8,string)",
    "castVoteWithReasonAndParams(uint256,uint8,string,bytes)",
    "castVoteBySig(uint256,uint8,uint8,bytes32,bytes32)",
    "castVoteWithReasonAndParamsBySig(uint256,uint8,string,bytes,uint8,bytes32,bytes32)",
    // IERC165
    "supportsInterface(bytes4)",
    // IERC721Receiver
    "onERC721Received(address,address,uint256,bytes)",
    // IERC1155Receiver
    "onERC1155Received(address,address,uint256,uint256,bytes)",
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)",
  ];

  var eventsInInterface: any[] = [
    "ProposalExtended(uint256,uint64)",
    "LateQuorumVoteExtensionSet(uint64,uint64)",
    // IGovernor
    "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)",
    "ProposalCanceled(uint256)",
    "ProposalExecuted(uint256)",
    "VoteCast(address,uint256,uint8,uint256,string)",
    "VoteCastWithParams(address,uint256,uint8,uint256,string,bytes)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItGovernorSettings(events: any[], functions: any[]) {
  var functionsInInterface: any[] = [
    // 'votingDelay()',
    // 'votingPeriod()',
    "proposalThreshold()",
    "setVotingDelay(uint256)",
    "setVotingPeriod(uint256)",
    "setProposalThreshold(uint256)",
    // IGovernor
    "name()",
    "version()",
    "COUNTING_MODE()",
    "hashProposal(address[],int256[],bytes[],bytes32)",
    "state(uint256)",
    "proposalSnapshot(uint256)",
    "proposalDeadline(uint256)",
    "votingDelay()",
    "votingPeriod()",
    "quorum(uint256)",
    "getVotes(address,uint256)",
    "getVotesWithParams(address,uint256,bytes)",
    "hasVoted(uint256,address)",
    "propose(address[],uint256[],bytes[],string)",
    "execute(address[],uint256[],bytes[],bytes32)",
    "castVote(uint256,uint8)",
    "castVoteWithReason(uint256,uint8,string)",
    "castVoteWithReasonAndParams(uint256,uint8,string,bytes)",
    "castVoteBySig(uint256,uint8,uint8,bytes32,bytes32)",
    "castVoteWithReasonAndParamsBySig(uint256,uint8,string,bytes,uint8,bytes32,bytes32)",
    // IERC165
    "supportsInterface(bytes4)",
    // IERC721Receiver
    "onERC721Received(address,address,uint256,bytes)",
    // IERC1155Receiver
    "onERC1155Received(address,address,uint256,uint256,bytes)",
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)",
  ];

  var eventsInInterface: any[] = [
    "VotingDelaySet(uint256,uint256)",
    "VotingPeriodSet(uint256,uint256)",
    "ProposalThresholdSet(uint256,uint256)",
    // IGovernor
    "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)",
    "ProposalCanceled(uint256)",
    "ProposalExecuted(uint256)",
    "VoteCast(address,uint256,uint8,uint256,string)",
    "VoteCastWithParams(address,uint256,uint8,uint256,string,bytes)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIGovernorTimelock(events: any[], functions: any[]) {
  var functionsInInterface: any[] = [
    "timelock()",
    "proposalEta(uint256)",
    "queue(address[],uint256[],bytes[],bytes32)",
    // IGovernor
    "name()",
    "version()",
    "COUNTING_MODE()",
    "hashProposal(address[],int256[],bytes[],bytes32)",
    "state(uint256)",
    "proposalSnapshot(uint256)",
    "proposalDeadline(uint256)",
    "votingDelay()",
    "votingPeriod()",
    "quorum(uint256)",
    "getVotes(address,uint256)",
    "getVotesWithParams(address,uint256,bytes)",
    "hasVoted(uint256,address)",
    "propose(address[],uint256[],bytes[],string)",
    "execute(address[],uint256[],bytes[],bytes32)",
    "castVote(uint256,uint8)",
    "castVoteWithReason(uint256,uint8,string)",
    "castVoteWithReasonAndParams(uint256,uint8,string,bytes)",
    "castVoteBySig(uint256,uint8,uint8,bytes32,bytes32)",
    "castVoteWithReasonAndParamsBySig(uint256,uint8,string,bytes,uint8,bytes32,bytes32)",
    // IERC165
    "supportsInterface(bytes4)",
  ];

  var eventsInInterface: any[] = [
    "ProposalQueued(uint256,uint256)",
    // IGovernor
    "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)",
    "ProposalCanceled(uint256)",
    "ProposalExecuted(uint256)",
    "VoteCast(address,uint256,uint8,uint256,string)",
    "VoteCastWithParams(address,uint256,uint8,uint256,string,bytes)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItGovernorTimelock(events: any[], functions: any[]) {
  var functionsInInterface: any[] = [
    // IGovernorTimelock
    "timelock()",
    "proposalEta(uint256)",
    "queue(address[],uint256[],bytes[],bytes32)",
    // IGovernor
    "name()",
    "version()",
    "COUNTING_MODE()",
    "hashProposal(address[],int256[],bytes[],bytes32)",
    "state(uint256)",
    "proposalSnapshot(uint256)",
    "proposalDeadline(uint256)",
    "votingDelay()",
    "votingPeriod()",
    "quorum(uint256)",
    "getVotes(address,uint256)",
    "getVotesWithParams(address,uint256,bytes)",
    "hasVoted(uint256,address)",
    "propose(address[],uint256[],bytes[],string)",
    "execute(address[],uint256[],bytes[],bytes32)",
    "castVote(uint256,uint8)",
    "castVoteWithReason(uint256,uint8,string)",
    "castVoteWithReasonAndParams(uint256,uint8,string,bytes)",
    "castVoteBySig(uint256,uint8,uint8,bytes32,bytes32)",
    "castVoteWithReasonAndParamsBySig(uint256,uint8,string,bytes,uint8,bytes32,bytes32)",
    // IERC165
    "supportsInterface(bytes4)",
    // IERC721Receiver
    "onERC721Received(address,address,uint256,bytes)",
    // IERC1155Receiver
    "onERC1155Received(address,address,uint256,uint256,bytes)",
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)",
  ];

  var eventsInInterface: any[] = [
    "ProposalQueued(uint256,uint256)",
    // IGovernor
    "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)",
    "ProposalCanceled(uint256)",
    "ProposalExecuted(uint256)",
    "VoteCast(address,uint256,uint8,uint256,string)",
    "VoteCastWithParams(address,uint256,uint8,uint256,string,bytes)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItGovernorTimelockCompound(events: any[], functions: any[]) {
  var functionsInInterface: any[] = [
    // 'state(uint256)',
    // 'timelock()',
    // 'proposalEta(uint256)',
    // 'queue(address[],uint256[],bytes[],bytes32)',
    "__acceptAdmin()",
    "updateTimelock(address)",
    // IGovernorTimelock
    "timelock()",
    "proposalEta(uint256)",
    "queue(address[],uint256[],bytes[],bytes32)",
    // IGovernor
    "name()",
    "version()",
    "COUNTING_MODE()",
    "hashProposal(address[],int256[],bytes[],bytes32)",
    "state(uint256)",
    "proposalSnapshot(uint256)",
    "proposalDeadline(uint256)",
    "votingDelay()",
    "votingPeriod()",
    "quorum(uint256)",
    "getVotes(address,uint256)",
    "getVotesWithParams(address,uint256,bytes)",
    "hasVoted(uint256,address)",
    "propose(address[],uint256[],bytes[],string)",
    "execute(address[],uint256[],bytes[],bytes32)",
    "castVote(uint256,uint8)",
    "castVoteWithReason(uint256,uint8,string)",
    "castVoteWithReasonAndParams(uint256,uint8,string,bytes)",
    "castVoteBySig(uint256,uint8,uint8,bytes32,bytes32)",
    "castVoteWithReasonAndParamsBySig(uint256,uint8,string,bytes,uint8,bytes32,bytes32)",
    // IERC165
    "supportsInterface(bytes4)",
    // IERC721Receiver
    "onERC721Received(address,address,uint256,bytes)",
    // IERC1155Receiver
    "onERC1155Received(address,address,uint256,uint256,bytes)",
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)",
  ];

  var eventsInInterface: any[] = [
    "TimelockChange(address,address)",
    // IGovernorTimelock
    "ProposalQueued(uint256,uint256)",
    // IGovernor
    "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)",
    "ProposalCanceled(uint256)",
    "ProposalExecuted(uint256)",
    "VoteCast(address,uint256,uint8,uint256,string)",
    "VoteCastWithParams(address,uint256,uint8,uint256,string,bytes)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItGovernorVotesQuorumFraction(
  events: any[],
  functions: any[]
) {
  var functionsInInterface: any[] = [
    "quorumNumerator()",
    "quorumNumerator(uint256)",
    "quorumDenominator()",
    "quorum(uint256)",
    "updateQuorumNumerator(uint256)",
    // IGovernor
    "name()",
    "version()",
    "COUNTING_MODE()",
    "hashProposal(address[],int256[],bytes[],bytes32)",
    "state(uint256)",
    "proposalSnapshot(uint256)",
    "proposalDeadline(uint256)",
    "votingDelay()",
    "votingPeriod()",
    "quorum(uint256)",
    "getVotes(address,uint256)",
    "getVotesWithParams(address,uint256,bytes)",
    "hasVoted(uint256,address)",
    "propose(address[],uint256[],bytes[],string)",
    "execute(address[],uint256[],bytes[],bytes32)",
    "castVote(uint256,uint8)",
    "castVoteWithReason(uint256,uint8,string)",
    "castVoteWithReasonAndParams(uint256,uint8,string,bytes)",
    "castVoteBySig(uint256,uint8,uint8,bytes32,bytes32)",
    "castVoteWithReasonAndParamsBySig(uint256,uint8,string,bytes,uint8,bytes32,bytes32)",
    // IERC165
    "supportsInterface(bytes4)",
    // IERC721Receiver
    "onERC721Received(address,address,uint256,bytes)",
    // IERC1155Receiver
    "onERC1155Received(address,address,uint256,uint256,bytes)",
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)",
  ];

  var eventsInInterface: any[] = [
    "QuorumNumeratorUpdated(uint256,uint256)",
    // IGovernor
    "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)",
    "ProposalCanceled(uint256)",
    "ProposalExecuted(uint256)",
    "VoteCast(address,uint256,uint8,uint256,string)",
    "VoteCastWithParams(address,uint256,uint8,uint256,string,bytes)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIVotes(events: any[], functions: any[]) {
  var functionsInInterface: any[] = [
    "getVotes(address)",
    "getPastVotes(address,uint256)",
    "getPastTotalSupply(uint256)",
    "delegates(address)",
    "delegate(address)",
    "delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)",
  ];

  var eventsInInterface = [
    "DelegateChanged(address,address,address)",
    "DelegateVotesChanged(address,uint256,uint256)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

/****************** INTERFACES *******************************/

export function isItIERC1155(events: any[], functions: any[]) {
  var functionsInInterface = [
    "balanceOf(address,uint256)",
    "balanceOfBatch(address[],uint256[])",
    "setApprovalForAll(address,bool)",
    "isApprovedForAll(address,address)",
    "safeTransferFrom(address,address,uint256,uint256,bytes)",
    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)",
    // IERC165
    "supportsInterface(bytes4)",
  ];

  var eventsInInterface = [
    "TransferSingle(address,address,address,uint256,uint256)",
    "TransferBatch(address,address,address,uint256[],uint256[])",
    "ApprovalForAll(address,address,bool)",
    "URI(string,uint256)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIERC1155MetadataURI(events: any[], functions: any[]) {
  var functionsInInterface = [
    "uri(uint256)",
    // IERC1155
    "balanceOf(address,uint256)",
    "balanceOfBatch(address[],uint256[])",
    "setApprovalForAll(address,bool)",
    "isApprovedForAll(address,address)",
    "safeTransferFrom(address,address,uint256,uint256,bytes)",
    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)",
    // IERC165
    "supportsInterface(bytes4)",
  ];

  var eventsInInterface: any[] = [
    // IERC1155
    "TransferSingle(address,address,address,uint256,uint256)",
    "TransferBatch(address,address,address,uint256[],uint256[])",
    "ApprovalForAll(address,address,bool)",
    "URI(string,uint256)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIERC1155Receiver(events: any[], functions: any[]) {
  var functionsInInterface = [
    "onERC1155Received(address,address,uint256,uint256,bytes)",
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)",
    // IERC165
    "supportsInterface(bytes4)",
  ];

  var eventsInInterface: any[] = [];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIERC1271(events: any[], functions: any[]) {
  var functionsInInterface = ["isValidSignature(bytes32,bytes)"];

  var eventsInInterface: any[] = [];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIERC1363(events: any[], functions: any[]) {
  var functionsInInterface = [
    "transferAndCall(address,uint256)",
    "transferAndCall(address,uint256,bytes)",
    "transferFromAndCall(address,address,uint256)",
    "transferFromAndCall(address,address,uint256,bytes)",
    "approveAndCall(address,uint256)",
    "approveAndCall(address,uint256,bytes)",
    // IERC20
    "totalSupply()",
    "balanceOf(address)",
    "transfer(address,uint256)",
    "allowance(address,address)",
    "approve(address,uint256)",
    "transferFrom(address,address,uint256)",
    // IERC165
    "supportsInterface(bytes4)",
  ];

  var eventsInInterface: any[] = [
    // IERC20
    "Transfer(address,address,uint256)",
    "Approval(address,address,uint256)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIERC1363Receiver(events: any[], functions: any[]) {
  var functionsInInterface = [
    "onTransferReceived(address,address,uint256,bytes)",
  ];

  var eventsInInterface: any[] = [];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIERC1363Spender(events: any[], functions: any[]) {
  var functionsInInterface = ["onApprovalReceived(address,uint256,bytes)"];

  var eventsInInterface: any[] = [];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIERC165(events: any[], functions: any[]) {
  var functionsInInterface = ["supportsInterface(bytes4)"];

  var eventsInInterface: any[] = [];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIERC1820Implementer(events: any[], functions: any[]) {
  var functionsInInterface = ["canImplementInterfaceForAddress(bytes,address)"];

  var eventsInInterface: any[] = [];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIERC1820Registry(events: any[], functions: any[]) {
  var functionsInInterface = [
    "setManager(address,address)",
    "getManager(address)",
    "setInterfaceImplementer(address,bytes32,address)",
    "getInterfaceImplementer(address,bytes32)",
    "interfaceHash(string)",
    "updateERC165Cache(address,bytes4)",
    "implementsERC165Interface(address,bytes4)",
    "implementsERC165InterfaceNoCache(address,bytes4)",
  ];

  var eventsInInterface = [
    "InterfaceImplementerSet(address,bytes32,address)",
    "ManagerChanged(address,address)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIERC20(events: any[], functions: any[]) {
  var functionsInInterface = [
    "totalSupply()",
    "balanceOf(address)",
    "transfer(address,uint256)",
    "allowance(address,address)",
    "approve(address,uint256)",
    "transferFrom(address,address,uint256)",
  ];

  var eventsInInterface = [
    "Transfer(address,address,uint256)",
    "Approval(address,address,uint256)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIERC20Metadata(events: any[], functions: any[]) {
  var functionsInInterface = [
    "name()",
    "symbol()",
    "decimals()",
    // IERC20
    "totalSupply()",
    "balanceOf(address)",
    "transfer(address,uint256)",
    "allowance(address,address)",
    "approve(address,uint256)",
    "transferFrom(address,address,uint256)",
  ];

  var eventsInInterface: any[] = [
    // IERC20
    "Transfer(address,address,uint256)",
    "Approval(address,address,uint256)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIERC2309(events: any[], functions: any[]) {
  var functionsInInterface: any[] = [];

  var eventsInInterface = [
    "ConsecutiveTransfer(uint256,uint256,address,address)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIERC2612(events: any[], functions: any[]) {
  var functionsInInterface: any[] = [
    // IERC20Permit
    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)",
    "nonces(address)",
    "DOMAIN_SEPARATOR()",
  ];

  var eventsInInterface: any[] = [];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIERC2981(events: any[], functions: any[]) {
  var functionsInInterface = [
    "royaltyInfo(uint256,uint256)",
    // IERC165
    "supportsInterface(bytes4)",
  ];

  var eventsInInterface: any[] = [];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIERC3156FlashBorrower(events: any[], functions: any[]) {
  var functionsInInterface = [
    "onFlashLoan(address,address,uint256,uint256,bytes)",
  ];

  var eventsInInterface: any[] = [];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIERC3156FlashLender(events: any[], functions: any[]) {
  var functionsInInterface = [
    "maxFlashLoan(address)",
    "flashFee(address,uint256)",
    "flashLoan(address,address,uint256,bytes)",
  ];

  var eventsInInterface: any[] = [];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIERC4626(events: any[], functions: any[]) {
  var functionsInInterface = [
    "asset()",
    "totalAssets()",
    "convertToShares(uint256)",
    "convertToAssets(uint256)",
    "maxDeposit(address)",
    "previewDeposit(uint256)",
    "deposit(uint256,address)",
    "maxMint(address)",
    "previewMint(uint256)",
    "mint(uint256,address)",
    "maxWithdraw(address)",
    "previewWithdraw(uint256)",
    "withdraw(uint256,address,address)",
    "maxRedeem(address)",
    "previewRedeem(uint256)",
    "redeem(uint256,address,address)",
    // IERC20Metadata
    "name()",
    "symbol()",
    "decimals()",
    // IERC20
    "totalSupply()",
    "balanceOf(address)",
    "transfer(address,uint256)",
    "allowance(address,address)",
    "approve(address,uint256)",
    "transferFrom(address,address,uint256)",
  ];

  var eventsInInterface = [
    "Deposit(address,address,uint256,uint256)",
    "Withdraw(address,address,address,uint256,uint256)",
    // IERC20
    "Transfer(address,address,uint256)",
    "Approval(address,address,uint256)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIERC721(events: any[], functions: any[]) {
  var functionsInInterface = [
    "balanceOf(address)",
    "ownerOf(uint256)",
    "allowance(address,address)",
    "approve(address,uint256)",
    "setApprovalForAll(address,bool)",
    "getApproved(uint256)",
    "isApprovedForAll(address,address)",
    "transferFrom(address,address,uint256)",
    "safeTransferFrom(address,address,uint256)",
    "safeTransferFrom(address,address,uint256,bytes)",
    // IERC165
    "supportsInterface(bytes4)",
  ];

  var eventsInInterface = [
    "Transfer(address,address,uint256)",
    "Approval(address,address,uint256)",
    "ApprovalForAll(address,address,bool)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIERC721Enumerable(events: any[], functions: any[]) {
  var functionsInInterface = [
    "tokenOfOwnerByIndex(address,uint256)",
    "totalSupply()",
    "tokenByIndex(uint256)",
    // IERC721
    "balanceOf(address)",
    "ownerOf(uint256)",
    "allowance(address,address)",
    "approve(address,uint256)",
    "setApprovalForAll(address,bool)",
    "getApproved(uint256)",
    "isApprovedForAll(address,address)",
    "transferFrom(address,address,uint256)",
    "safeTransferFrom(address,address,uint256)",
    "safeTransferFrom(address,address,uint256,bytes)",
    // IERC165
    "supportsInterface(bytes4)",
  ];

  var eventsInInterface = [
    // IERC721
    "Transfer(address,address,uint256)",
    "Approval(address,address,uint256)",
    "ApprovalForAll(address,address,bool)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIERC721Metadata(events: any[], functions: any[]) {
  var functionsInInterface = [
    "name()",
    "symbol()",
    "tokenURI(uint256)",
    // IERC721
    "balanceOf(address)",
    "ownerOf(uint256)",
    "allowance(address,address)",
    "approve(address,uint256)",
    "setApprovalForAll(address,bool)",
    "getApproved(uint256)",
    "isApprovedForAll(address,address)",
    "transferFrom(address,address,uint256)",
    "safeTransferFrom(address,address,uint256)",
    "safeTransferFrom(address,address,uint256,bytes)",
    // IERC165
    "supportsInterface(bytes4)",
  ];

  var eventsInInterface = [
    // IERC721
    "Transfer(address,address,uint256)",
    "Approval(address,address,uint256)",
    "ApprovalForAll(address,address,bool)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIERC721Receiver(events: any[], functions: any[]) {
  var functionsInInterface = [
    "onERC721Received(address,address,uint256,bytes)",
  ];

  var eventsInInterface: any[] = [];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIERC777(events: any[], functions: any[]) {
  var functionsInInterface = [
    "name()",
    "symbol()",
    "granularity()",
    "totalSupply()",
    "balanceOf(address)",
    "send(address,uint256,bytes)",
    "burn(uint256,bytes)",
    "isOperatorFor(address,address)",
    "authorizeOperator(address)",
    "revokeOperator(address)",
    "defaultOperators()",
    "operatorSend(address,address,uint256,bytes,bytes)",
    "operatorBurn(address,uint256,bytes,bytes)",
  ];

  var eventsInInterface = [
    "Minted(address,address,uint256,bytes,bytes)",
    "Burned(address,address,uint256,bytes,bytes)",
    "AuthorizedOperator(address,address)",
    "RevokedOperator(address,address)",
    "Sent(address,address,address,uint256,bytes,bytes)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIERC777Recipient(events: any[], functions: any[]) {
  var functionsInInterface = [
    "tokensReceived(address,address,address,uint256,bytes,bytes)",
  ];

  var eventsInInterface: any[] = [];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIERC777Sender(events: any[], functions: any[]) {
  var functionsInInterface = [
    "tokensToSend(address,address,address,uint256,bytes,bytes)",
  ];

  var eventsInInterface: any[] = [];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIERC1822Proxiable(events: any[], functions: any[]) {
  var functionsInInterface = ["proxiableUUID()"];

  var eventsInInterface: any[] = [];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

/****************** METATX *******************************/

export function isItERC2771Context(events: any[], functions: any[]) {
  var functionsInInterface: any[] = ["isTrustedForwarder(address)"];

  var eventsInInterface: any[] = [];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItMinimalForwarder(events: any[], functions: any[]) {
  var functionsInInterface: any[] = [
    "getNonce(address)",
    "verify((address,address,uint256,uint256,uint256,bytes),bytes)",
    "execute((address,address,uint256,uint256,uint256,bytes),bytes)",
  ];

  var eventsInInterface: any[] = [];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

/****************** PROXY *******************************/

export function isItProxy(events: any[], functions: any[]) {
  var functionsInInterface: any[] = [
    "upgradeTo(address)",
    "upgradeToAndCall(address,bytes)",
  ];

  var eventsInInterface: any[] = [];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItERC1967Upgrade(events: any[], functions: any[]) {
  var functionsInInterface: any[] = [];

  var eventsInInterface: any[] = [
    "Upgraded(address)",
    "AdminChanged(address,address)",
    "BeaconUpgraded(address)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIBeacon(events: any[], functions: any[]) {
  var functionsInInterface: any[] = ["implementation()"];

  var eventsInInterface: any[] = [];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItUpgradeableBeacon(events: any[], functions: any[]) {
  var functionsInInterface: any[] = [
    // 'implementation()',
    // IBeacon
    "implementation()",
    // Ownable
    "owner()",
    "renounceOwnership()",
    "transferOwnership(address)",
  ];

  var eventsInInterface: any[] = [
    "Upgraded(address)",
    // Ownable
    "OwnershipTransferred(address,address)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItProxyAdmin(events: any[], functions: any[]) {
  // ProxyAdmin must be Ownable -> should it ?

  var functionsInInterface: any[] = [
    "getProxyImplementation(address)",
    "getProxyAdmin(address)",
    "changeProxyAdmin(address,address)",
    "upgrade(address,address)",
    "upgradeAndCall(address,address,bytes)",
    // Ownable
    "owner()",
    "renounceOwnership()",
    "transferOwnership(address)",
  ];

  var eventsInInterface = ["OwnershipTransferred(address,address)"];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItTransparentUpgradeableProxy(
  events: any[],
  functions: any[]
) {
  var functionsInInterface: any[] = [
    "admin()",
    "implementation()",
    "changeAdmin(address)",
    "upgradeTo(address)",
    "upgradeToAndCall(address,bytes)",
  ];

  var eventsInInterface: any[] = [
    // ERC1967Upgrade
    "Upgraded(address)",
    "AdminChanged(address,address)",
    "BeaconUpgraded(address)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItInitializable(events: any[], functions: any[]) {
  var eventsInInterface: any[] = ["Initialized(uint8)"];

  var eventMatchesResults: any[] = [];
  eventsInInterface.forEach((toBeMatched) => {
    events.forEach((matches) => {
      matches.texts.forEach((text: any) => {
        if (toBeMatched === text)
          eventMatchesResults.push({
            text: toBeMatched,
            hex: matches.hex,
            confidence: (1 / matches.texts.length) * 100,
          });
      });
    });
  });

  var initializerFunctions: any[] = [];
  functions.forEach((element) => {
    element.texts.forEach((textArrayElement: string[]) => {
      if (textArrayElement.includes("initialize"))
        initializerFunctions.push({
          text: textArrayElement,
          hex: element.hex,
          confidence: (1 / element.texts.length) * 100,
        });
    });
  });


  if (initializerFunctions.length > 0 && eventMatchesResults.length > 0)
    return {
      result: true,
      functionmatches: initializerFunctions,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItUUPSUpgradeable(events: any[], functions: any[]) {
  var functionsInInterface = [
    // 'proxiableUUID()',
    "upgradeTo(address)",
    "upgradeToAndCall(address,bytes)",
    // IERC1822Proxiable
    "proxiableUUID()",
  ];

  var eventsInInterface: any[] = [
    // ERC1967Upgrade
    "Upgraded(address)",
    "AdminChanged(address,address)",
    "BeaconUpgraded(address)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

/****************** SECURITY *******************************/

export function isItPausable(events: any[], functions: any[]) {
  var functionsInInterface: any[] = ["paused()"];

  var eventsInInterface = ["Paused(address)", "Unpaused(address)"];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItPullPayment(events: any[], functions: any[]) {
  var functionsInInterface: any[] = [
    "withdrawPayments(address)",
    "payments(address)",
  ];

  var eventsInInterface: any[] = [];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

/****************** TOKENS *******************************/

/****************** ERC1155 *******************************/

export function isItERC1155(events: any[], functions: any[]) {
  var functionsInInterface = [
    // IERC1155MetadataURI
    "uri(uint256)",
    // IERC1155
    "balanceOf(address,uint256)",
    "balanceOfBatch(address[],uint256[])",
    "setApprovalForAll(address,bool)",
    "isApprovedForAll(address,address)",
    "safeTransferFrom(address,address,uint256,uint256,bytes)",
    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)",
    // IERC165
    "supportsInterface(bytes4)",
  ];

  var eventsInInterface = [
    // IERC1155
    "TransferSingle(address,address,address,uint256,uint256)",
    "TransferBatch(address,address,address,uint256[],uint256[])",
    "ApprovalForAll(address,address,bool)",
    "URI(string,uint256)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

/****************** ERC1155/EXTENSIONS *******************************/

export function isItERC1155Burnable(events: any[], functions: any[]) {
  var functionsInInterface = [
    "burn(address,uint256,uint256)",
    "burnBatch(address,uint256[],uint256[])",
    // IERC1155MetadataURI
    "uri(uint256)",
    // IERC1155
    "balanceOf(address,uint256)",
    "balanceOfBatch(address[],uint256[])",
    "setApprovalForAll(address,bool)",
    "isApprovedForAll(address,address)",
    "safeTransferFrom(address,address,uint256,uint256,bytes)",
    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)",
    // IERC165
    "supportsInterface(bytes4)",
  ];

  var eventsInInterface = [
    // IERC1155
    "TransferSingle(address,address,address,uint256,uint256)",
    "TransferBatch(address,address,address,uint256[],uint256[])",
    "ApprovalForAll(address,address,bool)",
    "URI(string,uint256)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItERC1155Pausable(events: any[], functions: any[]) {
  var functionsInInterface = [
    // Pausable
    "paused()",
    // IERC1155MetadataURI
    "uri(uint256)",
    // IERC1155
    "balanceOf(address,uint256)",
    "balanceOfBatch(address[],uint256[])",
    "setApprovalForAll(address,bool)",
    "isApprovedForAll(address,address)",
    "safeTransferFrom(address,address,uint256,uint256,bytes)",
    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)",
    // IERC165
    "supportsInterface(bytes4)",
  ];

  var eventsInInterface = [
    // Pausable
    "Paused(address)",
    "Unpaused(address)",
    // IERC1155
    "TransferSingle(address,address,address,uint256,uint256)",
    "TransferBatch(address,address,address,uint256[],uint256[])",
    "ApprovalForAll(address,address,bool)",
    "URI(string,uint256)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItERC1155Supply(events: any[], functions: any[]) {
  var functionsInInterface = [
    "totalSupply(uint256)",
    "exists(uint256)",
    // IERC1155MetadataURI
    "uri(uint256)",
    // IERC1155
    "balanceOf(address,uint256)",
    "balanceOfBatch(address[],uint256[])",
    "setApprovalForAll(address,bool)",
    "isApprovedForAll(address,address)",
    "safeTransferFrom(address,address,uint256,uint256,bytes)",
    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)",
    // IERC165
    "supportsInterface(bytes4)",
  ];

  var eventsInInterface = [
    // IERC1155
    "TransferSingle(address,address,address,uint256,uint256)",
    "TransferBatch(address,address,address,uint256[],uint256[])",
    "ApprovalForAll(address,address,bool)",
    "URI(string,uint256)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

/****************** ERC20 *******************************/

export function isItERC20(events: any[], functions: any[]) {
  var functionsInInterface = [
    // IERC20Metadata
    "name()",
    "symbol()",
    "decimals()",
    // IERC20
    "totalSupply()",
    "balanceOf(address)",
    "transfer(address,uint256)",
    "allowance(address,address)",
    "approve(address,uint256)",
    "transferFrom(address,address,uint256)",
  ];

  var eventsInInterface = [
    // IERC20
    "Transfer(address,address,uint256)",
    "Approval(address,address,uint256)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

/****************** ERC20/EXTENSIONS *******************************/

export function isItERC20Burnable(events: any[], functions: any[]) {
  var functionsInInterface = [
    "burn(uint256)",
    "burnFrom(address,uint256)",
    // IERC20Metadata
    "name()",
    "symbol()",
    "decimals()",
    // IERC20
    "totalSupply()",
    "balanceOf(address)",
    "transfer(address,uint256)",
    "allowance(address,address)",
    "approve(address,uint256)",
    "transferFrom(address,address,uint256)",
  ];

  var eventsInInterface = [
    // IERC20
    "Transfer(address,address,uint256)",
    "Approval(address,address,uint256)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItERC20Capped(events: any[], functions: any[]) {
  var functionsInInterface = [
    "cap()",
    // IERC20Metadata
    "name()",
    "symbol()",
    "decimals()",
    // IERC20
    "totalSupply()",
    "balanceOf(address)",
    "transfer(address,uint256)",
    "allowance(address,address)",
    "approve(address,uint256)",
    "transferFrom(address,address,uint256)",
  ];

  var eventsInInterface = [
    // IERC20
    "Transfer(address,address,uint256)",
    "Approval(address,address,uint256)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItERC20FlashMint(events: any[], functions: any[]) {
  var functionsInInterface = [
    // 'maxFlashLoan(address)',
    // 'flashFee(address,uint256)',
    // 'flashLoan(address,address,uint256,bytes)',
    // IERC20Metadata
    "name()",
    "symbol()",
    "decimals()",
    // IERC20
    "totalSupply()",
    "balanceOf(address)",
    "transfer(address,uint256)",
    "allowance(address,address)",
    "approve(address,uint256)",
    "transferFrom(address,address,uint256)",
    // IERC3156FlashLender
    "maxFlashLoan(address)",
    "flashFee(address,uint256)",
    "flashLoan(address,address,uint256,bytes)",
  ];

  var eventsInInterface = [
    // IERC20
    "Transfer(address,address,uint256)",
    "Approval(address,address,uint256)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItERC20Pausable(events: any[], functions: any[]) {
  var functionsInInterface = [
    // IERC20Metadata
    "name()",
    "symbol()",
    "decimals()",
    // IERC20
    "totalSupply()",
    "balanceOf(address)",
    "transfer(address,uint256)",
    "allowance(address,address)",
    "approve(address,uint256)",
    "transferFrom(address,address,uint256)",
    // Pausable
    "paused()",
  ];

  var eventsInInterface = [
    // IERC20
    "Transfer(address,address,uint256)",
    "Approval(address,address,uint256)",
    // Pausable
    "Paused(address)",
    "Unpaused(address)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItERC20Permit(events: any[], functions: any[]) {
  var functionsInInterface = [
    // IERC20Metadata
    "name()",
    "symbol()",
    "decimals()",
    // IERC20
    "totalSupply()",
    "balanceOf(address)",
    "transfer(address,uint256)",
    "allowance(address,address)",
    "approve(address,uint256)",
    "transferFrom(address,address,uint256)",
    // IERC20Permit
    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)",
    "nonces(address)",
    "DOMAIN_SEPARATOR()",
  ];

  var eventsInInterface = [
    // IERC20
    "Transfer(address,address,uint256)",
    "Approval(address,address,uint256)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItERC20Snapshot(events: any[], functions: any[]) {
  var functionsInInterface = [
    "balanceOfAt(address,uint256)",
    "totalSupplyAt(uint256)",
    // IERC20Metadata
    "name()",
    "symbol()",
    "decimals()",
    // IERC20
    "totalSupply()",
    "balanceOf(address)",
    "transfer(address,uint256)",
    "allowance(address,address)",
    "approve(address,uint256)",
    "transferFrom(address,address,uint256)",
  ];

  var eventsInInterface = [
    "Snapshot(uint256)",
    // IERC20
    "Transfer(address,address,uint256)",
    "Approval(address,address,uint256)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItERC20Votes(events: any[], functions: any[]) {
  var functionsInInterface = [
    "checkpoints(address,uint32)",
    "numCheckpoints(address)",
    // IVotes
    "getVotes(address)",
    "getPastVotes(address,uint256)",
    "getPastTotalSupply(uint256)",
    "delegates(address)",
    "delegate(address)",
    "delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)",
    // IERCPermit
    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)",
    "nonces(address)",
    "DOMAIN_SEPARATOR()",
    // IERC20Metadata
    "name()",
    "symbol()",
    "decimals()",
    // IERC20
    "totalSupply()",
    "balanceOf(address)",
    "transfer(address,uint256)",
    "allowance(address,address)",
    "approve(address,uint256)",
    "transferFrom(address,address,uint256)",
  ];

  var eventsInInterface = [
    // IVotes
    "DelegateChanged(address,address,address)",
    "DelegateVotesChanged(address,uint256,uint256)",
    // IERC20
    "Transfer(address,address,uint256)",
    "Approval(address,address,uint256)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItERC20VotesComp(events: any[], functions: any[]) {
  var functionsInInterface = [
    "getCurrentVotes(address)",
    "getPriorVotes(address,uint256)",
    // ERC20Votes
    "checkpoints(address,uint32)",
    "numCheckpoints(address)",
    // IVotes
    "getVotes(address)",
    "getPastVotes(address,uint256)",
    "getPastTotalSupply(uint256)",
    "delegates(address)",
    "delegate(address)",
    "delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)",
    // IERCPermit
    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)",
    "nonces(address)",
    "DOMAIN_SEPARATOR()",
    // IERC20Metadata
    "name()",
    "symbol()",
    "decimals()",
    // IERC20
    "totalSupply()",
    "balanceOf(address)",
    "transfer(address,uint256)",
    "allowance(address,address)",
    "approve(address,uint256)",
    "transferFrom(address,address,uint256)",
  ];

  var eventsInInterface: any[] = [
    // IVotes
    "DelegateChanged(address,address,address)",
    "DelegateVotesChanged(address,uint256,uint256)",
    // IERC20
    "Transfer(address,address,uint256)",
    "Approval(address,address,uint256)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItERC20Wrapper(events: any[], functions: any[]) {
  var functionsInInterface = [
    // 'decimals()',
    "depositFor(address,uint256)",
    "withdrawTo(address,uint256)",
    // IERC20Metadata
    "name()",
    "symbol()",
    "decimals()",
    // IERC20
    "totalSupply()",
    "balanceOf(address)",
    "transfer(address,uint256)",
    "allowance(address,address)",
    "approve(address,uint256)",
    "transferFrom(address,address,uint256)",
  ];

  var eventsInInterface = [
    // IERC20
    "Transfer(address,address,uint256)",
    "Approval(address,address,uint256)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItERC4626(events: any[], functions: any[]) {
  var functionsInInterface = [
    // IERC4626
    "asset()",
    "totalAssets()",
    "convertToShares(uint256)",
    "convertToAssets(uint256)",
    "maxDeposit(address)",
    "previewDeposit(uint256)",
    "deposit(uint256,address)",
    "maxMint(address)",
    "previewMint(uint256)",
    "mint(uint256,address)",
    "maxWithdraw(address)",
    "previewWithdraw(uint256)",
    "withdraw(uint256,address,address)",
    "maxRedeem(address)",
    "previewRedeem(uint256)",
    "redeem(uint256,address,address)",
    // IERC20Metadata
    "name()",
    "symbol()",
    "decimals()",
    // IERC20
    "totalSupply()",
    "balanceOf(address)",
    "transfer(address,uint256)",
    "allowance(address,address)",
    "approve(address,uint256)",
    "transferFrom(address,address,uint256)",
  ];

  var eventsInInterface = [
    // IERC4626
    "Deposit(address,address,uint256,uint256)",
    "Withdraw(address,address,address,uint256,uint256)",
    // IERC20
    "Transfer(address,address,uint256)",
    "Approval(address,address,uint256)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItTokenTimelock(events: any[], functions: any[]) {
  var functionsInInterface = [
    "token()",
    "beneficiary()",
    "releaseTime()",
    "release()",
  ];

  var eventsInInterface: any[] = [];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

/****************** ERC721 *******************************/

export function isItERC721(events: any[], functions: any[]) {
  var functionsInInterface = [
    // IERC721Metadata
    "name()",
    "symbol()",
    "tokenURI(uint256)",
    // IERC721
    "balanceOf(address)",
    "ownerOf(uint256)",
    "allowance(address,address)",
    "approve(address,uint256)",
    "setApprovalForAll(address,bool)",
    "getApproved(uint256)",
    "isApprovedForAll(address,address)",
    "transferFrom(address,address,uint256)",
    "safeTransferFrom(address,address,uint256)",
    "safeTransferFrom(address,address,uint256,bytes)",
    // IERC165
    "supportsInterface(bytes4)",
  ];

  var eventsInInterface = [
    // IERC721
    "Transfer(address,address,uint256)",
    "Approval(address,address,uint256)",
    "ApprovalForAll(address,address,bool)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

/****************** ERC721/EXTENSIONS *******************************/

export function isItERC721Burnable(events: any[], functions: any[]) {
  var functionsInInterface = [
    "burn(uint256)",
    // IERC721Metadata
    "name()",
    "symbol()",
    "tokenURI(uint256)",
    // IERC721
    "balanceOf(address)",
    "ownerOf(uint256)",
    "allowance(address,address)",
    "approve(address,uint256)",
    "setApprovalForAll(address,bool)",
    "getApproved(uint256)",
    "isApprovedForAll(address,address)",
    "transferFrom(address,address,uint256)",
    "safeTransferFrom(address,address,uint256)",
    "safeTransferFrom(address,address,uint256,bytes)",
    // IERC165
    "supportsInterface(bytes4)",
  ];

  var eventsInInterface = [
    // IERC721
    "Transfer(address,address,uint256)",
    "Approval(address,address,uint256)",
    "ApprovalForAll(address,address,bool)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItERC721Consecutive(events: any[], functions: any[]) {
  var functionsInInterface = [
    // IERC721Metadata
    "name()",
    "symbol()",
    "tokenURI(uint256)",
    // IERC721
    "balanceOf(address)",
    "ownerOf(uint256)",
    "allowance(address,address)",
    "approve(address,uint256)",
    "setApprovalForAll(address,bool)",
    "getApproved(uint256)",
    "isApprovedForAll(address,address)",
    "transferFrom(address,address,uint256)",
    "safeTransferFrom(address,address,uint256)",
    "safeTransferFrom(address,address,uint256,bytes)",
    // IERC165
    "supportsInterface(bytes4)",
  ];

  var eventsInInterface = [
    // IERC721
    "Transfer(address,address,uint256)",
    "Approval(address,address,uint256)",
    "ApprovalForAll(address,address,bool)",
    // IERC2309
    "ConsecutiveTransfer(uint256,uint256,address,address)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItERC721Enumerable(events: any[], functions: any[]) {
  var functionsInInterface = [
    // IERC721Enumerable
    "tokenOfOwnerByIndex(address,uint256)",
    "totalSupply()",
    "tokenByIndex(uint256)",
    // IERC721Metadata
    "name()",
    "symbol()",
    "tokenURI(uint256)",
    // IERC721
    "balanceOf(address)",
    "ownerOf(uint256)",
    "allowance(address,address)",
    "approve(address,uint256)",
    "setApprovalForAll(address,bool)",
    "getApproved(uint256)",
    "isApprovedForAll(address,address)",
    "transferFrom(address,address,uint256)",
    "safeTransferFrom(address,address,uint256)",
    "safeTransferFrom(address,address,uint256,bytes)",
    // IERC165
    "supportsInterface(bytes4)",
  ];

  var eventsInInterface = [
    // IERC721
    "Transfer(address,address,uint256)",
    "Approval(address,address,uint256)",
    "ApprovalForAll(address,address,bool)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItERC721Pausable(events: any[], functions: any[]) {
  var functionsInInterface = [
    // Pausable
    "paused()",
    // IERC721Metadata
    "name()",
    "symbol()",
    "tokenURI(uint256)",
    // IERC721
    "balanceOf(address)",
    "ownerOf(uint256)",
    "allowance(address,address)",
    "approve(address,uint256)",
    "setApprovalForAll(address,bool)",
    "getApproved(uint256)",
    "isApprovedForAll(address,address)",
    "transferFrom(address,address,uint256)",
    "safeTransferFrom(address,address,uint256)",
    "safeTransferFrom(address,address,uint256,bytes)",
    // IERC165
    "supportsInterface(bytes4)",
  ];

  var eventsInInterface = [
    // Pausable
    "Paused(address)",
    "Unpaused(address)",
    // IERC721
    "Transfer(address,address,uint256)",
    "Approval(address,address,uint256)",
    "ApprovalForAll(address,address,bool)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItERC721Royalty(events: any[], functions: any[]) {
  var functionsInInterface = [
    // ERC2981
    "royaltyInfo(uint256,uint256)",
    // IERC721Metadata
    "name()",
    "symbol()",
    "tokenURI(uint256)",
    // IERC721
    "balanceOf(address)",
    "ownerOf(uint256)",
    "allowance(address,address)",
    "approve(address,uint256)",
    "setApprovalForAll(address,bool)",
    "getApproved(uint256)",
    "isApprovedForAll(address,address)",
    "transferFrom(address,address,uint256)",
    "safeTransferFrom(address,address,uint256)",
    "safeTransferFrom(address,address,uint256,bytes)",
    // IERC165
    "supportsInterface(bytes4)",
  ];

  var eventsInInterface = [
    // IERC721
    "Transfer(address,address,uint256)",
    "Approval(address,address,uint256)",
    "ApprovalForAll(address,address,bool)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItERC721Votes(events: any[], functions: any[]) {
  var functionsInInterface = [
    // IVotes
    "getVotes(address)",
    "getPastVotes(address,uint256)",
    "getPastTotalSupply(uint256)",
    "delegates(address)",
    "delegate(address)",
    "delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)",
    // IERC721Metadata
    "name()",
    "symbol()",
    "tokenURI(uint256)",
    // IERC721
    "balanceOf(address)",
    "ownerOf(uint256)",
    "allowance(address,address)",
    "approve(address,uint256)",
    "setApprovalForAll(address,bool)",
    "getApproved(uint256)",
    "isApprovedForAll(address,address)",
    "transferFrom(address,address,uint256)",
    "safeTransferFrom(address,address,uint256)",
    "safeTransferFrom(address,address,uint256,bytes)",
    // IERC165
    "supportsInterface(bytes4)",
  ];

  var eventsInInterface = [
    // IVotes
    "DelegateChanged(address,address,address)",
    "DelegateVotesChanged(address,uint256,uint256)",
    // IERC721
    "Transfer(address,address,uint256)",
    "Approval(address,address,uint256)",
    "ApprovalForAll(address,address,bool)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

/****************** ERC777 *******************************/

export function isItERC777(events: any[], functions: any[]) {
  var functionsInInterface = [
    // IERC777
    "name()",
    "symbol()",
    "granularity()",
    "totalSupply()",
    "balanceOf(address)",
    "send(address,uint256,bytes)",
    "burn(uint256,bytes)",
    "isOperatorFor(address,address)",
    "authorizeOperator(address)",
    "revokeOperator(address)",
    "defaultOperators()",
    "operatorSend(address,address,uint256,bytes,bytes)",
    "operatorBurn(address,uint256,bytes,bytes)",
    // IERC20
    "totalSupply()",
    "balanceOf(address)",
    "transfer(address,uint256)",
    "allowance(address,address)",
    "approve(address,uint256)",
    "transferFrom(address,address,uint256)",
  ];

  var eventsInInterface = [
    // IERC777
    "Minted(address,address,uint256,bytes,bytes)",
    "Burned(address,address,uint256,bytes,bytes)",
    "AuthorizedOperator(address,address)",
    "RevokedOperator(address,address)",
    "Sent(address,address,address,uint256,bytes,bytes)",
    // IERC20
    "Transfer(address,address,uint256)",
    "Approval(address,address,uint256)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

/****************** UTILS *******************************/

/****************** UTILS/ESCROW *******************************/

export function isItEscrow(events: any[], functions: any[]) {
  var functionsInInterface = [
    "depositsOf(address)",
    "deposit(address)",
    "withdraw(address)",
    // Ownable
    "owner()",
    "renounceOwnership()",
    "transferOwnership(address)",
  ];

  var eventsInInterface = [
    "Deposited(address,uint256)",
    "Withdrawn(address,uint256)",
    // Ownable
    "OwnershipTransferred(address,address)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItConditionalEscrow(events: any[], functions: any[]) {
  var functionsInInterface = [
    "withdrawalAllowed(address)",
    // 'withdraw(address)',
    // Escrow
    "depositsOf(address)",
    "deposit(address)",
    "withdraw(address)",
    // Ownable
    "owner()",
    "renounceOwnership()",
    "transferOwnership(address)",
  ];

  var eventsInInterface: any[] = [
    // Escrow
    "Deposited(address,uint256)",
    "Withdrawn(address,uint256)",
    // Ownable
    "OwnershipTransferred(address,address)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItRefundEscrow(events: any[], functions: any[]) {
  var functionsInInterface = [
    "state()",
    "beneficiary()",
    "deposit(address)",
    "close()",
    "enableRefunds()",
    "beneficiaryWithdraw()",
    // 'withdrawalAllowed(address)',
    // ConditionalEscrow
    "withdrawalAllowed(address)",
    // 'withdraw(address)',
    // Escrow
    "depositsOf(address)",
    "deposit(address)",
    "withdraw(address)",
    // Ownable
    "owner()",
    "renounceOwnership()",
    "transferOwnership(address)",
  ];

  var eventsInInterface = [
    "RefundsClosed()",
    "RefundsEnabled()",
    // Escrow
    "Deposited(address,uint256)",
    "Withdrawn(address,uint256)",
    // Ownable
    "OwnershipTransferred(address,address)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

/****************** VENDOR *******************************/

/****************** VENDOR/AMB *******************************/

export function isItIAMB(events: any[], functions: any[]) {
  var functionsInInterface = [
    "messageSender()",
    "maxGasPerTx()",
    "transactionHash()",
    "messageId()",
    "messageSourceChainId()",
    "messageCallStatus(bytes32)",
    "failedMessageDataHash(bytes32)",
    "failedMessageReceiver(bytes32)",
    "failedMessageSender(bytes32)",
    "requireToPassMessage(address,bytes,uint256)",
    "requireToConfirmMessage(address,bytes,uint256)",
    "sourceChainId()",
    "destinationChainId()",
  ];

  var eventsInInterface = [
    "UserRequestForAffirmation(bytes32,bytes)",
    "UserRequestForSignature(bytes32,bytes)",
    "AffirmationCompleted(address,address,bytes32,bool)",
    "RelayedMessage(address,address,bytes32,bool)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

/****************** VENDOR/ARBITRUM *******************************/

export function isItIArbSys(events: any[], functions: any[]) {
  var functionsInInterface = [
    "arbBlockNumber()",
    "arbBlockHash(uint256)",
    "arbChainID()",
    "arbOSVersion()",
    "getStorageGasAvailable()",
    "isTopLevelCall()",
    "mapL1SenderContractAddressToL2Alias(address,address)",
    "wasMyCallersAddressAliased()",
    "myCallersAddressWithoutAliasing()",
    "withdrawEth(address)",
    "sendTxToL1(address,bytes)",
    "sendMerkleTreeState()",
  ];

  var eventsInInterface = [
    "L2ToL1Tx(address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes)",
    "L2ToL1Transaction(address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,bytes)",
    "SendMerkleUpdate(uint256,bytes32,uint256)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIBridge(events: any[], functions: any[]) {
  var functionsInInterface = [
    "allowedDelayedInboxList(uint256)",
    "allowedOutboxList(uint256)",
    "delayedInboxAccs(uint256)",
    "sequencerInboxAccs(uint256)",
    "rollup()",
    "sequencerInbox()",
    "activeOutbox()",
    "allowedDelayedInboxes(address)",
    "allowedOutboxes(address)",
    "sequencerReportedSubMessageCount()",
    "enqueueDelayedMessage(uint8,address,bytes32)",
    "executeCall(address,uint256,bytes)",
    "delayedMessageCount()",
    "sequencerMessageCount()",
    "enqueueSequencerMessage(bytes32,uint256,uint256,uint256)",
    "submitBatchSpendingReport(address,bytes32)",
    "setSequencerInbox(address)",
    "setDelayedInbox(address,bool)",
    "setOutbox(address,bool)",
    "initialize(address)",
  ];

  var eventsInInterface = [
    "MessageDelivered(uint256,bytes32,address,uint8,address,bytes32,uint256,uint64)",
    "BridgeCallTriggered(address,address,uint256,bytes)",
    "InboxToggle(address,bool)",
    "OutboxToggle(address,bool)",
    "SequencerInboxUpdated(address)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIDelayedMessageProvider(events: any[], functions: any[]) {
  var functionsInInterface: any[] = [];

  var eventsInInterface = [
    "InboxMessageDelivered(uint256,bytes)",
    "InboxMessageDeliveredFromOrigin(uint256)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIInbox(events: any[], functions: any[]) {
  var functionsInInterface = [
    "bridge()",
    "sequencerInbox()",
    "sendL2MessageFromOrigin(bytes)",
    "sendL2Message(bytes)",
    "sendL1FundedUnsignedTransaction(uint256,uint256,uint256,address,bytes)",
    "sendL1FundedContractTransaction(uint256,uint256,address,bytes)",
    "sendUnsignedTransaction(uint256,uint256,uint256,address,uint256,bytes)",
    "sendContractTransaction(uint256,uint256,address,uint256,bytes)",
    "calculateRetryableSubmissionFee(uint256,uint256)",
    "depositEth()",
    "createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)",
    "unsafeCreateRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)",
    "pause()",
    "unpause()",
    "postUpgradeInit(address)",
    "initialize(address,address)",
  ];

  var eventsInInterface: any[] = [];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

export function isItIOutbox(events: any[], functions: any[]) {
  var functionsInInterface = [
    "rollup()",
    "bridge()",
    "spent(uint256)",
    "roots(bytes32)",
    "OUTBOX_VERSION()",
    "updateSendRoot(bytes32,bytes32)",
    "l2ToL1Sender()",
    "l2ToL1Block()",
    "l2ToL1EthBlock()",
    "l2ToL1Timestamp()",
    "l2ToL1OutputId()",
    "executeTransaction(bytes32[],uint256,address,address,uint256,uint256,uint256,uint256,bytes)",
    "executeTransactionSimulation(uint256,address,address,uint256,uint256,uint256,uint256,bytes)",
    "isSpent(uint256)",
    "calculateItemHash(address,address,uint256,uint256,uint256,uint256,bytes)",
    "calculateMerkleRoot(bytes32[],uint256,bytes32)",
  ];

  var eventsInInterface = [
    "SendRootUpdated(bytes32,bytes32)",
    "OutBoxTransactionExecuted(address,address,uint256,uint256)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

/****************** VENDOR/COMPOUND *******************************/

export function isItICompoundTimelock(events: any[], functions: any[]) {
  var functionsInInterface = [
    "GRACE_PERIOD()",
    "MINIMUM_DELAY()",
    "MAXIMUM_DELAY()",
    "admin()",
    "pendingAdmin()",
    "delay()",
    "queuedTransactions(bytes32)",
    "setDelay(uint256)",
    "acceptAdmin()",
    "setPendingAdmin(address)",
    "queueTransaction(address,uint256,string,bytes,uint256)",
    "cancelTransaction(address,uint256,string,bytes,uint256)",
    "executeTransaction(address,uint256,string,bytes,uint256)",
  ];

  var eventsInInterface = [
    "NewAdmin(address)",
    "NewPendingAdmin(address)",
    "NewDelay(uint256)",
    "CancelTransaction(bytes32,address,uint256,string,bytes,uint256)",
    "ExecuteTransaction(bytes32,address,uint256,string,bytes,uint256)",
    "QueueTransaction(bytes32,address,uint256,string,bytes,uint256)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

/****************** VENDOR/OPTIMISM *******************************/

export function isItICrossDomainMessenger(events: any[], functions: any[]) {
  var functionsInInterface = [
    "xDomainMessageSender()",
    "sendMessage(address,bytes,uint32)",
  ];

  var eventsInInterface = [
    "SentMessage(address,address,bytes,uint256,uint256)",
    "RelayedMessage(bytes32)",
    "FailedRelayedMessage(bytes32)",
  ];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}

/****************** VENDOR/POLYGON *******************************/

export function isItIFxMessageProcessor(events: any[], functions: any[]) {
  var functionsInInterface = ["processMessageFromRoot(uint256,address,bytes)"];

  var eventsInInterface: any[] = [];

  var { isItInterface, functionMatchesResults, eventMatchesResults } = match(
    events,
    functions,
    functionsInInterface,
    eventsInInterface
  );

  if (isItInterface)
    return {
      result: true,
      functionmatches: functionMatchesResults,
      eventmatches: eventMatchesResults,
    };
  else
    return {
      result: false,
      functionmatches: null,
      eventmatches: null,
    };
}
