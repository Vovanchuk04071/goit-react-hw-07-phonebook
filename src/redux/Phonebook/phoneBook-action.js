import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('phone/fetchContactRequest');
export const fetchContactSuccess = createAction('phone/fetchContactSuccess');
export const fetchContactError = createAction('phone/fetchContactError');

export const addContactRequest = createAction('phone/addContactRequest');
export const addContactSuccess = createAction('phone/addContactSuccess');
export const addContactError = createAction('phone/addContactError');

export const deleteContactRequest = createAction('phone/deleteContactRequest');
export const deleteContactSuccess = createAction('phone/deleteContactSuccess');
export const deleteContactError = createAction('phone/deleteContactError');

export const changeFilter = createAction('phone/changeFilter');
export const clearFilter = createAction('phone/clearFilter');
