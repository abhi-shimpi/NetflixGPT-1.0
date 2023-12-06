import React from 'react';
import MovieCard from "./MovieCard";
import "../index.css"

function MoviesList({title,moviesData}) {
  // console.log(moviesData);
  const handleMouseEnter = () => {
    // setIsMouseEnter(true);
    console.log("yes")
  }
  return (
    <div className='px-[100px] py-4 border-green-800'>
        <h1 className='text-white text-2xl font-bold my-3'>{title}</h1>
        <div className='flex overflow-x-auto scrollbar-hide gap-4 z-0 relative h-[320px]' onMouseEnter={handleMouseEnter}>
            {
              moviesData?.map((movie) => (
                <MovieCard  
                  key={movie.id} 
                  imageId={movie.poster_path} 
                  title={movie.original_title} 
                  rating={movie.vote_average} 
                  overview={movie.overview}
                  showAddTo={true}
                  />
              ))
            }
        </div>
    </div>
  )
}

export default MoviesList