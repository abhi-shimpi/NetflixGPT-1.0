import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './Component/Body';
import Login from './Component/Login';
import Browse from './Component/Browse';
import appStore from './utils/appStore';
import {Provider} from "react-redux"

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
      }
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
