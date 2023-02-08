import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import SignUp from './SignUp/SignUp';
import SignUpStep2 from './SignUp/SignUpStep2';
import SignUpStep3 from './SignUp/SignUpStep3';



const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Home /></div>,
  },
  {
    path: "/home",
    element: <div><Home /></div>,
  },
  {
    path: "/signup",
    element: <div><SignUp /></div>,
  },
  {
    path: "/signup/planform",
    element: <div><SignUpStep2 /></div>,
  },
  {
    path: "/signup/registration",
    element: <div><SignUpStep3 /></div>,
  },
  
]);


function App() {
  return (
    <div className="App">
        <RouterProvider router = {router} />
    </div>
  );
}

export default App;
