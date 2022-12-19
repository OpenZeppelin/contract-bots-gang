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

/****************** TOKENS *******************************/

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

export function isItERC1155(events: any[], functions: any[]) {
    var functionsInInterface = [
        'balanceOf(address,uint256)',
        'balanceOfBatch(address[],uint256[])',
        'setApprovalForAll(address,bool)',
        'isApprovedForAll(address,address)',
        'safeTransferFrom(address,address,uint256,uint256,bytes)',
        'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)',
    ];

    var eventsInInterface = [
        'TransferSingle(address,address,address,uint256,uint256)',
        'TransferBatch(address,address,address,uint256[],uint256[])',
        'ApprovalForAll(address,address,bool)',
        'URI(string,uint256)',
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

export function isItERC777(events: any[], functions: any[]) {
    var functionsInInterface = [
        'name()',
        'symbol()',
        'granularity()',
        'totalSupply()',
        'balanceOf(address)',
        'send(address,uint256,bytes)',
        'burn(uint256,bytes)',
        'isOperatorFor(address,address)',
        'authorizeOperator(address)',
        'revokeOperator(address)',
        'defaultOperators()',
        'operatorSend(address,address,uint256,bytes,bytes)',
        'operatorBurn(address,uint256,bytes,bytes)',
    ];

    var eventsInInterface = [
        'Minted(address,address,uint256,bytes,bytes)',
        'Burned(address,address,uint256,bytes,bytes)',
        'AuthorizedOperator(address,address)',
        'RevokedOperator(address,address)',
        'Sent(address,address,address,uint256,bytes,bytes)'
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
    // ProxyAdmin must be Ownable -> should it ?

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

export function isItInitializable(functions: any[]) {
    var initializerFunctions: any[] = [];
    functions.forEach(element => {
        element.texts.forEach((textArrayElement: string[]) => {
            if(textArrayElement.includes('initialize')) initializerFunctions.push({
                text: textArrayElement,
                hex: element.hex,
                confidence: (1/element.texts.length)*100
            });
        });
    })

    if(initializerFunctions.length > 0) return {
        result: true, 
        functionmatches: initializerFunctions,
        eventmatches: null
    }; else return {
        result: false, 
        functionmatches: null, 
        eventmatches: null
    }
}

/****************** SECURITY *******************************/

export function isItPausable(events: any[], functions: any[]) {
    // ProxyAdmin must be Ownable -> should it ?

    var functionsInInterface: any[] = [
        "paused()",
    ];

    var eventsInInterface = [
        'Paused(address)',
        'Unpaused(address)'
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