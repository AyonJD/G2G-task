
import { Toaster } from 'react-hot-toast';
import './App.css';
import LoginSignupToggle from './components/LoginSignupToggle';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<LoginSignupToggle />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      <Toaster />
    </>

  );
}

export default App;
