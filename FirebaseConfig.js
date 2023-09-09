import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBfG9A5ka9NPLEG6Cxc8u5w-i1tJr634Pw',
  authDomain: 'donation-app-e565d.firebaseapp.com',
  projectId: 'donation-app-e565d',
  storageBucket: 'donation-app-e565d.appspot.com',
  messagingSenderId: '338741294590',
  appId: '1:338741294590:web:e7343ce14ceccf5edcfcaf',
};

export const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
