import React, { useEffect } from 'react';
import Header from './Header';
import { Outlet, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebaseConfiguration";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import {  ToastContainer } from 'react-toastify';


function Body() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const prevRoute = useSelector(store=>store.moviesSlice.movieRoute);

  useEffect(() => {
    // Observable
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName })) //For sign In
        navigate(prevRoute);
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <div className='h-full'>
      <Header />
      <ToastContainer />
      <Outlet></Outlet>
    </div>
  )
}

export default Body