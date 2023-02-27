import React, { Fragment } from 'react'
import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from "native-base";

import { NavigationContainer } from '@react-navigation/native';

import AppNavigation from './src/navigation/AppNavigation';

export default function App() {
  return (
    <Fragment>
      <NativeBaseProvider>
        <NavigationContainer>
          <AppNavigation/>
        </NavigationContainer>
      </NativeBaseProvider>
    </Fragment>
  );
}

