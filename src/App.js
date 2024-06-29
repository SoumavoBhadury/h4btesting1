import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage';
import Dashboard from './Components/Dasboard';
import Registration from './Components/Registration';
import Event from './Components/Event';
import Marketplace from './Components/Marketplace';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/event" element={<Event />} />
      <Route path="/marketplace" element={<Marketplace />} /> 
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
