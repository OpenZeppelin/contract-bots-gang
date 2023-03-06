# :male_detective: InterfaceDetector

- Repo: https://github.com/OpenZeppelin/contract-bots-gang/blob/master/interface-detector

This agent uses [`ContractInspector`](https://explorer.forta.network/agent/0x9703bb3bf08bc89e6d0fd273fa995c32f75e8998c314bafdafcfe2491678f083) alerts and it automatically detects for interfaces adherences and contract type.

It detects contracts:
- If it is an [Ownable](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol) contract
- If it is an [Ownable2Step](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable2Step.sol) contract
- If it is an [AccessControl](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/AccessControl.sol) contract
- If it is an [AccessControlEnumerable](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/AccessControlEnumerable.sol) contract
- If it is an [PaymentSplitter](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/finance/PaymentSplitter.sol) contract
- If it is an [VestingWallet](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/finance/VestingWallet.sol) contract
- If it is an [Governor](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/governance/Governor.sol) contract
- If it is an [TimelockController](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/governance/TimelockController.sol) contract
- If it is an [GovernorCompatibilityBravo](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/governance/compatibility/GovernorCompatibilityBravo.sol) contract
- If it is an [GovernorCountingSimple](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/governance/extensions/GovernorCountingSimple.sol) contract
- If it is an [GovernorPreventLateQuorum](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/governance/extensions/GovernorPreventLateQuorum.sol) contract
- If it is an [GovernorSettings](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/governance/extensions/GovernorSettings.sol) contract
- If it is an [GovernorTimelock](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/governance/extensions/GovernorTimelockControl.sol) contract
- If it is an [GovernorTimelockCompound](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/governance/extensions/GovernorTimelockCompound.sol) contract
- If it is an [GovernorVotesQuorumFraction](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/governance/extensions/GovernorVotesQuorumFraction.sol) contract
- If it is an [ERC2771Context](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/metatx/ERC2771Context.sol) contract
- If it is an [MinimalForwarder](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/metatx/MinimalForwarder.sol) contract
- If it has upgradebility contract by exposing `upgradeTo` and `upgradeToAndCall` functions. This can be either a proxy (either `ERC1967` or not) or an UUPS implementation contract. 
- If it is an [UUPSUpgradeable](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/utils/UUPSUpgradeable.sol) implementation logic contract
- If it is an [ERC1967Upgrade](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/ERC1967/ERC1967Upgrade.sol) contract
- If it is an [UpgradeableBeacon](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/beacon/UpgradeableBeacon.sol) contract 
- If it is a [TransparentUpgradeableProxy](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/transparent/TransparentUpgradeableProxy.sol) contract 
- If it is a [ProxyAdmin](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/transparent/ProxyAdmin.sol) contract
- If it is a [Initializable](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/utils/Initializable.sol) contract
- If it is a [Pausable](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/security/Pausable.sol) contract
- If it is a [PullPayment](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/security/PullPayment.sol) contract
- If it is a [ERC1155](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/ERC1155.sol) contract
- If it is a [ERC1155Burnable](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/extensions/ERC1155Burnable.sol) contract
- If it is a [ERC1155Pausable](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/extensions/ERC1155Pausable.sol) contract
- If it is a [ERC1155Supply](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/extensions/ERC1155Supply.sol) contract
- If it is a [ERC20](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol) contract
- If it is a [ERC20Burnable](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/ERC20Burnable.sol) contract
- If it is a [ERC20Capped](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/ERC20Capped.sol) contract
- If it is a [ERC20FlashMint](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/ERC20FlashMint.sol) contract
- If it is a [ERC20Pausable](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/ERC20Pausable.sol) contract
- If it is a [ERC20Permit](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/ERC20Permit.sol) contract
- If it is a [ERC20Snapshot](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/ERC20Snapshot.sol) contract
- If it is a [ERC20Votes](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/ERC20Votes.sol) contract
- If it is a [ERC20VotesComp](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/ERC20VotesComp.sol) contract
- If it is a [ERC20Wrapper](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/ERC20Wrapper.sol) contract
- If it is a [ERC4626](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/ERC4626.sol) contract
- If it is a [TokenTimelock](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/utils/TokenTimelock.sol) contract
- If it is a [ERC721](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol) contract
- If it is a [ERC721Burnable](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721Burnable.sol) contract
- If it is a [ERC721Consecutive](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721Consecutive.sol) contract
- If it is a [ERC721Enumerable](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721Enumerable.sol) contract
- If it is a [ERC721Pausable](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721Pausable.sol) contract
- If it is a [ERC721Royalty](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721Royalty.sol) contract
- If it is a [ERC721Votes](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721Votes.sol) contract
- If it is a [Escrow](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/escrow/Escrow.sol) contract
- If it is a [ConditionalEscrow](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/escrow/ConditionalEscrow.sol) contract
- If it is a [RefundEscrow](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/escrow/RefundEscrow.sol) contract

It detects interfaces:
- If it adheres to  [IAccessControl](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/IAccessControl.sol) interface
- If it adheres to [IAccessControlEnumerable](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/IAccessControlEnumerable.sol) interface
- If it adheres to [IGovernor](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/governance/IGovernor.sol) interface
- If it adheres to [IGovernorCompatibilityBravo](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/governance/compatibility/IGovernorCompatibilityBravo.sol) interface
- If it adheres to [IGovernorTimelock](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/governance/extensions/IGovernorTimelock.sol) interface
- If it adheres to [IVotes](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/governance/utils/IVotes.sol)
- If it adheres to [IERC1155](https://eips.ethereum.org/EIPS/eip-1155) interface
- If it adheres to [IERC1155MetadataURI](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol) interface
- If it adheres to [IERC1155Receiver](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/IERC1155Receiver.sol) interface
- If it adheres to [IERC1363](https://eips.ethereum.org/EIPS/eip-1363) interface
- If it adheres to [IERC1363Receiver](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/interfaces/IERC1363Receiver.sol) interface
- If it adheres to [IERC1363Spender](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/interfaces/IERC1363Spender.sol) interface
- If it adheres to [IERC165](https://eips.ethereum.org/EIPS/eip-165) interface
- If it adheres to [IERC1820Implementer](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/introspection/IERC1820Implementer.sol) interface
- If it adheres to [IERC1820Registry](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/introspection/IERC1820Registry.sol) interface
- If it adheres to [IERC20](https://eips.ethereum.org/EIPS/eip-20) interface
- If it adheres to [IERC20Metadata](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/IERC20Metadata.sol) interface
- If it adheres to [IERC2309](https://eips.ethereum.org/EIPS/eip-2309) interface
- If it adheres to [IERC2612](https://eips.ethereum.org/EIPS/eip-2612) interface
- If it adheres to [IERC2981](https://eips.ethereum.org/EIPS/eip-2981) interface
- If it adheres to [IERC3156FlashBorrower](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/interfaces/IERC3156FlashBorrower.sol) interface
- If it adheres to [IERC3156FlashLender](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/interfaces/IERC3156FlashLender.sol) interface
- If it adheres to [IERC4626](https://eips.ethereum.org/EIPS/eip-4626) interface
- If it adheres to [IERC721](https://eips.ethereum.org/EIPS/eip-721) interface
- If it adheres to [IERC721Enumerable](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/IERC721Enumerable.sol) interface
- If it adheres to [IERC721Metadata](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/IERC721Metadata.sol) interface
- If it adheres to [IERC721Receiver](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/IERC721Receiver.sol) interface
- If it adheres to [IERC777](https://eips.ethereum.org/EIPS/eip-777) interface
- If it adheres to [IERC777Recipient](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC777/IERC777Recipient.sol) interface
- If it adheres to [IERC777Sender](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC777/IERC777Sender.sol) interface
- If it adheres to [IERC1822Proxiable](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/interfaces/draft-IERC1822.sol) interface
- If it adheres to [IBeacon](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/beacon/IBeacon.sol) interface
- If it adheres to [IAmb](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/vendor/amb/IAMB.sol) interface
- If it adheres to [IArbSys](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/vendor/arbitrum/IArbSys.sol) interface
- If it adheres to [IBridge](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/vendor/arbitrum/IBridge.sol) interface
- If it adheres to [IDelayedMessageProvider](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/vendor/arbitrum/IDelayedMessageProvider.sol) interface
- If it adheres to [IInbox](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/vendor/arbitrum/IInbox.sol) interface
- If it adheres to [IOutbox](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/vendor/arbitrum/IOutbox.sol) interface
- If it adheres to [ICompoundTimelock](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/vendor/compound/ICompoundTimelock.sol) interface
- If it adheres to [ICrossDomainMessenger](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/vendor/optimism/ICrossDomainMessenger.sol) interface
- If it adheres to [IFxMessageProcessor](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/vendor/optimism/ICrossDomainMessenger.sol) interface

## How to support more interfaces

- Create a new `isItXXX` function in `src/inspectors.ts` file where `XXX` is the name of the interface you want to support.
- In this new function add the function and events names of the interface definition into the `functionsInInterface` and `eventsInInterface`. Be sure to remove parameters name and `indexes`/`memory`/`calldata` keywords or any other keyword that is not used to calculate the signatures of those functions and events.
- Add `isItXXX` to the imports of the `agent.ts` file.
- Call the `isItXXX` function inside the `analyzeInterface` and take the call results.
- Use the call results to push a new object into the `observationResults` array. Look at other examples to know how to fill the pushing object. Be sure to do this before `observationResults` is returned.

## Output

- Test block: `npm run block 15128926`

```
{
  "name": `Interface detected`,
  "description": `Contract {contractAddress} adheres to some interfaces`
  "alertId": `ID`,
  "protocol": "ethereum",
  "severity": "Info",
  "type": "Info",
  "metadata": {
    "types": // A list of supported interfaces
    "contractAddress": , // the contract address
    "overallConfidence": , // confidence level, many function signatures can correspond to different actual functions
    "extras": "{}" // extra fields
  }
}
```
