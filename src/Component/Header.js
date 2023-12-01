import React from 'react';
import { useSelector } from 'react-redux';
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfiguration";
import {app_logo} from "../constants/constant";

function Header() {

  const userDetails = useSelector((store) => store.userDetails);

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className='fixed w-full flex justify-between px-4 py-2 items-center z-10'>
      <div className='w-[11.5rem] h-[6rem] '>
        <img className='w-[100%] h-[100%]' src={app_logo} alt='Netflix logo'></img>
      </div>
      {
        userDetails &&
        <div>
          <button className='p-2 rounded-md bg-red-700 text-white' onClick={handleSignOut}>Sign Out</button>
        </div>
      }
    </div>
  )
}

export default Header