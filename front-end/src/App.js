import React from 'react';

import './App.css';
import NewUser from './NewUser';
import WingTree from './WingTree';
import GroupTree from './GroupTree';
import SquadronTree from './SquadronTree';
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
      usersInView: [],
      viewTitle: "",
      usersInViewType: "",
      show: false,
    }
    this.fetchRoles = this.fetchRoles.bind(this)
    this.fetchUsers = this.fetchUsers.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
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
            unitsArr.push({'base': user.base, 'type': unit.substring(unit.length - 2), 'unit' : unit})
          }
          return user
        })  
        return this.setState({ users: json, units: unitsArr }) 
      })
  }
  
  handleClose = () => this.setState({show: false});
  handleShow = () => this.setState({ show: true });
  handleSelect = (e) => {
    this.setState({ usersInViewType: "" });
    let filteredUsers;
    let wg = /wing/i;
    let gp = /gp/i;    
    if (wg.test(this.state.units[Number(e) - 1].unit)) {
      //if wg lvl get all in wing and below
      this.setState({usersInViewType : "Wing"});
      filteredUsers = this.state.users.filter(user => {
        return user.base === this.state.units[Number(e) - 1].base && [1, 2, 4].indexOf(user.roleId) >= 0;
      })
    } else if (gp.test(this.state.units[Number(e) - 1].unit)) {
      //if gp lvl get all in gp and below
      this.setState({ usersInViewType: "Group" });
      //TODO include a way to know which sqs are in which unit (so far this only matches exactly)
      filteredUsers = this.state.users.filter(user => {
      return user.unit === this.state.units[Number(e) - 1].unit
      })
    } else {
    //if sq lvl just match sq exactly
      this.setState({ usersInViewType: "Squadron" });
    filteredUsers = this.state.users.filter(user => user.unit === this.state.units[Number(e) - 1].unit)
    }
    return this.setState({ usersInView: filteredUsers, viewTitle: this.state.units[Number(e) - 1].unit + " Recall Roster"});
  }

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
            <Button inlin="true" variant="primary" onClick={this.handleShow}>
              Add a new user
            </Button>
            <Navbar.Collapse className="justify-content-end">
                <UnitDropDown className="text-right" units={this.state.units} handleSelect={this.handleSelect} />
            </Navbar.Collapse>
          </Navbar>
          <br />
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add a new user</Modal.Title>
            </Modal.Header>
            <Modal.Body><NewUser roles={this.state.roles} /></Modal.Body>
          </Modal>
          <h3>{this.state.viewTitle} </h3>
          {this.state.usersInViewType === "" ?
            "" :
            this.state.usersInViewType === "Wing" ?
              <WingTree users={this.state.usersInView} roles={this.state.roles} /> :
              this.state.usersInViewType === "Group" ?
                <GroupTree users={this.state.usersInView} roles={this.state.roles} /> :
                <SquadronTree users={this.state.usersInView} roles={this.state.roles} />}
        </div>
    )
  }
}

export default App;
