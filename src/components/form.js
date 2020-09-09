import React, { useState } from 'react'
import {Grid, Textfield,  Card, CardText } from 'react-mdl';
import{useStore} from  ".././context/GlobalState";
import{setNumber,viewBoth} from "../store/asyncActions";
import DropDown from './dropdown';
// import { Button , DropdownItem ,ButtonDropdown  , DropdownToggle, DropdownMenu, } from 'reactstrap';
// const Example = (props) => {
//     const [dropdownOpen, setOpen] = useState(false);
  
    
const Form = () => {
    
    const [{web3,accounts,myContract}, dispatch] = useStore();
    const[number,addNumber]= useState();

    // const  handleClick=async(e)=>{
    //     e.preventDefault();
    //     console.log("INSUBMIT",myContract.methods,number);
    //      alert(number);
    //      try{
    //         console.log("Intry",web3,myContract,accounts,number);
    //      setNumber(myContract, accounts, number);
    //     }catch (error){
    //         console.log("error trax = ",error);
    //     }
    // }

    const onSubmit = async(e) => {
        e.preventDefault();
        console.log("InSubmit");
        try {
           
              
            
            await setNumber(myContract, accounts, number);
          
        }catch (error){
            console.log("error trax = ",error);
          
        }
      
      }


      const getboth = async(e) => {
        
        
       
          try{ 
              
            console.log("getboth",myContract, accounts, dispatch);
          let result=  await viewBoth(myContract, accounts, dispatch);
          console.log("Gettin both values",result);
          
        }catch (error){
            console.log("error trax = ",error);
          
        }
      
      }
    return (
        <div className="container">
            <h1>DAPP FORM</h1>

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
