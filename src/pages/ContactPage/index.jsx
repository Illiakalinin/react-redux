import React from 'react';
import ContactsList from '../../components/ContactsList';
import ContactForm from '../../components/Forms/ContactForm';

function ContactPage () {
  return (
    <section>
      <h2>Contact Form</h2>
      <ContactForm />
      <ContactsList />
    </section>
  );
}

export default ContactPage;
