import { createSelector } from '@reduxjs/toolkit';

export const getLoading = state =>
  state.phoneList.loading;

export const getContacts = state =>
  state.phoneList.contacts;

export const getFilter = state =>
  state.phoneList.filter;

// export const getVisibleContacts = state => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);

//   const normalaizedFilter = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name
//       .toLowerCase()
//       .includes(normalaizedFilter),
//   );
// };

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalaizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(normalaizedFilter),
    );
  },
);
