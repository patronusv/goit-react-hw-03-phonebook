import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import FormWrapper from './ContactFormStyled';
export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const user = { id: uuidv4(), name: this.state.name, number: this.state.number };

    this.props.onAddItem(user);
  };
  render() {
    const { name, number } = this.state;
    return (
      <FormWrapper>
        <form onSubmit={this.handleSubmit}>
          <label className="form-label">
            Name
            <input className="form-input" type="text" name="name" value={name} onChange={this.handleInputChange} />
          </label>
          <label className="form-label">
            Number
            <input className="form-input" type="text" name="number" value={number} onChange={this.handleInputChange} />
          </label>
          <button className="form-button" type="submit">
            Add contact
          </button>
        </form>
      </FormWrapper>
    );
  }
}
ContactForm.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};
