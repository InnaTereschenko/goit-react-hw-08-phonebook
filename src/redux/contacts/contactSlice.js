import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContact } from './operetions.js';

const initialStateCont = {
  items: [],
  isLoading: false,
  error: null,
};

// за умови використання IMMER використовую push
// в майбутньому винести ці формули в окремий файл
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
  state.error = null;
};
const handleFulfilledAdd = (state, { payload }) => {
  state.isLoading = false;
  state.items.push(payload);
  state.error = null;
};
const handleFulfilledDel = (state, { payload }) => {
  console.log('Deleted contact:', payload);
  state.isLoading = false;
  state.items = state.items.filter(item => item.id !== payload.id);
  state.error = null;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateCont,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(addContacts.fulfilled, handleFulfilledAdd)
      .addCase(deleteContact.fulfilled, handleFulfilledDel)

      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContacts.pending,
          deleteContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContacts.rejected,
          deleteContact.rejected
        ),
        handleRejected
      );
  },
});

const { reducer: contactsReducer } = contactsSlice;

export default contactsReducer;

