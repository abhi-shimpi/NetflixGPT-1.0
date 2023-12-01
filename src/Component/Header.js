import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfiguration";
import { app_logo, languagesArray } from "../constants/constant";
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLaguage } from '../utils/configureSlice';

function Header() {

  const userDetails = useSelector((store) => store.userDetails);
  const gptSearch = useSelector((store) => store.gptSlice.gptSearch);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
    });
  }

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLaguage(e.target.value));
  }

  return (
    <div className='fixed w-full flex justify-between px-4 py-2 items-center z-50'>
      <div className='w-[11.5rem] h-[6rem] '>
        <img className='w-[100%] h-[100%]' src={app_logo} alt='Netflix logo'></img>
      </div>
      {
        userDetails &&
        <div className='flex gap-4'>
          {
            gptSearch &&
            <select className='p-3 rounded-md' onChange={(e) => { handleLanguageChange(e) }}>
              {
                languagesArray.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                ))
              }
            </select>
          }
          <button className='p-2 rounded-md bg-gray-500 text-white' onClick={handleGptSearch}>GPT Search</button>
          <button className='p-2 rounded-md bg-red-600 text-white' onClick={handleSignOut}>Sign Out</button>
        </div>
      }
    </div>
  )
}

export default Header