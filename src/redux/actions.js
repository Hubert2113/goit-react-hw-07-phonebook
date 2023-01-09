import { createAction } from '@reduxjs/toolkit';

export const nameUpdate = createAction('form/nameUpdate');
export const numberUpdate = createAction('form/numberUpdate');

export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');

export const filterUpdate = createAction('filter/filterUpdate');
