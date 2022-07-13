function match(events: any [], functions: any[], functionsInInterface: any[], eventsInInterface: any[]) {

    var functionMatchesResults: any[] = [];
    functionsInInterface.forEach(toBeMatched => {
      functions.forEach(matches => {
        matches.texts.forEach((text: any) => {
          if(toBeMatched === text) functionMatchesResults.push({
            text: toBeMatched,
            hex: matches.hex,
            confidence: (1/matches.texts.length)*100
          })
        })
      })
    })
  
    var eventMatchesResults: any[] = [];
    eventsInInterface.forEach(toBeMatched => {
      events.forEach(matches => {
        matches.texts.forEach((text: any) => {
          if(toBeMatched === text) eventMatchesResults.push({
            text: toBeMatched,
            hex: matches.hex,
            confidence: (1/matches.texts.length)*100
          })
        })
      })
    })
  
    // Here we should detect percentage of adherence, it would be interesting to detect if a contract half satisfies an interface
    var isItInterface = functionMatchesResults.length == functionsInInterface.length &&
    eventMatchesResults.length == eventsInInterface.length;
    return {isItInterface, functionMatchesResults, eventMatchesResults}
}

export function isItOwnable(events: any[], functions: any[]) {
    var functionsInInterface = [
        'owner()',
        'renounceOwnership()',
        'transferOwnership(address)'
    ];

    var eventsInInterface = [
        'OwnershipTransferred(address,address)'
    ]

    var {isItInterface, functionMatchesResults, eventMatchesResults} = match(
        events, 
        functions, 
        functionsInInterface, 
        eventsInInterface
    )

    if(isItInterface) return {
        result: true, 
        functionmatches: functionMatchesResults, 
        eventmatches: eventMatchesResults
    }; else return {
        result: false, 
        functionmatches: null, 
        eventmatches: null
    }
}

export function isItERC20(events: any[], functions: any[]) {
    var functionsInInterface = [
        'totalSupply()',
        'balanceOf(address)',
        'transfer(address,uint256)',
        'allowance(address,address)',
        'approve(address,uint256)',
        'transferFrom(address,address,uint256)'
    ];

    var eventsInInterface = [
        'Transfer(address,address,uint256)',
        'Approval(address,address,uint256)'
    ]

    var {isItInterface, functionMatchesResults, eventMatchesResults} = match(
        events, 
        functions, 
        functionsInInterface, 
        eventsInInterface
    )

    if(isItInterface) return {
        result: true, 
        functionmatches: functionMatchesResults, 
        eventmatches: eventMatchesResults
    }; else return {
        result: false, 
        functionmatches: null, 
        eventmatches: null
    }
}

export function isItERC721(events: any[], functions: any[]) {
    var functionsInInterface = [
        'balanceOf(address)',
        'ownerOf(uint256)',
        'allowance(address,address)',
        'approve(address,uint256)',
        'setApprovalForAll(address,bool)',
        'getApproved(uint256)',
        'isApprovedForAll(address,address)',
        'transferFrom(address,address,uint256)',
        'safeTransferFrom(address,address,uint256)',
        'safeTransferFrom(address,address,uint256,bytes)',
        'supportsInterface(bytes4)'
    ];

    var eventsInInterface = [
        'Transfer(address,address,uint256)',
        'Approval(address,address,uint256)',
        'ApprovalForAll(address,address,bool)'
    ]

    var {isItInterface, functionMatchesResults, eventMatchesResults} = match(
        events, 
        functions, 
        functionsInInterface, 
        eventsInInterface
    )

    if(isItInterface) return {
        result: true, 
        functionmatches: functionMatchesResults, 
        eventmatches: eventMatchesResults
    }; else return {
        result: false, 
        functionmatches: null, 
        eventmatches: null
    }
}

