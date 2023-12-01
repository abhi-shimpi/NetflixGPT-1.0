import React, { useEffect } from 'react';
import Header from './Header';
import { Outlet, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebaseConfiguration";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


function Body() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Observable
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }))
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
      console.log("body unmount")
    }
  }, [])

  return (
    <div className='h-full'>
      <Header />
      <Outlet></Outlet>
    </div>
  )
}

export default Body