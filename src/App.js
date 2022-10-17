import './App.css';

// component imports
import Home from './components/pages/Home';
import Data from './components/pages/Data';

// lib imports
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className = "App">
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<Data />} />
        <Route path="/data/deployment" element={<Data />} />
        <Route path="/data/burn-down" element={<Data />} />
        <Route path="/data/burn-up" element={<Data />} />
      </Routes>
    </div>
  );
}

export default App;
