import React from 'react'
import { Card, Row } from 'react-bootstrap';

function UserLine(props) {
    console.log("user: ", props.user)
    let roleStr = props.user.roleId === 0 ? "" : props.roles[props.user.roleId - 1].role

    return (
            <Row className="justify-content-md-center" >
                <Card border="primary" style={{ width: '13rem' }}>
                    <Card.Header>{roleStr}<br />{props.user.unit}</Card.Header>
                    <Card.Body>
                        <Card.Title>{props.user.grade} {props.user.firstName} {props.user.lastName}</Card.Title>
                        <Card.Text>
                            {props.user.afsc}<br />
                            {props.user.phone}<br />
                            {props.user.email}<br />
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
    )
}

export default UserLine;