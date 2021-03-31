import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//import * as types from './contact-types';

/*---------------------REDAX Toolkit--------------------*/

const initialStateItems = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Klim', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copelend', number: '227-91-26' },
  ],
};

const Submit = (state, { payload }) => {
  //console.log(state);
  let arrayName = state.map(elem => elem.name).find(el => el === payload.name);
  console.log(arrayName);
  if (arrayName === undefined) {
    return [payload, ...state];
  } else {
    alert(`${payload.name} уже есть в книге`);
    return state;
  }
};

const items = createReducer(initialStateItems.items, {
  'ContactList / DeleteContact': (state, action) =>
    state.filter(contact => contact.id !== action.payload),
  'ContactForm /Submit': (state, action) => Submit(state, action),
});

const filter = createReducer('', {
  'Filter/SetFilter': (state, action) => action.payload.toLowerCase(),
});

export default combineReducers({
  items,
  filter,
});

/*--------------------------REDAX-------------------------*/

/*const itemsReducer = (state = initialStateItems, { type, payload }) => {
  switch (type) {
    case types.DELETE:
      return {
        items: state.items.filter(contact => contact.id !== payload),
      };

    case types.SUBMIT:
      let arrayName = state.items
        .map(elem => elem.name)
        .find(el => el === payload.name);
      console.log(arrayName);
      if (arrayName === undefined) {
        return {
          items: [payload, ...state.items],
        };
      } else {
        alert(`${payload.name} уже есть в книге`);
        return state;
      }

    default:
      return state;
  }
};*/

/*const filterReducer = (state = { filter: '' }, { type, payload }) => {
  switch (type) {
    case types.FILTER:
      console.log(payload);
      return {
        filter: payload.toLowerCase(),
      };
    default:
      return state;
  }
};*/

/*export default combineReducers({
  items:itemsReducer
  filter: filterReducer,
});*/
