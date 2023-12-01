import React from 'react'
import { useSelector } from 'react-redux';
import { constants } from "../constants/languageConstants";

function GptSearchBar() {

    const langKey = useSelector((store) => store.configureSlice.language);

    return (
        <div className='flex justify-center pt-[200px]'>
            <input className='w-[30%] p-4 mr-3 rounded-md' placeholder={constants[langKey]?.searchPlaceholder}></input>
            <button className='py-4 px-8 bg-red-600 text-white rounded-md'>{constants[langKey]?.search}</button>
        </div>
    )
}

export default GptSearchBar