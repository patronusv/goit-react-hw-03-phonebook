import React, { useState, useEffect } from 'react';
// import React, { Component } from 'react';
import AppWrapper from './AppStyled';

import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
const initialState = {
  contacts: [],
  filter: '',
};
const App = () => {
  const [state, setState] = useState({ ...initialState });
  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      setState({ contacts: JSON.parse(contacts) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(state.contacts));
    setState(prevState => ({ ...prevState, filter: state.filter }));
  }, [state.filter, state.contacts]);

  const addPhonebookItem = item => {
    const { contacts } = state;
    if (contacts.some(element => element.name === item.name)) {
      alert(`${item.name} is already in contacts`);
      return;
    }
    if (!item.name.length) {
      alert('Please enter a name');
      return;
    }
    if (!item.number.length) {
      alert('Please enter a number');
      return;
    }
    setState(prevState => ({ ...prevState, contacts: [...prevState.contacts, item] }));
  };
  const handleInputChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };
  const handleDeleteContact = e => {
    const id = e.target.dataset.id;
    setState(prevState => ({ ...prevState, contacts: state.contacts.filter(item => item.id !== id) }));
  };
  const { contacts, filter } = state;
  return (
    <AppWrapper>
      <h1 className="page-title">Phonebook</h1>
      <ContactForm onAddItem={addPhonebookItem} />
      <h2 className="contacts-title">Contacts</h2>
      <Filter onChange={handleInputChange} filter={filter} />
      <ContactList contacts={contacts} filter={filter} onBtnClick={handleDeleteContact} />
    </AppWrapper>
  );
};

export default App;

// export default class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };
//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     if (contacts) {
//       this.setState({ contacts: JSON.parse(contacts) });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }
//   addPhonebookItem = item => {
//     const { contacts } = this.state;
//     if (contacts.some(element => element.name === item.name)) {
//       alert(`${item.name} is already in contacts`);
//       return;
//     }
//     if (!item.name.length) {
//       alert('Please enter a name');
//       return;
//     }
//     if (!item.number.length) {
//       alert('Please enter a number');
//       return;
//     }
//     this.setState(prevState => {
//       return {
//         contacts: [...prevState.contacts, item],
//       };
//     });
//   };
//   handleInputChange = e => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };
//   handleDeleteContact = e => {
//     const id = e.target.dataset.id;
//     this.setState({ contacts: this.state.contacts.filter(item => item.id !== id) });
//   };
//   render() {
//     const { contacts, filter } = this.state;
//     return (
//       <AppWrapper>
//         <h1 className="page-title">Phonebook</h1>
//         <ContactForm onAddItem={this.addPhonebookItem} />
//         <h2 className="contacts-title">Contacts</h2>
//         <Filter onChange={this.handleInputChange} filter={filter} />
//         <ContactList contacts={contacts} filter={filter} onBtnClick={this.handleDeleteContact} />
//       </AppWrapper>
//     );
//   }
// }
