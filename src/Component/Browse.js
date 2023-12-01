import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';

function Browse() {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const gptSearch = useSelector((store) => store.gptSlice.gptSearch);

  return (
    <>
      {
        gptSearch ?
          (<GptSearch />) :
          (
            <>
              <div>
                <MainContainer />
                <SecondaryContainer />
              </div >
            </>
          )
      }

    </>
  )
}

export default Browse


/* 
-Main Container 
  -Video Background 
  -VideoTitle
-SecondaryContainer
  -MoviesList * n
    -MovieCards * n
*/