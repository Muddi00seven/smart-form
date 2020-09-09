import React, { useEffect,useState } from 'react'
import {Grid, Textfield,  Card, CardText } from 'react-mdl';
import{useStore} from  ".././context/GlobalState";
import{setNumber,viewBoth} from "../store/asyncActions";
import DropDown from './dropdown';
// import { Button , DropdownItem ,ButtonDropdown  , DropdownToggle, DropdownMenu, } from 'reactstrap';
// const Example = (props) => {
//     const [dropdownOpen, setOpen] = useState(false);
  
    
const Form = () => {
    
    const [{web3,accounts,myContract,result}, dispatch] = useStore();
    console.log("RESULT",result);
    const[number,addNumber]= useState();

    useEffect(()=>{
        (async ()=>{
            
            
            if(myContract && accounts[0]){
                const ressponse = await viewBoth(myContract, accounts, dispatch);;
               console.log("RESULT",result);
            }
           
            
            })();
    },[web3,accounts,myContract,,dispatch])
    const onSubmit = async(e) => {
        e.preventDefault();
        console.log("InSubmit");
        try {
            
            
            await setNumber(myContract, accounts, number);
            let response=  await viewBoth(myContract, accounts, dispatch);
            console.log("Gettin both values",response);
        }catch (error){
            console.log("error trax = ",error);
          
        }
      
      }


      const getboth = async(e) => {
        e.preventDefault();
        
       
        
              
            console.log("getboth",myContract.methods, accounts, dispatch);
          let response=  await viewBoth(myContract, accounts, dispatch);
          console.log("Gettin both values",result);
          
        // }catch (error){
        //     console.log("error trax = ",error);
          
        // }
      
      }
    return (
        <div className="container">
            <h1>DAPP FORM</h1><br>
            </br>
    <h2>Number is. {(result)?result[0]:""} , while value is {}</h2>

     <form className="Form-Border" onSubmit={onSubmit}>
                    {/* <Textfield
                        onChange={() => {}}
                        label="Beneficiary Address..."
                        style={{width: '350px'}}
                    /> */}

                    <br/><br/><br/>


                    <Textfield
                        label="Product Description..."
                        rows={3}
                        // value= {number}
                        onChange={(e) => addNumber(e.target.value)}

                        style={{width: '350px'}}
                    />
                    {/* <button onClick={handleClick}> Click</button> */}
                    <button > Add Number</button>
                    <button onClick={viewBoth}> getboth</button>


    </form>
        </div>
        )
}

export default Form
