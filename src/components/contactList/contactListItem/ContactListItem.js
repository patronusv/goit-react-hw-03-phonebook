import React from 'react';
import PropTypes from 'prop-types';
import ContactLi from './ContactListItemStyled';
const ContactListItem = ({ item, onBtnClick }) => {
  return (
    <ContactLi classname="contact-list-item" key={item.id}>
      <span className="contact-list-name">{item.name}: </span>
      <span className="contact-list-number">{item.number}</span>
      <button className="contact-list-button" type="button" onClick={onBtnClick} data-id={item.id}>
        Delete contact
      </button>
    </ContactLi>
  );
};

export default ContactListItem;
ContactListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};
