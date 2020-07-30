import React from 'react';

import './App.css';
import UserList from './UserList';
import NewUser from './NewUser';
import UnitDropDown from './UnitDropDown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Modal, Navbar} from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      roles: [],
      users: [],
      units: [],
      show: false,
    }
    this.fetchRoles = this.fetchRoles.bind(this)
    this.fetchUsers = this.fetchUsers.bind(this)
    // this.postUser = this.postUser.bind(this)
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
      .then((json) => {
        let unitsObj = {}
        let unitsArr = []
        json.map(user => {
          if (!unitsObj[user.unit]) {
            let unit = user.unit;
            unitsObj[unit] = 1;
            unitsArr.push({'type': unit.substring(unit.length - 2), 'unit' : unit})
          }
        })  
        return this.setState({ users: json, units: unitsArr }) 
      })
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
      this.state.users.length === 0 ? 
        "Loading..." 
      :
        <div className="App grid-container">
          <Navbar bg="dark" variant="dark">
            <Button inline variant="primary" onClick={this.handleShow}>
              Add a new user
              </Button>
            <Navbar.Collapse className="justify-content-end">

                <UnitDropDown className="text-right" units={this.state.units} />

            </Navbar.Collapse>

            
          </Navbar>
          <br />
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add a new user</Modal.Title>
              </Modal.Header>
              <Modal.Body><NewUser roles={this.state.roles} /></Modal.Body>
            </Modal>
            <UserList users={this.state.users} roles={this.state.roles} />
        </div>
    )
  }
}

export default App;
