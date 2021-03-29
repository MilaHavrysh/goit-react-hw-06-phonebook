import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/contact/contact-actions';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const addContactName = e => {
    const newName = {
      id: uuidv4(),
      name: name,
      number: number,
    };
    if (name && number !== '') {
      onSubmit(newName);
      setName('');
      setNumber('');
    }
  };

  const inputChange = e => {
    if (e.target.attributes.id.nodeValue === 'name') {
      setName(e.target.value);
    } else if (e.target.attributes.id.nodeValue === 'number') {
      setNumber(e.target.value);
    }
  };
  return (
    <form className={styles.contact_form}>
      <label htmlFor={name} className={styles.contact_form_input_label}>
        name
      </label>
      <input
        className={styles.contact_form_input}
        type="input"
        id="name"
        autoComplete="off"
        onChange={inputChange}
        value={name}
      />

      <label htmlFor={number} className={styles.contact_form_input_label}>
        number
      </label>
      <input
        className={styles.contact_form_input}
        type="input"
        id="number"
        autoComplete="off"
        onChange={inputChange}
        value={number}
      />

      <button
        className={styles.contact_form_button}
        type="button"
        onClick={addContactName}
      >
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: id => dispatch(actions.onSubmit(id)),
  };
};

export default connect(null, mapDispatchToProps)(ContactForm);
