# :hammer_and_pick: ContractDeconstruct

- Repo: https://github.com/OpenZeppelin/contract-bots-gang/blob/master/contract-deconstruct

This agent will detect any new contract deploy.

Will take the bytecode and gives as output:

- Matched function signatures and events with [4byte.directory](https://www.4byte.directory/)
- The remaining unknown function and event signatures
- The disassembled opcodes list
- The transaction hash
- The newly deployed contract address
- Optionally it can return output of [Yasold analyzer](https://github.com/ajlopez/Yasold)

## Sync with [4byte.directory](https://www.4byte.directory/)

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
    name: `Contract deconstructed`,
    description: `Contract inspection ${contractAddressFromReceipt}`, // Here we put the contract address
    alertId: `CI`,
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

**NOTICE**: The `disassembled` and `analysis` fields in the metadata are compressed and Base64 encoded to reduce size. The [way they are compressed](./src/agent.ts#L133) is:

```
    import { deflate } from 'node:zlib'
    import { promisify } from 'node:util'

    const asyncDeflate = promisify(deflate);

    var compressedDisassembled: any = await asyncDeflate(JSON.stringify(result.disassembled));
    compressedDisassembled = compressedDisassembled.toString('base64');

    var compressedAnalysis: any = await asyncDeflate(JSON.stringify(result.analysis))
    compressedAnalysis = compressedAnalysis.toString('base64');
```


This means that a bot using these fields must first decompress. This can be done by adding this to your bot:

```
    import { unzip } from 'node:zlib'
    import { promisify } from 'node:util'

    const asyncUnzip = promisify(unzip);

    /*.....*/

    //Decode metadata
    alerts.forEach(async singleAlert => {
      var decodedDisassembled = await asyncUnzip(Buffer.from(singleAlert.metadata.disassembled, 'base64'));
      singleAlert.metadata.disassembled = decodedDisassembled.toString();

    var decodedAnalysis = await asyncUnzip(Buffer.from(singleAlert.metadata.analysis, 'base64'));
      singleAlert.metadata.analysis = decodedAnalysis.toString();
    })
```

## Learning resources

- [DefectChecker](https://xin-xia.github.io/publication/tse211.pdf)
