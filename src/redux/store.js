import { configureStore } from '@reduxjs/toolkit';
import { currentName, currentNumber, contacts, filter } from './reducers';

const store = configureStore({
  reducer: {
    currentName,
    currentNumber,
    contacts,
    filter,
  },
});

export default store;
