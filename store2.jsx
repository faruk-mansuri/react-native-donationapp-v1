import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';

import userSlice from './features/User/userSlice';
import categoriesSlice from './features/Categories/categoriesSlice';
import donationSlice from './features/Donation/donationSlice';

const rootReducer = combineReducers({
  user: userSlice,
  categories: categoriesSlice,
  donations: donationSlice,
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
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false });
  },
});

export const persist = persistStore(store);
// persist.purge(); //to clear persist data
