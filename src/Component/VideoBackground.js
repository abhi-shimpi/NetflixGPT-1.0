import React, { useEffect, useState } from 'react'
import { options } from '../constants/constant'
import useMovieTrailer from '../hooks/useMovieTrailer'

function VideoBackground({movieId}) {
    const videoTrailerKey = useMovieTrailer(movieId);
 
  return (
    <div>
        <iframe 
            className='w-full aspect-video'
            src={"https://www.youtube.com/embed/"+
            videoTrailerKey +
            "?&autoplay=1"+
            "&mute=1"
            } 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
        </iframe>
    </div>
  )
}

export default VideoBackground