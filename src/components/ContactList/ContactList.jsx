import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './ContactList.module.css';
import * as actions from '../../redux/contact/contact-actions.js';
import React, { useEffect } from 'react';

const ContactList = ({ items, onDeleteContact }) => {
  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(items));
  }, [items]);

  return (
    <ul className={styles.contactList}>
      {items.map(element => (
        <li key={element.id} className={styles.contact_list_item}>
          <p className={styles.contact_list_item_name}>{element.name}</p>
          <p className={styles.contact_list_item_number}>{element.number}</p>
          <button
            className={styles.contact_list_item_button}
            type="button"
            onClick={() => onDeleteContact(element.id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const getVisibleContacts = (items, filter) => {
  const visible = items.filter(element =>
    element.name.toLowerCase().includes(filter),
  );
  return visible;
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  items: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: id => dispatch(actions.onDeleteContact(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
