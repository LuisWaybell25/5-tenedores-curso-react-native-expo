import React from 'react'
import { View, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Text, Button } from 'native-base';

import { useNavigation } from '@react-navigation/native'

import { screen } from '../../../utils/screenNames';

const LoginScreen = () => {

  const navigation = useNavigation();

  const goToRegister = () => {
    navigation.navigate(screen.account.register);
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }} style={styles.container}>
       <Image source={require('../../../../assets/img/5-tenedores-letras-icono-logo.png')} alt="user-guest" style={styles.image}/>

       <Text>Don't have an account yet? <Text style={styles.innerTextBold} onPress={goToRegister}>Sign Up</Text></Text>
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
    marginTop: 20,
    resizeMode: 'contain',
    height: 150,
    width: '100%',
    marginBottom: 15
  },
  innerTextBold: {
    fontWeight: 'bold'
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

export default LoginScreen