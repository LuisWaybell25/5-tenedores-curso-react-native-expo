import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, Image, Pressable, KeyboardAvoidingView } from 'react-native';
import { HStack, Text, Icon, Input, FormControl, WarningOutlineIcon, Button, Spinner } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';

import { screen } from '../../../utils/screenNames';

import { useNavigation } from '@react-navigation/native'

import { useFormik } from 'formik';


import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { Modal } from "native-base";

import * as Yup from 'yup';

const RegisterScreen = () => {

  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screen.account.login);
  }

  const [showModal, setShowModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email("El email no es correcto").required("El email es obligatorio"),
      password: Yup.string().required("La contraseña es obligatoria"),
      confirmPassword: Yup.string().required("La contraseña es obligatoria").oneOf([Yup.ref("password")], "Las contraseñas tienen que ser iguales")
    }),
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: async formValues => {
      console.log('clicked');
      setShowModal(true);
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, formValues.email, formValues.password)
      .then((userCredential) => {
        navigation.navigate(screen.account.login);
        setShowModal(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    },
  });

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }} style={styles.container}>
      <Image source={require('../../../../assets/img/5-tenedores-letras-icono-logo.png')} alt="user-guest" style={styles.image}/>

      <FormControl 
        isInvalid={formik.errors.email}
        w="90%"
        mt="5"
      >
          <Input 
            variant="filled"
            InputLeftElement={
              <Icon as={<Ionicons name="mail" />} 
                size={5} 
                ml="2" 
                color="muted.400" 
              />
            } 
            placeholder="Enter an email"   
            onChangeText={text => formik.setFieldValue("email", text)}
          />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>{formik.errors.email}</FormControl.ErrorMessage>
      </FormControl>

      <FormControl 
        isInvalid={formik.errors.password}
        w="90%"
        mt="5"
      >
        <Input 
          variant="filled"
          type='password'
          InputLeftElement={
            <Icon as={<Ionicons name="lock-closed" />} 
              size={5} 
              ml="2" 
              color="muted.400" 
            />
          } 
          placeholder="Enter a password"   
          onChangeText={text => formik.setFieldValue("password", text)}
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>{formik.errors.password}</FormControl.ErrorMessage>
      </FormControl>

      <FormControl 
        isInvalid={formik.errors.confirmPassword}
        w="90%"
        mt="5"
      >
      <Input 
        variant="filled"
        type='password'
        InputLeftElement={
          <Icon as={<Ionicons name="lock-closed" />} 
            size={5} 
            ml="2" 
            color="muted.400" 
          />
        } 
        placeholder="Confirm your password" 
        onChangeText={text => formik.setFieldValue("confirmPassword", text)}  
      />
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>{formik.errors.confirmPassword}</FormControl.ErrorMessage>
      </FormControl>

      <Button 
        style={styles.button} 
        onPress={formik.handleSubmit}>
        Button
      </Button>

       <Text mt="5">Al ready have an account? <Text style={styles.innerTextBold} onPress={goToLogin}>Sign In</Text></Text>
    
       <Modal isOpen={showModal}>
        <Modal.Content maxWidth="400px">
          <Modal.Header>Registarando usuario</Modal.Header>
          <Modal.Body>
          <HStack space={2}>
            <Spinner accessibilityLabel="Loading posts" />
            <Text fontSize="md">
              Espere por favor..
            </Text>
          </HStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  input: {
    marginTop: 5
  },
  innerTextBold: {
    fontWeight: 'bold'
  },
  button: {
    marginTop: 20,
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

export default RegisterScreen