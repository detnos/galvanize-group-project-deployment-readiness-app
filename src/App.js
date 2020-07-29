import React from 'react';

import './App.css';
import UserList from './UserList';
import NewUser from './NewUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      roles: [],
      users: [],
      show: false,
    }
    this.fetchRoles = this.fetchRoles.bind(this)
    this.fetchUsers = this.fetchUsers.bind(this)
    this.postUser = this.postUser.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
  }

  async fetchRoles() {
    await fetch(`http://localhost:8080/roles`)
      .then((response) => response.json())
      .then((json) => { this.setState({ roles: json }) })
  }
  async fetchUsers() {
    await fetch(`http://localhost:8080/users`)
      .then((response) => response.json())
      .then((json) => { this.setState({ users: json }) })
  }

  async postUser(firstName, lastName, edipi, unit, base, afsc, roleId, roleHeiararchy, phone, email, password, grade) {
    const testUser = {
      firstName: 'Jonny',
      lastName: 'Test',
      edipi: 5555555555,
      unit: '55 Test Sq',
      base: 'Test AFB',
      afsc: '1X1XX',
      roleId: 0,
      roleHeiararchy: 5,
      phone: "(555)555-1234",
      email: 'jonny@airforce.mil',
      password: 'secret-test',
      grade: 'E4'
    };

    const options = {
      method: 'POST',
      body: JSON.stringify(testUser),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    await fetch('http://localhost:8080/users', options)
      .then(res => res.json())
      .then(res => console.log(res));
  }

  handleClose = () => this.setState({show: false});
  handleShow = () => this.setState({ show: true });

  render() {
    if (this.state.roles.length === 0) {
      this.fetchRoles()
    }
    if (this.state.users.length === 0) {
      this.fetchUsers()
    }

    return (
      <div className="App grid-container">
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
      </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new user</Modal.Title>
          </Modal.Header>
          <Modal.Body><NewUser /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
          </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
          </Button>
          </Modal.Footer>
        </Modal>

        Users
        <UserList users={this.state.users} roles={this.state.roles} />
      </div>
    )
  }
}

export default App;
