import React from 'react'
import { IMG_CDN_URL, star_img, add_btn, remove_btn, play_btn } from '../constants/constant'
import video from "../assets/dummy_trailer.mp4"
import { useDispatch } from 'react-redux'
import {addFavouriteMovies,removeFavouriteMovies} from "../utils/moviesSlice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


function MovieCard({ imageId,movieId, title, rating, overview,showAddTo}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notify = () => {
    toast.success('Movie added to favourites', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000, // Close the notification after 3000 milliseconds (3 seconds)
      style: {
        background: 'green', // Set your desired background color
        color:'white'
      },
    });
  };

  const addToFavourite = () => {
    const objOfFavourites = {
      imageId: imageId,
      title: title,
      rating: rating,
      overview: overview,
      
    }
    dispatch(addFavouriteMovies(objOfFavourites));
    notify();
  }

  const removeFromFavourite = () => {
    dispatch(removeFavouriteMovies(imageId));
    // toast.done('Movie removed from favourites', {
    //   position: toast.POSITION.TOP_RIGHT,
    //   autoClose: 1000, // Close the notification after 3000 milliseconds (3 seconds)
    //   style: {
    //     background: 'red', // Set your desired background color
    //     color:'white'
    //   },
    // });
  }

  const handleCardClick = () =>{
    navigate(`/player/${movieId}`)
  }

  return (
    <>
      <div>
        {
          imageId ?
            (
              <div className='container-card' >
                <div className='card-container'>
                  <img className='w-full h-full' src={IMG_CDN_URL + imageId}></img>
                </div>
                <div className='p-5 card-with-movie bg-black'>
                  <video className='w-full' autoPlay muted>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className='text-white flex justify-between'>
                    <h2 className=' font-bold'>{title}</h2>
                    <div className='flex items-center gap-2'>
                      <div className='w-4 h-4'>
                        <img className='w-full h-full' src={star_img}></img>
                      </div>
                      <span>{rating}</span>
                    </div>
                  </div>
                  <div className='flex gap-8 py-3 items-center text-white'>
                    <div className='w-7 h-7 cursor-pointer' onClick={handleCardClick}><img className='w-full h-full' src={play_btn}></img></div>
                    {
                      showAddTo ? 
                      (<div className='pl-[72px] text-sm flex gap-2 items-center cursor-pointer' onClick={()=> {
                        addToFavourite()
                      }}>
                        <span>Add To</span>
                        <div className='w-5 h-5'><img className='w-full h-full' src={add_btn}></img></div>
                      </div>) 
                      :
                      (
                        <div className='pl-[65px] text-sm flex gap-2 items-center cursor-pointer' onClick={()=> {
                          removeFromFavourite()
                        }}>
                          <span>Remove</span>
                          <div className='w-5 h-5'><img className='w-full h-full' src={remove_btn}></img></div>
                        </div>
                      )
                    }
                  </div>
                  <div className='text-white text-xs h-[100px] overflow-y-scroll scrollbar-hide text-justify'>
                    {overview}
                  </div>
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
      </div>
    </>
  )
}

export default MovieCard