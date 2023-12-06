import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard';

function FavouriteMovies() {
    const favouriteMovies = useSelector((store)=>store.moviesSlice.favouriteMovies)
    console.log(favouriteMovies);
  return (
    <div className='pt-[120px] px-[100px]  bg-black flex flex-wrap h-screen'>
        {   
            favouriteMovies.length ?
            (favouriteMovies.map((movie)=>(
                <MovieCard 
                    imageId={movie.imageId} 
                    overview={movie.overview} 
                    rating={movie.rating}
                    title={movie.title}
                    showAddTo={false}
                >
                </MovieCard>
            ))) :
            (
                <div className='text-white text-3xl m-auto'>Oops! No items in List!</div>
            )
        }
    </div>
  )
}

export default FavouriteMovies