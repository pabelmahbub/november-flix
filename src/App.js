import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import SignUp from './SignUp/SignUp';
import SignUpStep2 from './SignUp/SignUpStep2';
import SignUpStep3 from './SignUp/SignUpStep3';
import SignUpStep4 from './SignUp/SignUpStep4';
import SignUpPayment from './SignUp/SignUpPayment';
import SignUpCredit from './SignUp/SignUpCredit';



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
  
]);


function App() {
  return (
    <div className="App">
        <RouterProvider router = {router} />
    </div>
  );
}

export default App;
