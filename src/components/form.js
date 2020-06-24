import React from 'react'
import {Grid, Textfield,  Card, CardText } from 'react-mdl';
import DropDown from './dropdown'
// import { Button , DropdownItem ,ButtonDropdown  , DropdownToggle, DropdownMenu, } from 'reactstrap';
// const Example = (props) => {
//     const [dropdownOpen, setOpen] = useState(false);
  
    
const Form = () => {
    
    return (
        <div className="container">
            <h1>DAPP FORM</h1>

     <form className="Form-Border">
                    <Textfield
                        onChange={() => {}}
                        label="Beneficiary Address..."
                        style={{width: '350px'}}
                    />

                    <br/><br/><br/>


                    <Textfield
                        onChange={() => {}}
                        label="Product Description..."
                        rows={3}
                        style={{width: '350px'}}
                    />

                    <br/><br/><br/>

                    <Textfield
                        onChange={() => {}}
                        label="Traveling Terms..."
                        rows={3}
                        style={{width: '350px'}}
                    />

                    <br/><br/><br/>


                    <DropDown/>
                    <br/><br/><br/>


                    <Textfield
                        onChange={() => {}}
                        pattern="-?[0-9]*(\.[0-9]+)?"
                        error="Input is not a number!"
                        label="Amount..."
                        floatingLabel
                        style={{width: '350px'}}
                    />
    </form>
        </div>
        )
}

export default Form
