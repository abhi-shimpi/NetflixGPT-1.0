import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { constants } from "../constants/languageConstants";
import openai from '../utils/openai';
import { login_bg_image, options } from '../constants/constant';
import MovieCard from './MovieCard';
import ShimmerUi from './ShimmerUi';
import { addMoviesData } from '../utils/gptSlice';

function GptSearchBar() {

  const langKey = useSelector((store) => store.configureSlice.language);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //fetch data of movie by movie name
  //This function returns a promise 
  const fetchMoviesData = async (movieName) => {
    const movieData = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movieName + "&include_adult=false&language=en-US&page=1", options);
    const jsonData = await movieData.json();
    // console.log(jsonData);
    return jsonData.results;
  }


  const handleGptSearch = () => {
    console.log(searchText.current.value);

    const query = "Act as a movie recommendation sysytem and suggest some movies for the query" +
      searchText.current.value +
      ".Only give me name of five movies,comma seperated like an example result given ahead.Example: Pursuit of hapyness,Lakshya,Son of satymurthy,Docter,Master";

    async function main() {
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: query }],
        model: 'gpt-3.5-turbo',
      });

      // ['Andaz Apna Apna', ' Golmaal: Fun Unlimited', ' Chupke Chupke', ' Hera Pheri', ' Amar Akbar Anthony']
      const movieNames = chatCompletion?.choices[0]?.message?.content.split(",");

      // Here we are getting array of promises
      // [Promise, Promise, Promise, Promise, Promise]
      const moviesDataPromisesArray = movieNames.map((movieName) => {
        return fetchMoviesData(movieName);
      })
      console.log(moviesDataPromisesArray);

      // We need to wait until all these promises get resolved
      const movieData = await Promise.all(moviesDataPromisesArray);
      // console.log(moviesData);

      dispatch(addMoviesData({ movieData, movieNames }))

    }

    main();
  }
  return (
    <>
      <div className='absolute z-20 w-[50%] p-6 m-auto left-0 right-0 top-[15%] bg-black' onSubmit={(e) => { e.preventDefault() }}>
        <input ref={searchText} className='w-[80%] p-4 mr-3 rounded-md' placeholder={constants[langKey]?.searchPlaceholder}></input>
        <button className='py-4 w-[15%] px-8 bg-red-600 text-white rounded-md' onClick={handleGptSearch}>{constants[langKey]?.search}</button>
      </div>
      <img className='fixed top-0' src={login_bg_image} alt="SearchPageImage"></img>
    </>
  )
}

export default GptSearchBar