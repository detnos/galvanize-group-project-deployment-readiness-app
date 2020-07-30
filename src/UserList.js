import React from 'react'
import UserLine from './UserLine';

function UserList(props) {
    return (

        <React.Fragment>
            {props.users.map((user, index) => 
                <UserLine key={index} user={user} roles={props.roles} />
            )}
        </React.Fragment>
    )
}

export default UserList;