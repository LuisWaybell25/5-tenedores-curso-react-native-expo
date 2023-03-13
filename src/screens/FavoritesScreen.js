import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Favorites Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  }
});

export default FavoritesScreen