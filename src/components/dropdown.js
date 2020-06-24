import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const DropDown = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} className="drop-down">
        <DropdownToggle caret caret size="lg">
            Delivery Port
        </DropdownToggle>
        
        <DropdownMenu  caret >
            <DropdownItem>Origin Country</DropdownItem>
            <DropdownItem>Destination Country</DropdownItem>
        </DropdownMenu>
    </ButtonDropdown>
  );
}

export default DropDown;
