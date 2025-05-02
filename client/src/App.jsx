import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/LandingPage/Auth/Login.jsx'
import Signup from './components/LandingPage/Auth/Signup.jsx';
import Home from './components/HomePage/home.jsx';
import './App.css'

function App() {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
  );
}

export default App;
