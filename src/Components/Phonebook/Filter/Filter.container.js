import { connect } from 'react-redux';
import {
  changeFilter,
  clearFilter,
} from '../../../redux/Phonebook/phoneBook-action';
import Filter from './Filter';

const mapStateToProps = state => ({
  value: state.phoneList.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
  onBlur: () => dispatch(clearFilter('')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
