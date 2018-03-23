import React, { Component } from 'react'
import ListContacts from './ListContacts'

class App extends Component {

  state = {
    contacts: [
      {
        "id": "rayan",
        "name": "Rayan Florence",
        "email": "rayan@reacttranning.com",
        "avatarURL": "http://localhost:5001/rayan.jpg",
      },{
        "id": "michael",
        "name": "Michael Jacson",
        "email": "michael@reacttranning.com",
        "avatarURL": "http://localhost:5001/michael.jpg",
      },{
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttranning.com",
        "avatarURL": "http://localhost:5001/tyler.jpg",
      }
    ]
  }

  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
  }

  render() {
    return (
      <div className="App">
        <ListContacts
          onDeleteContact={this.removeContact}
          contacts={ this.state.contacts }
        />
      </div>
    );
  }
}

export default App;
