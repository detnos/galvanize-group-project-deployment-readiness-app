import React from 'react'

function UserLine(props) {
    console.log("roleId: ", props.user.roleId)
    let roleStr = props.user.roleId === 0 ? "" : props.roles[props.user.roleId - 1].role

    return (
        <div>
            <div className={"grid-item user user-id-" + props.user.roleId + " user-heiararchy-" + props.user.roleHeiararchy}>
                <div id={props.user.id} >{props.user.id}</div>
                <div id={props.user.firstName} >{props.user.firstName}</div>
                <div id={props.user.lastName} >{props.user.lastName}</div>
                <div id={props.user.afsc} >{props.user.afsc}</div>
                <div id={props.user.base} >{props.user.base}</div>
                <div id={props.user.unit} >{props.user.unit}</div>
                <div id={props.user.email} >{props.user.phone}</div>
                <div id={props.user.email} >{props.user.email}</div>
                <div id={props.user.roleId} >{roleStr}</div>
                <div id={props.user.roleHeiararchy} >{props.user.roleHeiararchy}</div>
            </div>
            <br />
        </div>
    )
}

export default UserLine;