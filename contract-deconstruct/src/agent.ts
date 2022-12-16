import {
  Finding,
  FindingSeverity,
  FindingType,
  ethers,
  TransactionEvent,
  getEthersProvider,
} from "forta-agent";
import { disassemble } from "@ethersproject/asm";
import * as dotenv from "dotenv";
import * as importedFunctions from "./static/functions.json";
import * as importedEvents from "./static/events.json";
import { deflate } from "node:zlib";
import { promisify } from "node:util";
import { getCreatedContractsTX } from "./utils";

dotenv.config();

//const yasold = require('yasold');
const asyncDeflate = promisify(deflate);
var ethProvider: ethers.providers.JsonRpcProvider;

const disassembleBytecode = async (contractAddress: string) => {
  var deployedBytecode;
  try {
    deployedBytecode = await ethProvider.getCode(contractAddress);
  } catch (error) {
    console.info("Public provider failed answering to 'getCode', exiting ");
    return;
  }

  if (!deployedBytecode) return null;

  //const analysis = yasold.analyze(deployedBytecode)
  var analysis = "";

  var disassembled = disassemble(deployedBytecode);
  var byte4DirectoryFunctions: string[] = [];
  var byte4DirectoryEvents: string[] = [];
  var mapping: Map<string, boolean> = new Map();

  for (var i = 0; i < disassembled.length; i++) {
    var mnemonic = disassembled[i].opcode.mnemonic;
    if (
      (mnemonic == "PUSH4" || mnemonic == "PUSH32") &&
      !mapping.has(disassembled[i].pushValue as string)
    ) {
      mapping.set(disassembled[i].pushValue as string, true);
      if (mnemonic == "PUSH4")
        byte4DirectoryFunctions.push(disassembled[i].pushValue as string);
      else byte4DirectoryEvents.push(disassembled[i].pushValue as string);
    }
  }

  return {
    byte4DirectoryFunctions,
    byte4DirectoryEvents,
    disassembled,
    analysis,
    deployedBytecode,
  };
};

const getFunctions = async (byte4DirectoryFunctions: string[]) => {
  var newFunction: object;
  var functions: object[] = [];
  var unknownFunctions: string[] = [];
  var functionSignatures: any = importedFunctions;

  for (var j = 0; j < byte4DirectoryFunctions.length; j++) {
    var results = functionSignatures[`${byte4DirectoryFunctions[j]}`];
    if (results && results.length != 0) {
      for (var k = 0; k < results.length; k++) {
        newFunction = {
          text: results[k],
          hex: byte4DirectoryFunctions[j],
        };

        functions.push(newFunction);
      }
    } else {
      unknownFunctions.push(byte4DirectoryFunctions[j]);
    }
  }

  return { functions, unknownFunctions };
};

const getEvents = async (byte4DirectoryEvents: string[]) => {
  var newEvent: object;
  var events: object[] = [];
  var unkownEvents: string[] = [];
  var eventSignatures: any = importedEvents;

  for (var l = 0; l < byte4DirectoryEvents.length; l++) {
    var results = eventSignatures[`${byte4DirectoryEvents[l]}`];
    if (results && results.length != 0) {
      for (var m = 0; m < results.length; m++) {
        newEvent = {
          text: results[m],
          hex: byte4DirectoryEvents[l],
        };
        events.push(newEvent);
      }
    } else {
      unkownEvents.push(byte4DirectoryEvents[l]);
    }
  }

  return { events, unkownEvents };
};

const handleTransactionInternal = async (contractAddress: string) => {
  var getDisassembleResult: any = await disassembleBytecode(contractAddress);

  var getFunctionsResult = await getFunctions(
    getDisassembleResult.byte4DirectoryFunctions
  );

  var getEventsResult = await getEvents(
    getDisassembleResult.byte4DirectoryEvents
  );

  return {
    functions: getFunctionsResult.functions,
    unknownFunctions: getFunctionsResult.unknownFunctions,
    events: getEventsResult.events,
    unkownEvents: getEventsResult.unkownEvents,
    disassembled: getDisassembleResult.disassembled,
    //analysis: getDisassembleResult.analysis,
    bytecode: getDisassembleResult.deployedBytecode,
  };
};

const runTx = async (
  contracts: {
    deployer: string;
    contractAddress: string;
    transaction: string;
    isFactory: boolean;
  }[]
) => {
  let findings: Finding[] = [];

  if (contracts && contracts.length) {
    for (let i = 0; i < contracts.length; i++) {
      if(!ethProvider) ethProvider = getEthersProvider();
      const result = await handleTransactionInternal(
        contracts[i].contractAddress
      );
      var compressedDisassembled: any = await asyncDeflate(
        JSON.stringify(result.disassembled)
      );
      compressedDisassembled = compressedDisassembled.toString("base64");

      // var compressedAnalysis: any = await asyncDeflate(JSON.stringify(result.analysis))
      // compressedAnalysis = compressedAnalysis.toString('base64');
      const isFactory = contracts[i].isFactory ? 'from factory' : '';
      findings.push(
        Finding.fromObject({
          name: `Contract deconstructed`,
          description: `Contract deconstruct ${isFactory} ${contracts[i].contractAddress.substring(0, 10)}`,
          alertId: `CD`,
          severity: FindingSeverity.Info,
          type: FindingType.Info,
          metadata: {
            transaction: contracts[i].transaction,
            contractAddress: contracts[i].contractAddress,
            functions: JSON.stringify(result.functions),
            unknownFunctions: JSON.stringify(result.unknownFunctions),
            events: JSON.stringify(result.events),
            unknownEvents: JSON.stringify(result.unkownEvents),
            bytecode: JSON.stringify(result.bytecode),
            disassembled: compressedDisassembled,
            //analysis: compressedAnalysis
          },
        })
      );
    }
  }

  // if transaction contains CREATE2 execution OPCODE, take out address and take bytecode
  return findings;
};

const handleTransaction = async (txEvent: TransactionEvent) => {
  const contracts = await getCreatedContractsTX(txEvent);
  if (contracts) {
    return await runTx(contracts);
  }
};

export default {
  handleTransaction,
};
