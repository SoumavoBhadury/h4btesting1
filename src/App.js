import logo from './logo.svg';
import './App.css';
import {usememo} from 'react'; //fix
// import { Blogprovider } from 'src/context/Blog'; //fix
import Homepage from './Components/Homepage';
import Dashboard from './Components/Dasboard';
import Registration from './Components/Registration';
import Event from './Components/Event';
import Marketplace from './Components/Marketplace';
import Discussion from './Components/Discussion';
import { BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/event" element={<Event />} />
      <Route path="/marketplace" element={<Marketplace />} /> 
      <Route path="/discussion/*" element={<Discussion />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
