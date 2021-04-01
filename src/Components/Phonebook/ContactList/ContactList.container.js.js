import { deletePhone } from '../../../redux/Phonebook/phoneBook-operations';
import { connect } from 'react-redux';
import ContactList from './ContactList';

const getVisibleContacts = (contacts, filter) => {
  const normalaizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalaizedFilter),
  );
};

const mapStateToProps = ({ phoneList: { contacts, filter } }) => ({
  contacts: getVisibleContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => () => dispatch(deletePhone(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