export function isItAccessControl(events: any[], functions: any[]) {
    var functionsInInterface = [
        'hasRole(bytes32,address)',
        'getRoleAdmin(bytes32)',
        'grantRole(bytes32,address)',
        'revokeRole(bytes32,address)',
        'renounceRole(bytes32,address)'
    ];

    var eventsInInterface = [
        'RoleRevoked(bytes32,address,address)',
        'RoleGranted(bytes32,address,address)',
        'RoleAdminChanged(bytes32,bytes32,bytes32)'
    ]

    var {isItInterface, functionMatchesResults, eventMatchesResults} = match(
        events, 
        functions, 
        functionsInInterface, 
        eventsInInterface
    )

    if(isItInterface) return {
        result: true, 
        functionmatches: functionMatchesResults, 
        eventmatches: eventMatchesResults
    }; else return {
        result: false, 
        functionmatches: null, 
        eventmatches: null
    }
}

export function isItUUPS(events: any[], functions: any[]) {

    var functionsInInterface = [
        'proxiableUUID()'
    ];

    var eventsInInterface: any[] = [
    ]

    var {isItInterface, functionMatchesResults, eventMatchesResults} = match(
        events, 
        functions, 
        functionsInInterface, 
        eventsInInterface
    )

    if(isItInterface) return {
        result: true, 
        functionmatches: functionMatchesResults, 
        eventmatches: eventMatchesResults
    }; else return {
        result: false, 
        functionmatches: null, 
        eventmatches: null
    }
}

export function isItERC1967(events: any[], functions: any[]) {

    var functionsInInterface: any[] = [
    ];

    var eventsInInterface: any[] = [
        "Upgraded(address)",
        "AdminChanged(address,address)",
        "BeaconUpgraded(address)"
    ]

    var {isItInterface, functionMatchesResults, eventMatchesResults} = match(
        events, 
        functions, 
        functionsInInterface, 
        eventsInInterface
    )

    if(isItInterface) return {
        result: true, 
        functionmatches: functionMatchesResults, 
        eventmatches: eventMatchesResults
    }; else return {
        result: false, 
        functionmatches: null, 
        eventmatches: null
    }
}

export function isItProxy(events: any[], functions: any[]) {

    var functionsInInterface: any[] = [
        "upgradeTo(address)",
        "upgradeToAndCall(address,bytes)",
    ];

    var eventsInInterface: any[] = [
    ]

    var {isItInterface, functionMatchesResults, eventMatchesResults} = match(
        events, 
        functions, 
        functionsInInterface, 
        eventsInInterface
    )

    if(isItInterface) return {
        result: true, 
        functionmatches: functionMatchesResults, 
        eventmatches: eventMatchesResults
    }; else return {
        result: false, 
        functionmatches: null, 
        eventmatches: null
    }
}

export function isItTransparentUpgradeableProxyPattern(events: any[], functions: any[]) {

    var functionsInInterface: any[] = [
        "admin()",
        "implementation()",
        "changeAdmin(address)",
        "upgradeTo(address)",
        "upgradeToAndCall(address,bytes)"
    ];

    var eventsInInterface: any[] = [
    ]

    var {isItInterface, functionMatchesResults, eventMatchesResults} = match(
        events, 
        functions, 
        functionsInInterface, 
        eventsInInterface
    )

    if(isItInterface) return {
        result: true, 
        functionmatches: functionMatchesResults, 
        eventmatches: eventMatchesResults
    }; else return {
        result: false, 
        functionmatches: null, 
        eventmatches: null
    }
}

export function isItProxyAdmin(events: any[], functions: any[]) {
    // ProxyAdmin must be Ownable

    var functionsInInterface: any[] = [
        "getProxyImplementation(address)",
        "getProxyAdmin(address)",
        "changeProxyAdmin(address,address)",
        "upgrade(address,address)",
        "upgradeAndCall(address,address,bytes)",
        'owner()',
        'renounceOwnership()',
        'transferOwnership(address)'
    ];

    var eventsInInterface = [
        'OwnershipTransferred(address,address)'
    ]

    var {isItInterface, functionMatchesResults, eventMatchesResults} = match(
        events, 
        functions, 
        functionsInInterface, 
        eventsInInterface
    )

    if(isItInterface) return {
        result: true, 
        functionmatches: functionMatchesResults, 
        eventmatches: eventMatchesResults
    }; else return {
        result: false, 
        functionmatches: null, 
        eventmatches: null
    }
}