import React from 'react'
import { IMG_CDN_URL } from '../constants/constant'

function MovieCard({ imageId }) {
  return (
    <>
      {
        imageId ?
          (
            <div>
              <div className='w-40 transition-transform duration-300 ease-in-out transform hover:scale-110'>
                <img className='w-full h-full' src={IMG_CDN_URL + imageId}></img>
              </div>
            </div>
          ) :
          (
            <div>
              <div className='w-[160px] h-[240px] bg-slate-500 rounded-md text-white flex justify-center items-center m-auto flex-col'>
                <p>Oops!</p><span> Image not found</span>
              </div>
            </div>
          )
      }
    </>
  )
}

export default MovieCard