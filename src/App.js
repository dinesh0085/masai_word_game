import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Playzone from './pages/Playzone';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Box>
     
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/playzone" element={<Playzone/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </Box>
  );
}

export default App;
