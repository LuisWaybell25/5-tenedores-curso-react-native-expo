import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native'

import { Button } from 'native-base';

import { screen } from '../../utils';

const RestaurantScreen = () => {

  const navigation = useNavigation();

  const goToAddRestaurant = () => {
    navigation.navigate(screen.restaurant.addRestaurant);

    // Viajar a un componente que está en otro tab
    // navigation.navigate(screen.account.tab, { screen: screen.account.account});
  }

  return (
    <View style={styles.container}>
        <Button onPress={goToAddRestaurant}>Create reataurant</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  }
});

export default RestaurantScreen

