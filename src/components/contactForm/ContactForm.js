import React, { useState } from 'react';
// import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import FormWrapper from './ContactFormStyled';
const initialState = {
  name: '',
  number: '',
};
const ContactForm = ({ onAddItem }) => {
  const [state, setState] = useState({ ...initialState });
  const handleInputChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    const user = { id: uuidv4(), name: state.name, number: state.number };

    onAddItem(user);
    setState({ ...initialState });
  };
  const { name, number } = state;
  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Name
          <input className="form-input" type="text" name="name" value={name} onChange={handleInputChange} />
        </label>
        <label className="form-label">
          Number
          <input className="form-input" type="text" name="number" value={number} onChange={handleInputChange} />
        </label>
        <button className="form-button" type="submit">
          Add contact
        </button>
      </form>
    </FormWrapper>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};

// export default class ContactForm extends Component {
// state = {
//   name: '',
//   number: '',
// };
// handleInputChange = e => {
//   const { name, value } = e.target;
//   this.setState({ [name]: value });
// };
// handleSubmit = e => {
//   e.preventDefault();
//   const user = { id: uuidv4(), name: this.state.name, number: this.state.number };

//   this.props.onAddItem(user);
//   this.resetState();
// };
// resetState = () => {
//   this.setState({ name: '', number: '' });
// };
//   render() {
//     const { name, number } = this.state;
//     return (
// <FormWrapper>
//   <form onSubmit={this.handleSubmit}>
//     <label className="form-label">
//       Name
//       <input className="form-input" type="text" name="name" value={name} onChange={this.handleInputChange} />
//     </label>
//     <label className="form-label">
//       Number
//       <input className="form-input" type="text" name="number" value={number} onChange={this.handleInputChange} />
//     </label>
//     <button className="form-button" type="submit">
//       Add contact
//     </button>
//   </form>
// </FormWrapper>
//     );
//   }
// }
// ContactForm.propTypes = {
//   onAddItem: PropTypes.func.isRequired,
// };
