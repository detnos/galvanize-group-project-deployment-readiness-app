import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';

class NewUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: '',
            lastName: '',
            edipi: '',
            unit: '',
            base: '',
            afsc: '',
            roleId: '',
            roleHeiararchy: '',
            phone: '',
            email: '',
            password: '',
            grade: '',
     };

        

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.postUser = this.postUser.bind(this);
    }

    async postUser(firstName, lastName, edipi, unit, base, afsc, roleId, roleHeiararchy, phone, email, password, grade) {
        const user = {
            "firstName": firstName,
            "lastName": lastName,
            "edipi": Number(edipi),
            "unit": unit,
            "base": base,
            "afsc": afsc,
            "roleId": Number(roleId),
            "roleHeiararchy": Number(roleHeiararchy),
            "phone": phone,
            "email": email,
            "password": password,
            "grade": grade
        };

        console.log(user);

        const options = {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        await fetch('http://localhost:8080/users', options)
            .then(res => res.json())
            .then(res => console.log(res));
    }

    handleChange(event) {
        console.log(event.target.name);
        this.setState({...this.state,
            [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        if (!this.state.roleId) this.state.roleId = "0";
        if (!this.state.roleHeiararchy) this.state.roleHeiararchy = "1";
        this.postUser(this.state.firstName, this.state.lastName, this.state.edipi, this.state.unit, this.state.base, this.state.afsc, this.state.roleId, this.state.roleHeiararchy, this.state.phone, this.state.email, this.state.password, this.state.grade);
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <Form className="new-user-form" onSubmit={() => this.handleSubmit()}>
                    <Row>
                        <Col>
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="text" className="firstName" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                        </Col>
                        <Col>
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="text" className="lastName" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Grade</Form.Label>
                            <Form.Control type="text" className="grade" name="grade" value={this.state.grade} onChange={this.handleChange} />
                        </Col>
                        <Col>
                            <Form.Label>Enter your AFSC</Form.Label>
                            <Form.Control type="text" className="afsc" name="afsc" value={this.state.afsc} onChange={this.handleChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Base</Form.Label>
                            <Form.Control type="text" className="base" name="base" value={this.state.base} onChange={this.handleChange} />
                        </Col>
                        <Col>
                            <Form.Label>Unit</Form.Label>
                            <Form.Control type="text" className="unit" name="unit" value={this.state.unit} onChange={this.handleChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Select your role</Form.Label>
                                <Form.Control as="select" className="roleId" name="roleId" value={this.state.roleId} onChange={this.handleChange} >
                                    <option value="0" >No specific role</option>
                                    <option value="1" >{this.props.roles[0].role}</option>
                                    <option value="2" >{this.props.roles[1].role}</option>
                                    <option value="3" >{this.props.roles[2].role}</option>
                                    <option value="4" >{this.props.roles[3].role}</option>
                                    <option value="5" >{this.props.roles[4].role}</option>
                                    <option value="6" >{this.props.roles[5].role}</option>
                                    <option value="7" >{this.props.roles[6].role}</option>
                                    <option value="8" >{this.props.roles[7].role}</option>
                                    <option value="9" >{this.props.roles[8].role}</option>
                                    <option value="10" >{this.props.roles[9].role}</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>Select the organization level</Form.Label>
                                <Form.Control as="select" className="roleHeiararchy" name="roleHeiararchy" value={this.state.roleHeiararchy} onChange={this.handleChange} >
                                    <option value="1" >Air Force</option>
                                    <option value="2" >MAJCOM</option>
                                    <option value="3" >Wing</option>
                                    <option value="4" >Group</option>
                                    <option value="5" >Squadron</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Edipi</Form.Label>
                            <Form.Control type="text" className="edipi" name="edipi" value={this.state.edipi} onChange={this.handleChange} />
                        </Col>
                        <Col>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" className="password" name="password" value={this.state.password} onChange={this.handleChange} />
                            {/* <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" className="password" name="password" value={this.state.password} onChange={this.handleChange} />
                            </Form.Group> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="text" className="phone" name="phone" value={this.state.phone} onChange={this.handleChange} />
                        </Col>
                        <Col>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" className="email" name="email" value={this.state.eamil} onChange={this.handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </React.Fragment>
        )
    }

    
}

export default NewUser;