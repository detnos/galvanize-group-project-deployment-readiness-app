import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';

function UserDropDown(props) {

    const handleSelect = (e) => {
        props.handleSelect(e);
    }

return (
    <DropdownButton id="dropdown-basic-button" title="Choose a roster to view" onSelect={handleSelect}>
            {props.units.map((unit, index) => 
                <Dropdown.Item eventKey={index + 1}>{unit.unit}</Dropdown.Item>
            )}
        </DropdownButton>
    )
}
export default UserDropDown;