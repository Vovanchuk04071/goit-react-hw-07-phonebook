import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import phoneBookReduser from '../redux/Phonebook/phoneBook-reducer';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    phoneList: phoneBookReduser,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export { store };
