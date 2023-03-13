import React, { Fragment } from 'react'
import { NativeBaseProvider, extendTheme } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigation from './src/navigation/AppNavigation';

import firebaseConfig from './src/utils';

export default function App() {

  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: "#ecfdf5",
        100: "#d1fae5",
        200: "#a7f3d0",
        300: "#6ee7b7",
        400: "#34d399",
        500: "#10b981",
        600: "#059669",
        700: "#047857",
        800: "#065f46",
        900: "#064e3b",
      },
      background: {
        900: "#F5F5F5"
      },
      shadow: {

      }
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: "light",
    },
  });

  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <AppNavigation/>
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}

