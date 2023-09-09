import 'react-native-gesture-handler';

import { Provider } from 'react-redux';
import { persist, store } from './store2';
import { PersistGate } from 'redux-persist/integration/react';

import { useEffect, useRef } from 'react';
import { AppState } from 'react-native';

import RootNavigation from './Navigation/RootNavigation';

import {
  useFonts,
  PTSans_400Regular,
  PTSans_400Regular_Italic,
  PTSans_700Bold,
  PTSans_700Bold_Italic,
} from '@expo-google-fonts/pt-sans';
import { checkToken } from './api/user';

export default function App() {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      async (nextAppState) => {
        // console.log(nextAppState);
        if (
          (appState.current === 'inactive' ||
            appState.current === 'background') &&
          nextAppState === 'active'
        ) {
          // we are coming from background to foreground (user went out of the app and came back in)
          // console.log('you have came back into the app');
          checkToken();
        }

        appState.current = nextAppState;
      }
    );

    return () => subscription.remove();
  }, []);

  let [fontsLoaded] = useFonts({
    PTSans_400Regular,
    PTSans_400Regular_Italic,
    PTSans_700Bold,
    PTSans_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persist} loading={null}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
}

// <Provider> is responsible for making the Redux store available to your components, while <PersistGate> handles the asynchronous loading and rehydration of persisted state before your app is fully rendered.
