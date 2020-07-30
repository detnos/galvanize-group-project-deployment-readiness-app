import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';

function UserDropDown(props) {

return (
        <DropdownButton id="dropdown-basic-button" title="Choose a roster to view">
            {props.units.map((unit, index) => 
                <Dropdown.Item href={"#/action-" + index + 1}>{unit.unit}</Dropdown.Item>
            )}
        </DropdownButton>
    )
}
export default UserDropDown;