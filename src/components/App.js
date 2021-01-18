import React, { Component } from 'react';
import AppWrapper from './AppStyled';

import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addPhonebookItem = item => {
    const { contacts } = this.state;
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
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, item],
      };
    });
  };
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleDeleteContact = e => {
    const id = e.target.dataset.id;
    this.setState({ contacts: this.state.contacts.filter(item => item.id !== id) });
  };
  render() {
    const { contacts, filter } = this.state;
    return (
      <AppWrapper>
        <h1 className="page-title">Phonebook</h1>
        <ContactForm onAddItem={this.addPhonebookItem} />
        <h2 className="contacts-title">Contacts</h2>
        <Filter onChange={this.handleInputChange} filter={filter} />
        <ContactList contacts={contacts} filter={filter} onBtnClick={this.handleDeleteContact} />
      </AppWrapper>
    );
  }
}
