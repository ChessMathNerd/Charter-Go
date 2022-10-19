// Gotta have css!
import './App.css';

// component imports
import Home from './components/pages/Home';
import Deployment from './components/pages/Deployment';
import Burndown from './components/pages/Burndown';
import Burnup from './components/pages/Burnup';

// lib imports
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className = "App">
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deployment" element={<Deployment />} />
        <Route path="/burn-down" element={<Burndown />} />
        <Route path="/burn-up" element={<Burnup />} />
      </Routes>
    </div>
  );
}

export default App;

//      Analytics
// Deployment Frequency
// Burn down
//   Be able to view multiple sprints at one time in a table view
// Burn up
//   Be able to view multiple sprints at one time in a table view
// Code velocity
// User velocity
// Cycle time
// Aging charts
// Critical path
//      Filter
// Application
// User
// Date range
