import React from 'react'
import { IMG_CDN_URL } from '../constants/constant'

function MovieCard({ imageId }) {
  return (
    <div>
      <div className='w-40 transition-transform duration-300 ease-in-out transform hover:scale-110'>
        <img className='w-full h-full' src={IMG_CDN_URL + imageId}></img>
      </div>
    </div>
  )
}

export default MovieCard