import { FIREBASE_AUTH } from '../FirebaseConfig';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';

import { store } from '../store2';
import { updateToken } from '../features/User/userSlice';

export const createUser = async ({ fullName, email, password }) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      FIREBASE_AUTH,
      email,
      password
    );
    const user = userCredentials.user;
    await updateProfile(user, { displayName: fullName }); // set the user’s name
    return user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return { error: 'Email is already exists' };
    } else if (error.code === 'auth/invalid-email') {
      return { error: 'Invalid email' };
    }
    return { error: 'something went wrong' };
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const response = await signInWithEmailAndPassword(
      FIREBASE_AUTH,
      email,
      password
    );
    const token = await response.user.getIdToken();
    return {
      status: true,
      data: {
        fullName: response.user.displayName,
        email: response.user.email,
        token,
      },
    };
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      return { status: false, error: `no user found email: ${email}` };
    } else if (error.code === 'auth/invalid-email') {
      return {
        status: false,
        error: `Please provide valid email`,
      };
    } else if (error.code === 'auth/wrong-password') {
      return { status: false, error: `Invalid Credentials` };
    }
    return { error: 'something went wrong' };
  }
};

export const logoutUser = async () => {
  await signOut(FIREBASE_AUTH);
};

export const checkToken = async () => {
  try {
    let response = await FIREBASE_AUTH.currentUser.getIdToken(true);
    store.dispatch(updateToken({ token: response }));
    // console.log('updating token');
  } catch (error) {
    console.log(error);
  }
};
