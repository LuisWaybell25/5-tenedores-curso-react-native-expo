import React, { useState, useEffect } from 'react'

import { getAuth, onAuthStateChanged } from "firebase/auth";

import UserGuestScreen from './UserGuestScreen/UserGuestScreen';
import UserLoggedScreen from './UserLoggedScreen';

import LoadingModal from '../../components/shared/LoadingModal/LoadingModal';

const AccountScreen = () => {

  const [hasLogged, setHasLogged] = useState(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    setShow(true);
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user ? true : false);
      setShow(false);
    });
  }, [])
  
  if(show === true) return <LoadingModal />

  return hasLogged ? <UserLoggedScreen /> : <UserGuestScreen/>;
}

export default AccountScreen