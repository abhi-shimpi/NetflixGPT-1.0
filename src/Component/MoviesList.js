import React from 'react';
import MovieCard from "./MovieCard";
import "../index.css"

function MoviesList({title,moviesData}) {
  console.log(moviesData);
  return (
    <div className='px-[100px] py-4'>
        <h1 className='text-white text-2xl font-bold my-3'>{title}</h1>
        <div className='flex overflow-x-auto scrollbar-hide gap-4 '>
            {
              moviesData?.map((movie) => (
                <MovieCard key={movie.id} imageId={movie.poster_path}/>
              ))
            }
        </div>
    </div>
  )
}

export default MoviesList