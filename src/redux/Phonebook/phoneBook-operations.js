import axios from 'axios';
import {
  fetchContactSuccess,
  addContactSuccess,
  deleteContactSuccess,
  loadingChange,
  fetchError,
} from './phoneBook-action';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContact = () => async dispatch => {
  dispatch(loadingChange(true));

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
    dispatch(loadingChange(false));
  } catch (error) {
    dispatch(fetchError(error));
  }
};

export const addPhone = text => async dispatch => {
  const number = {
    name: text.name,
    number: text.number,
  };

  dispatch(loadingChange(true));

  try {
    const { data } = await axios.post(
      '/contacts',
      number,
    );
    dispatch(addContactSuccess(data));
    dispatch(loadingChange(false));
  } catch (error) {
    dispatch(fetchError(error));
  }
};

export const deletePhone = id => async dispatch => {
  dispatch(loadingChange(true));

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
    dispatch(loadingChange(false));
  } catch (error) {
    dispatch(fetchError(error));
  }
};
