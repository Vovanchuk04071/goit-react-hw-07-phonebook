import { connect } from 'react-redux';
import { addPhone } from '../../../redux/Phonebook/phoneBook-operations';
import Form from './Form';

const mapStateToProps = state => ({
  contactName: state.phoneList.contacts,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: text => dispatch(addPhone(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
