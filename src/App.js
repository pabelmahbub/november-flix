import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';



const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Home /></div>,
  },
  {
    path: "/home",
    element: <div><Home /></div>,
  },
  // {
  //   path: "/recipes/:id",
  //   element: <div><Recipe /></div>,
  // },
  // {
  //   path: "/create",
  //   element: <div><Create/></div>,
  // },
  // {
  //   path: "/search",
  //   element: <div><Search/></div>,
  // },
  
]);


function App() {
  return (
    <div className="App">
        <RouterProvider router = {router} />
    </div>
  );
}

export default App;
