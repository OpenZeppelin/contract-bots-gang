import { TransactionEvent, ethers, getEthersProvider } from "forta-agent";

var ethProvider: ethers.providers.JsonRpcProvider;

export async function getCreatedContractsTX(txEvent: TransactionEvent){

    const contracts: {
        deployer: string,
        contractAddress: string,
        transaction: string,
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
        })
    } else {
        if(!ethProvider) ethProvider = getEthersProvider();
        const bytecode = await ethProvider.getCode(transaction.to);
        if(bytecode.length > 0){
            for (const trace of txEvent.traces) {
                if(trace.type === "create"){
                    if (trace.result.address) {
                        contracts.push({
                          deployer: trace.action.from,
                          contractAddress: trace.result.address,
                          transaction: transaction.hash
                        });
                      }
                }
            }
        }
    }

    return contracts;

}
