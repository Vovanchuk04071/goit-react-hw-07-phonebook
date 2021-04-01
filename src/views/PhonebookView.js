import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../Components/Phonebook/Form';
import style from './PhoneBookView.module.css';
import Filter from '../Components/Phonebook/Filter';
import ContactList from '../Components/Phonebook/ContactList';
import { fetchContact } from '../redux/Phonebook/phoneBook-operations';

class PhonebookView extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }
  render() {
    return (
      <>
        <div className={style.wraper}>
          <h1 className={style.title}>Phonebook</h1>
          <Form />
          <h2 className={style.title}>Contacts</h2>
          {this.props.isLoadingContacts && <h2>Загружаю....</h2>}
          <Filter />

          <ContactList />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: state.phoneList.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchContact: () => dispatch(fetchContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookView);
