import React from 'react'
import { Card, Row } from 'react-bootstrap';

function UserLine(props) {
    console.log("roleId: ", props.user.roleId)
    let roleStr = props.user.roleId === 0 ? "" : props.roles[props.user.roleId - 1].role

    return (
        <div>
            <Row className="justify-content-md-center">
                <Card border="primary" style={{ width: '18rem' }}>
                    <Card.Header>{roleStr}</Card.Header>
                    <Card.Body>
                        <Card.Title>{props.user.grade} {props.user.firstName} {props.user.lastName}</Card.Title>
                        <Card.Text>
                            {props.user.afsc}<br />
                            {props.user.phone}<br />
                            {props.user.email}<br />
                            {props.user.unit}<br />
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
            <br />
        </div>
    )
}

export default UserLine;