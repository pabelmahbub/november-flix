import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import {router} from '../src/Routes/Routes'




function App() {
  return (
    <div className="App">
      
      <RouterProvider router = {router} />
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
