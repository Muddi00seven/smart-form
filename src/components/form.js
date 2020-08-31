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
    const[number,setNumber]= useState();

    async function handleClick(number) {
        console.log("Number",number);
        // alert(number)
        const response = await setNumber(myContract,accounts,number);
    }
    return (
        <div className="container">
            <h1>DAPP FORM</h1>

     <form className="Form-Border" onSubmit={handleClick}>
                    {/* <Textfield
                        onChange={() => {}}
                        label="Beneficiary Address..."
                        style={{width: '350px'}}
                    /> */}

                    <br/><br/><br/>


                    <Textfield
                        label="Product Description..."
                        rows={3}
                        value = {number}
                        onChange={(e) => setNumber(e.target.value)}

                        style={{width: '350px'}}
                    />
                    {/* <button onClick={handleClick}> Click</button> */}
                    <button > Click</button>


    </form>
        </div>
        )
}

export default Form
