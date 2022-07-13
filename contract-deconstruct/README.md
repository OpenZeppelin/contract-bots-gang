# ContractDeconstruct

- Repo: https://github.com/OpenZeppelin/contract-bots-gang/blob/master/contract-deconstruct

This agent will detect any new contract deploy.

Will take the bytecode and gives as output:

- Matched function signatures and events with [bytes4.directory](https://www.4byte.directory/)
- The remaining unknown function and event signatures
- The disassembled opcodes list
- The transaction hash
- The newly deployed contract address
- Optionally it can return output of [Yasold analyzer](https://github.com/ajlopez/Yasold)

## Sync with 4byte directory

The scripts will catch-up automatically with latest saved signatures and missing ones, adding them in the corresponding files in `scripts/static` directory.

```
npm run sync:functions
```

and

```
npm run sync:events
```

**Tip**: If you hit rate limits with 4byte.directory, reduces `pagesPerIteration` variable in *-sync scripts.

## Output

- Test tx: `npm run tx 0x7ef4c1f4634983ef60fcd847fbe15eae50d2bcf8451e07d3f5397b8c1b8401fc`

```
{
    name: `CI-XXX`, // XXX Is the Unix timestamp.
    description: `Contract inspection ${contractAddressFromReceipt}`, // Here we put the contract address
    alertId: `CI-XXX`, // XXX Is the Unix timestamp.
    severity: FindingSeverity.Info,
    type: FindingType.Info,
    metadata: {
        transaction: // transaction.hash,
        contractAddress: // Contract address provided by the transaction receipt.
        functions: // list of functions signatures that matched with 4byte directory. Their text string is provided.
        unknownFunctions: //list of functions signatures that didn't match with 4byte directory.
        events: // list of event signatures that matched with 4byte directory. Their text string is provided.
        unknownEvents: // list of event signatures that didn't match with 4byte directory.
        bytecode: // The deployed bytecode (without init code).
        disassembled: // List of opcodes and their eventual values.
        //analysis: // [CURRENTLY COMMMENTED OUT] Output of Yasold tool.
    }
}
```

## Learning resources

- [DefectChecker](https://xin-xia.github.io/publication/tse211.pdf)

## Todo

[] Add tests

[] Create github actions to sync with functions and events once a month

[] Support gnosis multisig executions

[] Parse detected functions and events and group them by hex

[] Add more sources for signatures (currently only 4byte.directory)

[] Add support for:

    - State variables
    - Function returns values
    - Payable
    - Fallback/Receive existence
    - struct definitions