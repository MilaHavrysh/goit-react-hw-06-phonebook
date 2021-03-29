import * as types from './contact-types';
import { createAction } from '@reduxjs/toolkit';

/*-----------------REDAX Toolkit-------------------*/

export const onDeleteContact = createAction(types.DELETE);
export const onSubmit = createAction(types.SUBMIT);
export const onSetFilter = createAction(types.FILTER);

/*-----------------REDAX---------------------------*/

/*before  export const onDeleteContact = id => ({
  type: types.DELETE,
  payload: id,
});

export const onSubmit = newName => ({
  type: types.SUBMIT,
  payload: newName,
});

export const onSetFilter = value => ({
  type: types.FILTER,
  payload: value,
});*/
