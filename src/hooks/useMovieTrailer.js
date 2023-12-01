import { useEffect, useState } from "react";
import { options } from "../constants/constant";

const useMovieTrailer = (movieId) =>{
    const [videoTrailerKey,setVideoTrailerKey] = useState(null);
    console.log(movieId)

    const fetchMovieVideo = async() => {
        const videoData = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", options);
        const jsonData = await videoData?.json();

        console.log(jsonData);

        const movieTrailer = jsonData?.results?.filter((movie)=>{
            return movie?.type === "Trailer";
        })
        
        movieTrailer ? setVideoTrailerKey(movieTrailer[0]?.key) : setVideoTrailerKey(jsonData.results[0]);
    }

    useEffect(()=>{
        if(!movieId)return;
        fetchMovieVideo();
    },[movieId]);

    return videoTrailerKey;
}

export default useMovieTrailer;