import React from 'react'
import { Button } from 'react-bootstrap';

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
        this.setState({...this.state,
            [event.target.className]: event.target.value });
    }

    handleSubmit(event) {
        this.postUser(this.state.firstName, this.state.lastName, this.state.edipi, this.state.unit, this.state.base, this.state.afsc, this.state.roleId, this.state.roleHeiararchy, this.state.phone, this.state.email, this.state.password, this.state.grade);
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <form className="new-user-form" onSubmit={() => this.handleSubmit()}>
                    <label>first name:
                    <input type="text" className="firstName" value={this.state.firstName} onChange={this.handleChange} />
                    </label>
                    <label>last name:
                    <input type="text" className="lastName" value={this.state.lastName} onChange={this.handleChange} />
                    </label>
                    <label>edipi:
                    <input type="text" className="edipi" value={this.state.edipi} onChange={this.handleChange} />
                    </label>
                    <label>unit:
                    <input type="text" className="unit" value={this.state.unit} onChange={this.handleChange} />
                    </label>
                    <label>base:
                    <input type="text" className="base" value={this.state.base} onChange={this.handleChange} />
                    </label>
                    <label>afsc:
                <input type="text" className="afsc" value={this.state.afsc} onChange={this.handleChange} />
                    </label>
                    <label>role:
                <input type="text" className="roleId" value={this.state.role} onChange={this.handleChange} />
                    </label>
                    <label>What level does this member work at:
                <input type="text" className="roleHeiararchy" value={this.state.roleHeiararchy} onChange={this.handleChange} />
                    </label>
                    <label>phone number:
                <input type="text" className="phone" value={this.state.phone} onChange={this.handleChange} />
                    </label>
                    <label>email:
                <input type="text" className="email" value={this.state.eamil} onChange={this.handleChange} />
                    </label>
                    <label>password:
                <input type="text" className="password" value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <label>grade:
                <input type="text" className="grade" value={this.state.grade} onChange={this.handleChange} />
                    </label>
                    {/* <input type='submit' variant="primary" value="Submit" /> */}
                    <Button variant="primary" type="submit">Submit</Button>

                </form>
            </React.Fragment>
        )
    }

    
}

export default NewUser;