import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';

function Browse() {
  useNowPlayingMovies();  

  const movieDetails = useSelector((store)=>store.moviesSlice);
  console.log(movieDetails)

  return (
    <div>
      <MainContainer/>
    </div>
  )
}

export default Browse


/* 
-Main Container 
  -Video Background 
  -VideoTitle
-SecondaryContainer
  -MoviesList * n
    -Cards * n
*/