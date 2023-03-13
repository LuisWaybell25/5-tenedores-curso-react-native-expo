import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

const UserLoggedScreen = () => {
  return (
    <View style={styles.container}>
      <Text>UserLoggedScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  }
});

export default UserLoggedScreen