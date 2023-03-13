import React, { useState } from 'react'
import { StyleSheet, Keyboard } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RestaurantStack from './RestaurantStack';
import FavoritesStack from './FavoritesStack';
import RankingStack from './RankingStack';
import SearchStack from './SearchStack';
import AccountStack from './AccountStack';

import { screen } from "../utils"

const Tab = createBottomTabNavigator();

const AppNavigation = () => {

  const [tabBarStylesDependsOnKeyboard, settabBarStylesDependsOnKeyboard] = useState(styles.tabBarStyle)

  const keyboardShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        settabBarStylesDependsOnKeyboard(styles.tabBarStyleKeyboardOpened);
      }
  );
  const keyboardHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        settabBarStylesDependsOnKeyboard(styles.tabBarStyle);
      }
  );

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: '#10b981',
      tabBarInactiveTintColor: '#646464',
      tabBarStyle: tabBarStylesDependsOnKeyboard,
      tabBarIcon: ({ color, size }) => tabBarOptionsIcons(route, color, size),
      tabBarHideOnKeyboard: true
    })}>
        <Tab.Screen name={screen.restaurant.tab} component={RestaurantStack} options={{ title: "Restaurants" }} />
        <Tab.Screen name={screen.favorites.tab} component={FavoritesStack} options={{ title: "Favorites" }} /> 
        <Tab.Screen name={screen.ranking.tab} component={RankingStack} options={{ title: "Ranking" }} />
        <Tab.Screen name={screen.search.tab} component={SearchStack} options={{ title: "Search" }} />
        <Tab.Screen name={screen.account.tab} component={AccountStack} options={{ title: "Account" }} />
    </Tab.Navigator>
  )
}

function tabBarOptionsIcons(route, color, size) {
  let iconName;

  if(route.name === screen.restaurant.tab) {
    iconName = "compass-outline"
  }

  if(route.name === screen.favorites.tab) {
    iconName = "heart-outline"
  }

  if(route.name === screen.ranking.tab) {
    iconName = "star-outline"
  }

  if(route.name === screen.search.tab) {
    iconName = "search-outline"
  }

  if(route.name === screen.account.tab) {
    iconName = "person-circle-outline"
  }

  return (
    <Ionicons name={iconName} color={color} size={size} />
  )
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    height: 70,
    paddingTop: 10,
    paddingBottom: 10,
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 5,
    borderTopWidth: 0,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: 'rgba(100, 100, 111, 0.9)',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5
  },
  tabBarStyleKeyboardOpened: {
    marginBottom: -10,
    position: 'absolute',
    height: 70,
    paddingTop: 10,
    paddingBottom: 10,
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 5,
    borderTopWidth: 0,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: 'rgba(100, 100, 111, 0.9)',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5
  },
});

export default AppNavigation