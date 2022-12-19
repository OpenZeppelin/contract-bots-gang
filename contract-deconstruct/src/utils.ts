import { TransactionEvent, ethers, getEthersProvider } from "forta-agent";

var ethProvider: ethers.providers.JsonRpcProvider;

export async function getCreatedContractsTX(txEvent: TransactionEvent){

    const contracts: {
        deployer: string,
        contractAddress: string,
        transaction: string,
        isFactory: boolean,
    }[] = [];

    let transaction = txEvent.transaction;

    if(transaction.to === null || transaction.to === "0x0000000000000000000000000000000000000000"){
        if(!ethProvider) ethProvider = getEthersProvider();
        const receipt = await ethProvider.getTransactionReceipt(transaction.hash);
        if(!receipt) return;
        const contractAddressFromReceipt = receipt.contractAddress;
        contracts.push({
            deployer: transaction.from,
            contractAddress: contractAddressFromReceipt,
            transaction: transaction.hash,
            isFactory: false,
        })
    } else if(txEvent.traces.find(element => element.type === "create")) {
        const newContracts = txEvent.traces.filter(element => element.type === "create");
        for(const trace of newContracts) {
            contracts.push({
                deployer: trace.action.from,
                contractAddress: trace.result.address,
                transaction: transaction.hash,
                isFactory: true,
              });
        }
    }
    return contracts;

}
