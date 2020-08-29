import { setupWeb3, setupContract, addEthereumAccounts, issueSmartLc, web3LoadingError, setupToken,setTokenBalance } from "./actions";
import Web3 from "web3";
import { SMART_LC_ABI, SMART_LC_ADDRESS  } from '../ABI/smartLc';
import { YENIX_ABI, YENIX_ADDRESS } from "../ABI/Yenix";
import {  viewbuyersLcs,viewLcsById,tokenBalance,getBuyerLcs,getOriginAgentLcs} from '../APIs/viewTransactions';


export const loadBlockchain = async(dispatch) =>{
    try {
        console.log("Web3 = ",Web3);
        console.log("Web3.givenProvider = ",Web3.givenProvider);
        if(Web3.givenProvider){
            const web3 = new Web3(Web3.givenProvider);
            await Web3.givenProvider.enable();
            dispatch(setupWeb3(web3));
            const contract = new web3.eth.Contract(SMART_LC_ABI, SMART_LC_ADDRESS);
            const token = new web3.eth.Contract(YENIX_ABI,YENIX_ADDRESS);// create yenix contract instance
            dispatch(setupToken(token));
            console.log("TokenContract Loaded",token);
           
            dispatch(setupContract(contract));
            dispatch(setupContract(contract));
            const accounts = await web3.eth.getAccounts();
            dispatch(addEthereumAccounts(accounts));
            console.log("contract = ",contract);
            console.log("contract.methods = ",contract.methods);
            
         
           
        }
        else {
            dispatch(web3LoadingError("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"))
        }
    }
    catch(error){
        console.log("Error in loading Web3 = ",error);
        if(error.code===4001){
            
            dispatch(web3LoadingError(error.message));
        }
    }
}
// const  loadOriginAgentLCs(){}

export const registerLc = async(contract, accounts, lc, dispatch)=>{
    console.log("before LC transaction",lc);
    console.log("Contract",contract,"Account", typeof(accounts[0]));
   const receipt =  await contract.methods.registerLc(lc.seller,lc.amount,lc.originAgent,lc.destinationAgent).send({from : accounts[0]});
   console.log("after  LC transaction ", receipt);
    dispatch(issueSmartLc(lc));
}

// export const registerLc = async(contract, accounts, transaction, dispatch)=>{
//     console.log("before transaction",transaction);
//     console.log("Contract",contract,"Account, account");
//    // const receipt =  await contract.methods.addTransaction(transaction.transactionDescription, transaction.amount).send({from : accounts[0]});
//    // console.log("after  transaction ", receipt);
//     dispatch(issueSmartLc(transaction));
// }


export const loadContract = async(lcContract,tokenContract, accounts,  dispatch)=>{
console.log("INLoad contract",lcContract,tokenContract, accounts)
   
const lcs  = await getBuyerLcs(lcContract, accounts[0],dispatch);
let agent ='0x145eFf1dD342643dd88B2D7b330C8aA5BA8632C2'; //accounts[0];
const response  = await getOriginAgentLcs(lcContract, agent,dispatch);      
    //const buyersLC_list=  viewbuyersLcs(lcContraact, accounts,  dispatch);
    }