import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

export const currentName = createReducer('', {
  [actions.nameUpdate.type]: (state, action) => action.payload,
});

export const currentNumber = createReducer('', {
  [actions.numberUpdate.type]: (state, action) => action.payload,
});

export const filter = createReducer('', {
  [actions.filterUpdate.type]: (state, action) => action.payload,
});

export const contacts = createReducer([], {
  [actions.addContact.type]: (state, action) => [...state, action.payload],
  [actions.deleteContact.type]: (state, action) => {
    const index = state.map((contact) => contact.id).indexOf(action.payload);
    if (index !== -1) {
      state.splice(index, 1);
      return state;
    }
  },
});
