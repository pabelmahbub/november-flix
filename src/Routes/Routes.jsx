import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import { ToastContainer} from 'react-toastify';

  import Home from '../Home/Home';
  import SignUp from '../SignUp/SignUp';
  import SignUpStep2 from '../SignUp/SignUpStep2';
  import SignUpStep3 from '../SignUp/SignUpStep3';
  import SignUpStep4 from '../SignUp/SignUpStep4';
  import SignUpPayment from '../SignUp/SignUpPayment';
  import SignUpCredit from '../SignUp/SignUpCredit';
  import SignUpHome from '../AfterSignUp/SignUpHome';
  import SignUpLatest from '../AfterSignUp/SignUpLatest';
  import SignUpSearch from '../AfterSignUp/SignUpSerarch';
  import Login from '../SignUp/Login';
  import DetailMovie from '../AfterSignUp/DetailMovie';
  import SingleMovieDetail from '../AfterSignUp/SingleMovieDetail';
  import MoreMovies from '../AfterSignUp/MoreMovies';
  import PostMovies from '../MangeApi/PostMovies';
  import NotFound from '../Home/NotFound';
  import DeleteMovie from '../MangeApi/DeleteMovie';
import RequiredAuth from "../contexts/AuthProvider/RequiredAuth";



export const router = createBrowserRouter([

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
      element: <div><RequiredAuth><SignUpPayment /></RequiredAuth></div>,
    },
    {
      path: "/signup/creditoption",
      element: <div><RequiredAuth><SignUpCredit /></RequiredAuth></div>,
    },
    {
      path: "/homepage",
      loader: async () => { 
        return fetch('https://nenflix-server-production.up.railway.app/movies');
      },
      element: <div><RequiredAuth><SignUpHome /></RequiredAuth></div>,
    },
    {
      path: "/latestMovies",
      loader: async () => { 
        return fetch('https://nenflix-server-production.up.railway.app/movies');
      },
      element: <div><RequiredAuth><SignUpLatest /></RequiredAuth></div>,
    },
    {
      path: "/moviesSearch",
      loader: async () => { 
        return fetch('https://nenflix-server-production.up.railway.app/movies');
      },
      element: <div><RequiredAuth><SignUpSearch /></RequiredAuth></div>,
    },
    {
      path: "/homepage/:id",
      loader: async ({params}) =>{
        console.log(params.id);
        return fetch(`https://nenflix-server-production.up.railway.app/movies/${params.id}`);
      },
      element: <div><RequiredAuth><DetailMovie /></RequiredAuth></div>,
    },
    {
      path: "/homepage/singlemoviedetail",
      element: <div><RequiredAuth><SingleMovieDetail /></RequiredAuth></div>,
    },
    {
      path: "/homepage/moremovies",
      loader: async () => { 
        return fetch('https://nenflix-server-production.up.railway.app/movies');
      },
      element: <div><RequiredAuth><MoreMovies /></RequiredAuth></div>,
    },
    {
      path: "/postMovies",
      element: <div><RequiredAuth><PostMovies /></RequiredAuth></div>,
    },
    {
      path: "/deleteMovie/",
      element: <div><RequiredAuth><DeleteMovie /></RequiredAuth></div>,
    },
    {
      path: "/*",
      element: <div><NotFound /></div>,
    },
  
  ]);
  


//   {
//     path: "friends",
//     loader: async () => { 
//       return fetch('https://jsonplaceholder.typicode.com/users');
//     },
//     element: <Friends />},

//     {
//       path: "posts",
//       loader: async () => { 
//         return fetch('https://jsonplaceholder.typicode.com/posts');
//       },
//       element: <Posts />},
//       {
//         path: "countries",
//         loader: async () => { 
//           return fetch('https://restcountries.com/v2/all');
//         },
//         element: <Countries />},



// {
//     path: "/friends/:friendId", 
//     loader: async ({params}) =>{
//       console.log(params.friendId);
//       return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`);
//     },
    
//     element: <FriendDetail />},
//     {
//       path: "/post/:postId", 
//       loader: async ({params}) =>{
//         console.log(params.postId);
//         return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
//       },
//       element: <PostDetail />},

//       {
//         path: "/countries/:name", 
//         loader: async ({params}) =>{
//           console.log(params.name);
//           return fetch(`https://restcountries.com/v3.1/name/${params.name}`);
//         },
//         element: <Country />},