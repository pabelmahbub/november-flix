import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home/Home';
import SignUp from './SignUp/SignUp';
import SignUpStep2 from './SignUp/SignUpStep2';
import SignUpStep3 from './SignUp/SignUpStep3';
import SignUpStep4 from './SignUp/SignUpStep4';
import SignUpPayment from './SignUp/SignUpPayment';
import SignUpCredit from './SignUp/SignUpCredit';
import SignUpHome from './AfterSignUp/SignUpHome';
import SignUpLatest from './AfterSignUp/SignUpLatest';
import SignUpSearch from './AfterSignUp/SignUpSerarch';
import Login from './SignUp/Login';
import DetailMovie from './AfterSignUp/DetailMovie';
import SingleMovieDetail from './AfterSignUp/SingleMovieDetail';
import MoreMovies from './AfterSignUp/MoreMovies';
import PostMovies from './MangeApi/PostMovies';
import NotFound from './Home/NotFound';
import DeleteMovie from './MangeApi/DeleteMovie';



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
    path: "/login",
    element: <div><Login /></div>,
  },
  {
    path: "/signup/planform",
    element: <div><SignUpStep2 /></div>,
  },
  {
    path: "/signup/registration",
    element: <div><SignUpStep3 /></div>,
  },
  {
    path: "/signup/regform",
    element: <div><SignUpStep4 /></div>,
  },
  {
    path: "/signup/paymentPicker",
    element: <div><SignUpPayment /></div>,
  },
  {
    path: "/signup/creditoption",
    element: <div><SignUpCredit /></div>,
  },
  {
    path: "/homepage",
    element: <div><SignUpHome /></div>,
  },
  {
    path: "/latestMovies",
    element: <div><SignUpLatest /></div>,
  },
  {
    path: "/moviesSearch",
    element: <div><SignUpSearch /></div>,
  },
  {
    path: "/homepage/:id",
    element: <div><DetailMovie /></div>,
  },
  {
    path: "/homepage/singlemoviedetail",
    element: <div><SingleMovieDetail /></div>,
  },
  {
    path: "/homepage/moremovies",
    element: <div><MoreMovies /></div>,
  },
  {
    path: "/postMovies",
    element: <div><PostMovies /></div>,
  },
  {
    path: "/deleteMovie/",
    element: <div><DeleteMovie /></div>,
  },
  {
    path: "/*",
    element: <div><NotFound /></div>,
  },

]);




function App() {
  return (
    <div className="App">
      
      <RouterProvider router = {router} />
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
