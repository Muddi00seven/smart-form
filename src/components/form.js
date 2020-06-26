import React from 'react'
import {Grid, Textfield,  Card, CardText } from 'react-mdl';
import DropDown from './dropdown'
// import { Button , DropdownItem ,ButtonDropdown  , DropdownToggle, DropdownMenu, } from 'reactstrap';
// const Example = (props) => {
//     const [dropdownOpen, setOpen] = useState(false);
  
    
const Form = () => {
    
    return (
        <div className="container">
            <h1>LC Application</h1>
            <hr></hr>

     <form className="Form-Border">
                    <Textfield
                        onChange={() => {}}
                        label="Beneficiary Address..."
                        style={{width: '350px'}}
                    />

                    <br/><br/>


                    <Textfield
                        onChange={() => {}}
                        label="Product Description..."
                        rows={3}
                        style={{width: '350px'}}
                    />

                    <br/>
                    <h6>Trading Terms</h6>
                    <hr></hr>
                   

                    <Textfield
                        onChange={() => {}}
                        label="Terms..."
                        rows={3}
                        style={{width: '350px'}}
                    />
                    <br/><br/>
                    <Textfield
                        onChange={() => {}}
                        label="Destination Port"
                        rows={3}
                        style={{width: '350px'}}
                    />
<br></br>
                    {/* <DropDown/>
                    <br/><br/><br/> */}


                    <Textfield
                        onChange={() => {}}
                        pattern="-?[0-9]*(\.[0-9]+)?"
                        error="Input is not a number!"
                        label="Amount..."
                        floatingLabel
                        style={{width: '350px'}}
                    />
                    <br/>
                    <h5>Mediators</h5>
                    <hr></hr>
                    <br/>
                    <Textfield
                        onChange={() => {}}
                        label="Origin Agent"
                        rows={3}
                        style={{width: '350px'}}
                    />
                    <br></br>
                    <Textfield
                        onChange={() => {}}
                        label="Destination Agent"
                        rows={3}
                        style={{width: '350px'}}
                    />
                    <br></br>
                    <button height='400px'>Issue SmartLC</button>
    </form>
        </div>
        )
}

export default Form
