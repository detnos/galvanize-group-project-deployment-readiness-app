import React from 'react'
import UserLine from './UserLine';
import { Button, ButtonGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';

function UserList(props) {
    const placement = ['bottom-start', 'bottom', 'bottom-end']
    return (

        <React.Fragment>
            {props.users.map((user, index) => 
                <UserLine key={index} user={user} roles={props.roles} />
            )}
        </React.Fragment>
    )
}

export default UserList;