import React from 'react';
import { connect } from 'react-redux';
import { deleteContact, updateContact } from '../../store/slices/contactsSlice';

export const ContactsList = ({ contacts, remove, update }) => {
  const handleContactChange = (id, isFavourite) =>
    update(id, { isFavourite: !isFavourite });

  return (
    <ul>
      {contacts.map(c => (
        <li key={c.id}>
          <input
            type='checkbox'
            checked={c.isFavourite}
            onChange={() => handleContactChange(c.id, c.isFavourite)}
          />
          <button onClick={() => remove(c.id)}>X</button>
          {JSON.stringify(c)}
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = ({ contactsList }) => contactsList;

const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(deleteContact(id)),
  update: (id, updatedData) => dispatch(updateContact({ id, updatedData })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
