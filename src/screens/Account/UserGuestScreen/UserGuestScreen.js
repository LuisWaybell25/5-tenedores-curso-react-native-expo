import React from 'react'
import { View, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Text, Button } from 'native-base';

import { useNavigation } from '@react-navigation/native'

import { screen } from '../../../utils/screenNames';

const UserGuestScreen = () => {

  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screen.account.login);
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }} style={styles.container} >
      <Image source={require('../../../../assets/img/user-guest.png')} alt="user-guest" style={styles.image}/>
      <Text style={styles.title}>Consult your profile of 5 Forks</Text>
      <Text style={styles.description}>
        How will you discover your best restaurant? Search and view the best restaurants in a
        simply, vote which one you like the most and comment on your experience.
      </Text>

      <Pressable style={styles.button} onPress={goToLogin}>
        <Text style={styles.textButton}>See your profile</Text>
      </Pressable>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    marginTop: -90,
    paddingLeft: 30,
    paddingRight: 30,
    width: '100%'
  },
  image: {
    resizeMode: 'contain',
    height: 300,
    width: '100%',
    marginBottom: 15
  },
  title: {
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 15,
    textAlign: 'center'
  },
  description: {
    textAlign: 'center',
    marginBottom: 20
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 12,
    borderTopWidth: 0,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#10b981',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.50,
    shadowRadius: 16,
    backgroundColor: '#10b981',
    width: '90%'
  }, 
  textButton: {
    fontSize: 13,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  }
});

export default UserGuestScreen