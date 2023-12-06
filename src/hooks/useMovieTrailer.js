import { useEffect, useState } from "react";
import { options } from "../constants/constant";
import { useDispatch, useSelector } from "react-redux";
import { addVideoTrailer } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch();

    const videoTrailer = useSelector((strore)=>strore.moviesSlice.videoTrailer);

    const fetchMovieVideo = async() => {
        const videoData = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", options);
        const jsonData = await videoData?.json();

        const movieTrailer = jsonData?.results?.filter((movie)=>{
            return movie?.type === "Trailer";
        })
        
        movieTrailer ? dispatch(addVideoTrailer(movieTrailer[0]?.key)) : dispatch(addVideoTrailer(jsonData.results[0]));
    }

    useEffect(()=>{
        if(!movieId)return;
        // console.log(videoTrailer);
        !videoTrailer && fetchMovieVideo();
    },[movieId]);
}

export default useMovieTrailer;