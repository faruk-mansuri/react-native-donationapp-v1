import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import logger from 'redux-logger';

import userReducer from './features/User/userSlice';
import categoriesReducer from './features/Categories/categoriesSlice';
import donationReducer from './features/Donation/donationSlice';

// use to create root reducer by combining multiple slice
// we use combineReducers in case if we want to use persistStore
//  it's common to use the combineReducers function to combine multiple reducers into a single reducer that you pass to the persistStore function.
const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  donations: donationReducer,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    version: 1,
  },
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware({ serializableCheck: false }).concat(logger);
  // },
});

export const persist = persistStore(store);
// persist.purge(); //to clear persist data

// or
// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// middleware: (getDefaultMiddleware) => {
//   return getDefaultMiddleware().concat(logger);
// },
// });
