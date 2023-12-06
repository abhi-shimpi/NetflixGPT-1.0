import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './Component/Body';
import Login from './Component/Login';
import Browse from './Component/Browse';
import appStore from './utils/appStore';
import {Provider} from "react-redux"
import LanguageWiseMovies from './Component/LanguageWiseMovies';
import FavouriteMovies from './Component/FavouriteMovies';
import GptSearch from './Component/GptSearch';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/browse",
        element: <Browse />
      },
      {
        path: "/language-wise-movies/:langId",
        element: <LanguageWiseMovies/>
      },
      {
        path: "/gpt-search",
        element: <GptSearch/>
      },
      {
        path: "/my-list",
        element: <FavouriteMovies/>
      },
    ]
  }
])

function App() {

  return (
    <div className="App">
      <Provider store={appStore}>
        <RouterProvider router={router}/>
      </Provider>
    </div>
  );
}

export default App;
