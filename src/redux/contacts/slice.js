import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from "./operations";
import toast from "react-hot-toast";

const contactsReducer = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(editContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        toast.error(
          `Failed to fetch contacts. Please reload this page. Error: ${action.payload}`
        );
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        toast.error(
          `Failed to add contact. Please try again. Error: ${action.payload}`
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        toast.error(
          `Failed to delete contact. Please try again. Error: ${action.payload}`
        );
      })
      .addCase(editContact.rejected, (state, action) => {
        state.loading = false;
        toast.error(
          `Failed to edit contact. Please try again. Error: ${action.payload}`
        );
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
        toast.success("Contact added successfully!");
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((contact) => {
          return contact.id !== action.payload.id;
        });
        state.loading = false;
        toast.success("Contact deleted successfully!");
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        state.loading = false;
        toast.success("Contact edited successfully!");
      });
  },
});

export const { setLoading, setError } = contactsReducer.actions;
export default contactsReducer.reducer;
