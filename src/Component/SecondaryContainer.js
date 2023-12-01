import React from 'react';
import MoviesList from './MoviesList';
import { useSelector } from 'react-redux';

function SecondaryContainer() {
    const moviesData = useSelector((store) => store.moviesSlice);
    console.log("moviesData",moviesData)
    return (
        <>
            {
                moviesData?.nowPlayingMovies &&
                <div className='bg-black mt-0'>
                    <div className='-mt-60 z-10 relative'>
                        <MoviesList type={"Now Playing Movie"} moviesData={moviesData?.nowPlayingMovies[0]?.results} />
                        <MoviesList type={"Popular"} moviesData={moviesData?.popular[0]?.results} />
                        <MoviesList type={"Top Rated"} moviesData={moviesData?.topRated[0]?.results} />
                        <MoviesList type={"Upcoming"} moviesData={moviesData?.upcoming[0]?.results} />
                        {/* <MoviesList type={"Animie"} moviesData={moviesData?.nowPlayingMovies[0]?.results} />
                        <MoviesList type={"Most Popular"} moviesData={moviesData?.nowPlayingMovies[0]?.results} /> */}
                    </div>
                </div>
            }
        </>
    )
}

export default SecondaryContainer