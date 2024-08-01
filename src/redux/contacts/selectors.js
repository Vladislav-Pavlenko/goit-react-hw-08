import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";
export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) =>
    contacts.filter((contact) => {
      if (/^\d+$/.test(filter)) {
        return contact.number.toLowerCase().includes(filter.toLowerCase());
      } else {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
      }
    })
);
export const selectIsLoading = (state) => state.contacts.loading;
