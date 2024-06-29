
import './App.css';
import Homepage from './Components/Homepage';
import Dashboard from './Components/Dasboard';
import Event from './Components/Event';
import Marketplace from './Components/Marketplace';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SIgnup from './Components/Signup';
import Login from './Components/Login';

function App() {
  return (
    <div className='ubuntu-bold'>

    <BrowserRouter>
    
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/event" element={<Event />} />
      <Route path="/marketplace" element={<Marketplace />} /> 
      <Route path="/signup" element={<SIgnup />} /> 
      <Route path="/login" element={<Login />} /> 
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
