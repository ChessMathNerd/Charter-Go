// // Gotta have css!
// import './App.css';

// // component imports
// import Home from './components/pages/Home';
// import Deployment from './components/pages/Deployment';
// import Burndown from './components/pages/Burndown';
// import Burnup from './components/pages/Burnup';
// import Test from './components/api/Test';
// import React from "react";

// // lib imports
// import { Route, Routes } from 'react-router-dom';

// function App() {

//   const [data, setData] = React.useState(null);

//   React.useEffect(() => {
//     fetch("/api")
//       .then((res) => res.json())
//       .then((data) => setData(data.message));
//   }, []);

//   return (
//     <div className = "App">
//      <Routes>
//         <Route path="/" element={
//           <div className="App">
//             <header className="App-header">
//               <p>{!data ? "Loading..." : data}</p>
//             </header>
//           </div>
//         } />
//         {/* <Route path="/" element={<Home />} /> */}
//         <Route path="/deployment" element={<Deployment />} />
//         <Route path="/burn-down" element={<Burndown />} />
//         <Route path="/burn-up" element={<Burnup />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

// //      Analytics
// // Deployment Frequency
// // Burn down
// //   Be able to view multiple sprints at one time in a table view
// // Burn up
// //   Be able to view multiple sprints at one time in a table view
// // Code velocity
// // User velocity
// // Cycle time
// // Aging charts
// // Critical path
// //      Filter
// // Application
// // User
// // Date range

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("null");

  useEffect(() => {
    fetch("http://localhost:3001/api" , {method:"GET"})
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  console.log("tes");
  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
