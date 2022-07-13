# Contract Bots Gang

Contract Bots Gang is a collection of [Forta detection bots](https://docs.forta.network/en/latest/quickstart/) to analyze new contract deployments and run security inspections.

Goal is to create a galaxy of contracts on three different levels:
- `Deconstructors`: bots that analyzes new contract creations and spit out insights and bytecode analysis
- `Detectors`: bots that uses `Deconstructors` to detect contract type, patterns used, external interactions etc...
- `Hunters`: bots that uses `Detectors` outputs to simulate attack or bug exploitation transaction in a fork environment, raising alerts for positive results.

## Deconstructors

### Contract deconstruct bot

This is the main bot that detects new contract deployments and spits out the following output into the fired alert's data.

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

## Detectors

### Interface detector bot

This bot takes `contract-deconstruct` bot output (it reads fired alerts) and uses them to automatically detect if the newly deployed contract adheres to some known interfaces.

About the new contract deployed it detects:

- If it is an [Ownable](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol) contract
- If it adheres to [ERC20](https://eips.ethereum.org/EIPS/eip-20) interface
- If it adheres to [ERC721](https://eips.ethereum.org/EIPS/eip-721) interface
- If it is an [AccessControl](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/AccessControl.sol) contract
- If it has upgradebility contract by exposing `upgradeTo` and `upgradeToAndCall` functions. This can be either a proxy (either ERC1978 or not) or an UUPS implementation contract. 
- If it is an [UUPS](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/utils/UUPSUpgradeable.sol) implementation logic contract
- If it adheres to [ERC1967](https://eips.ethereum.org/EIPS/eip-1967) interface
- If it is a [TransparentUpgradeableProxy](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/transparent/TransparentUpgradeableProxy.sol) contract 
- If it is a [ProxyAdmin](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/transparent/ProxyAdmin.sol) contract

Read [here](./interface-detector/README.md#how-to-support-more-interfaces) on how to add more supported interfaces.

The current output is an alert of the form

```
{
  "name": "XXX interface detected", // XXX is the interface name detected
  "description": "Contract XXX adheres YYY interface", // XXX is contract address, YYY the detected interface
  "alertId": "XXX interface detected", // XXX is the interface name detected
  "protocol": "ethereum",
  "severity": "Info",
  "type": "Info",
  "metadata": {
    "contractAddress": , // the contract address
    "overallConfidence": , // confidence level, many function signatures can correspond to different actual functions
    "extras": "{}" // extra fields
  }
}
```

## Hunters