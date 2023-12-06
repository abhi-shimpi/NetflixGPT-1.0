import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfiguration";
import { app_logo, languagesArray } from "../constants/constant";
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLaguage } from '../utils/configureSlice';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { langaugeWiseMovies } from '../constants/constant';

function Header() {

  const userDetails = useSelector((store) => store.userDetails);
  const gptSearch = useSelector((store) => store.gptSlice.gptSearch);
  const langKey = useSelector((store) => store.configureSlice.language);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
    });
  }

  const handleGptSearch = () => {
    // dispatch(toggleGptSearchView());
    navigate("/gpt-search")
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLaguage(e.target.value));
  }

  const showLanguageWiseMovie = () => {
    // navigate("/language-wise-movies");
  }

  const showHomePage = () => {
    navigate("/browse");
  }

  return (
    <div className='fixed w-full flex justify-between px-4 py-2 items-center z-50 bg-black bg-opacity-50 '>
      <div className='flex gap-14 items-center'>
        <div className='w-[11.5rem] h-[6rem]'>
          <img className='w-[100%] h-[100%] cursor-pointer' onClick={showHomePage} src={app_logo} alt='Netflix logo'></img>
        </div>
        {
          !gptSearch &&
          <div className='flex gap-14 items-center'>
            <NavLink to={"/browse"} className={({isActive})=> isActive ? 'text-red-600':'text-white'}>
              <div className=' text-2xl cursor-pointer'>Home</div>
            </NavLink>
            <NavLink to={"/language-wise-movies/" + langaugeWiseMovies.hindi} className={({isActive})=> isActive ? 'text-red-600':'text-white'}>
              <div className='text-2xl cursor-pointer'>Hindi</div>
            </NavLink>
            <NavLink to={"/language-wise-movies/" + langaugeWiseMovies.tamil} className={({isActive})=> isActive ? 'text-red-600':'text-white'}>
              <div className=' text-2xl cursor-pointer'>Tamil</div>
            </NavLink >
            <NavLink to={"/language-wise-movies/" + langaugeWiseMovies.kanada} className={({isActive})=> isActive ? 'text-red-600':'text-white'}>
              <div className=' text-2xl cursor-pointer'>Kannada</div>
            </NavLink>
            <NavLink to={"/language-wise-movies/" + langaugeWiseMovies.malyalam} className={({isActive})=> isActive ? 'text-red-600':'text-white'}>
              <div className='text-2xl cursor-pointer'>Malyalam</div>
            </NavLink>
            <NavLink to={"/my-list"} className={({isActive})=> isActive ? 'text-red-600':'text-white'}>
              <div className='text-2xl cursor-pointer'>My List</div>
            </NavLink>
          </div>
        }
      </div>
      {
        userDetails &&
        <div className='flex gap-4'>
          {
            gptSearch &&
            <select className='p-3 rounded-md' value={langKey} onChange={(e) => { handleLanguageChange(e) }}>
              {
                languagesArray.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                ))
              }
            </select>
          }
          <button className='p-2 rounded-md bg-gray-500 text-white' onClick={handleGptSearch}>{!gptSearch ? "GPT Search" : "HomePage"}</button>
          <button className='p-2 rounded-md bg-red-600 text-white' onClick={handleSignOut}>Sign Out</button>
        </div>
      }
    </div>
  )
}

export default Header