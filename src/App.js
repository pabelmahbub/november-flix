import './App.css';
import {
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import SignUp from './SignUp/SignUp';
import SignUpStep2 from './SignUp/SignUpStep2';
import SignUpStep3 from './SignUp/SignUpStep3';
import SignUpStep4 from './SignUp/SignUpStep4';
import SignUpPayment from './SignUp/SignUpPayment';
import SignUpCredit from './SignUp/SignUpCredit';
import NavbarAfterSignIn from './Navbar/NavbarAfterSignIn';
import SignUpHome from './AfterSignUp/SignUpHome';
import SignUpLatest from './AfterSignUp/SignUpLatest';
import SignUpSeries from './AfterSignUp/SignUpSerarch';
import SignUpSearch from './AfterSignUp/SignUpSerarch';
import MovieDetail from './AfterSignUp/MovieDisplay';
import Login from './SignUp/Login';
import DetailMovie from './AfterSignUp/DetailMovie';
import SingleMovieDetail from './AfterSignUp/SingleMovieDetail';
import MoreMovies from './AfterSignUp/MoreMovies';



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
    path: "/signup/homepage",
    element: <div><SignUpHome /></div>,
  },
  {
    path: "/signup/latest",
    element: <div><SignUpLatest /></div>,
  },
  {
    path: "/signup/search",
    element: <div><SignUpSearch /></div>,
  },
  {
    path: "/signup/homepage/:serviceId",
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

]);




function App() {
  return (
    <div className="App">
      
      <RouterProvider router = {router} />
        
     
    </div>
  );
}

export default App;
