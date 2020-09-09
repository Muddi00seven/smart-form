import { setupWeb3, setupContract, addEthereumAccounts, setResult, web3LoadingError,  } from "./actions";
import Web3 from "web3";
import { MY_CONTRACT_ADDRESS, MY_CONTRACT_ABI  } from '../ABI/myContract';
// import { YENIX_ABI, YENIX_ADDRESS } from "../ABI/Yenix";
// import {  viewbuyersLcs,viewLcsById,tokenBalance,getBuyerLcs,getOriginAgentLcs} from '../APIs/viewTransactions';


export const loadBlockchain = async(dispatch) =>{
    try {
        console.log("Web3 = ",Web3);
        console.log("Web3.givenProvider = ",Web3.givenProvider);
        if(Web3.givenProvider){
            const web3 = new Web3(Web3.givenProvider);
            await Web3.givenProvider.enable();
            dispatch(setupWeb3(web3));
            const contract = new web3.eth.Contract(MY_CONTRACT_ABI, MY_CONTRACT_ADDRESS);
                               
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

export const setNumber= async(contract, accounts,number)=>{
    console.log("before setting Number",number);
 
   const receipt =  await contract.methods.setNumber(number).send({from : accounts[0]});
   console.log("after  setting number ", receipt);
  

}
export const viewBoth = async(contract, accounts, dispatch)=>{
    console.log("before virewing",contract.methods, accounts, dispatch);

   const receipt =  await contract.methods.getBoth().call({from : accounts[0]});
   console.log("after  viewing  ", receipt);
   dispatch(setResult(receipt));

}



export const loadContract = async(lcContract,tokenContract, accounts,  dispatch)=>{
console.log("INLoad contract",lcContract,tokenContract, accounts);
   
// const lcs  = await getBuyerLcs(lcContract, accounts[0],dispatch);
// let agent ='0x145eFf1dD342643dd88B2D7b330C8aA5BA8632C2'; //accounts[0];
// const response  = await getOriginAgentLcs(lcContract, agent,dispatch);      
    //const buyersLC_list=  viewbuyersLcs(lcContraact, accounts,  dispatch);
    }