# :sparkles: Contract Bots Gang :sparkles: 

A collection of [Forta detection bots](https://docs.forta.network/en/latest/quickstart/) :robot: to automatically analyze, inspect, and detect bugs on newly deployed contracts. The repo contains subdirectories, one for each bot. The entire design is meant to be in three layers:

## Live bots
- [`ContractDeconstruct`](https://explorer.forta.network/agent/0x9703bb3bf08bc89e6d0fd273fa995c32f75e8998c314bafdafcfe2491678f083)
- [`InterfaceDetector`](https://explorer.forta.network/agent/0xf75be156b17977784d5f4bfd7a2d3b06f412b7cb6bb71fdf79a75725bf7b01e9)

- :hammer_and_pick: **Deconstruct bots**: 

bots that scan newly deployed contracts, run inspections on the bytecode and spit out organized info to be processed later (function signatures, events, etc..). A first attempt is the `ContractDeconstruct` bot that you can find LIVE [here](https://explorer.forta.network/agent/0x9703bb3bf08bc89e6d0fd273fa995c32f75e8998c314bafdafcfe2491678f083). Take a look at alerts `metadata` to get an idea of what it spits out. Otherwise you can read the [README](https://github.com/OpenZeppelin/contract-bots-gang/tree/master/contract-deconstruct#contractdeconstruct). The bot uses [4byte.directory](https://www.4byte.directory/) database as a lookup table.  There are some scripts to run manually to sync up with latest database updates. If you want to know how to sync latest signatures, read [here](https://github.com/OpenZeppelin/contract-bots-gang/tree/master/contract-deconstruct#sync-with-4byte-directory).

- :male_detective: **Detector bots**: 

bots that use `ContractDeconstruct` to run automatic detection of the type of contract, interfaces supported or patterns used. A first attempt I've done is an `InterfaceDetector` which is able to detect `ERC20` and `ERC721` tokens, `TransparentUpgradeable` or `UUPS` proxies, `Ownable` or `AccessControl` contracts and even `ProxyAdmin` contracts.  You can find the bot LIVE [here](https://explorer.forta.network/agent/0xf75be156b17977784d5f4bfd7a2d3b06f412b7cb6bb71fdf79a75725bf7b01e9) and you can read the [README]() on the repo. You want to add your own interface or contract type detection ? read [here](https://github.com/OpenZeppelin/contract-bots-gang/tree/master/interface-detector#interface-detector) how to do it.

- :boom: **[WIP] Hunter bots**: 

bots that will be using output from detectors and deconstructors to run simulations in a mainnet fork of potential attacks and vulnerabilities exploit. If positive  bots will raise alerts.

## :hammer_and_pick: Deconstructors

### `ContractDeconstruct` bot

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

## :male_detective: Detectors

### `InterfaceDetector` bot

This bot takes `contract-deconstruct` bot output (it reads fired alerts) and uses them to automatically detect if the newly deployed contract adheres to some known interfaces.

About the new contract deployed it detects:

- If it is an [Ownable](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol) contract
- If it adheres to [ERC20](https://eips.ethereum.org/EIPS/eip-20) interface
- If it adheres to [ERC721](https://eips.ethereum.org/EIPS/eip-721) interface
- If it is an [AccessControl](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/AccessControl.sol) contract
- If it has upgradebility contract by exposing `upgradeTo` and `upgradeToAndCall` functions. This can be either a proxy (either `ERC1967` or not) or an UUPS implementation contract. 
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

## :boom: Hunters
