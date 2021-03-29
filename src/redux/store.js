/*----------------------REDAX--------------------*/
//import { createStore, combineReducers } from 'redux';
//import { combineReducers } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension';
/*----------------------REDAX-Toolkit--------------------*/
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactReducer from './contact/contact-reducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

//const data = {
//contacts: {
// items: JSON.parse(localStorage.getItem('contact')),
// },
//};

const store = configureStore({
  reducer: { contacts: persistReducer(persistConfig, contactReducer) },
  //preloadedState: data,
  devTools: process.env.NODE_ENV === 'development',
  middleware: middleware,
});
const persistor = persistStore(store);

const storObject = {
  store,
  persistor,
};

export default storObject;

/*----------------------REDAX--------------------*/

/*before  const rootReducer = combineReducers({
  contacts: contactReducer,
});*/

//before const store = createStore(rootReducer, data, composeWithDevTools());
