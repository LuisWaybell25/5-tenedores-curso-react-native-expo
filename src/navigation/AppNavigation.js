import React from 'react'
import { Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RestaurantScreen from '../screens/RestaurantScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import RankingScreen from '../screens/RankingScreen';
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarActiveTintColor: '#00a680',
      tabBarInactiveTintColor: '#646464',
      tabBarIcon: ({ color, size }) => (
        <Icon 
          as={Ionicons} 
          ame="home" 
          color={color}
          size={size}
        />
      )
    })}>
        <Tab.Screen name="Restaurant" component={RestaurantScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="Ranking" component={RankingScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  )
}

function name(params) {
  
}

export default AppNavigation