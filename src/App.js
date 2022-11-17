// Antiquated imports
// import Burndown from './components/pages/Burndown';
// import Burnup from './components/pages/Burnup';
// import Home from './components/pages/Home';
// import { Route, Routes } from 'react-router-dom';

// Gotta have css!
import './App.css';

// component imports
import React from "react";
import Velocity from "./components/pages/Velocity.js";
import AgingCharts from "./components/pages/AgingCharts.js";
import Burn from "./components/pages/Burn.js";
import CycleTime from "./components/pages/CycleTime.js";

// lib imports
import { Button } from 'antd';
import styled from 'styled-components';
import axios from 'axios';

const App = () => {

  // visibility useState variables. They control what gets displayed and when
  const [show_cycle_time, set_show_cycle_time] = React.useState(0);
  const [show_aging_charts, set_show_aging_charts] = React.useState(0);
  const [show_burn_charts, set_show_burn_charts] = React.useState(0);
  const [show_velocity_tables, set_show_velocity_tables] = React.useState(0);
  const [is_data, set_is_data] = React.useState(0);

  // data useState variables. Theses variables are the data that each component will display
  const [cycle_time_data, set_cycle_time_data] = React.useState({});
  const [aging_charts_data, set_aging_charts_data] = React.useState({});
  const [burn_data, set_burn_data] = React.useState({});
  const [velocity_data, set_velocity_data] = React.useState({});

  // Theses functions each display one component and hide all the others by modifying 
  // the visibility variables for each component
  function show_aging() {
    set_show_aging_charts(1);
    set_show_burn_charts(0);
    set_show_cycle_time(0);
    set_show_velocity_tables(0);
  }

  function show_cycle() {
    set_show_cycle_time(1);
    set_show_aging_charts(0);
    set_show_burn_charts(0);
    set_show_velocity_tables(0);
  }

  function show_burn() {
    set_show_burn_charts(1);
    set_show_aging_charts(0);
    set_show_cycle_time(0);
    set_show_velocity_tables(0);
  }

  function show_velocity() {
    set_show_velocity_tables(1);
    set_show_aging_charts(0);
    set_show_burn_charts(0);
    set_show_cycle_time(0);
  }
 
  // the fetch data component is called whenever the "call backend" button is pressed
  const getData = async () => {
    await axios.get(
      'http://localhost:3001/testEndpoint'
    ).then(res=>{

      set_aging_charts_data(res.data.testingData);
      set_burn_data(res.data.burnupburndown);
      set_cycle_time_data(res.data.cycletime);
      set_velocity_data(res.data.velocity);

    })
    .catch (err=> {
      console.log(err);
    })
    set_is_data(1);
    show_aging();
  };

  // the general html return statement
  return (
    <RootFormat>
      <div>
        <Button type="primary" onClick={getData}>Call Backend</Button>
      </div>
      <Button type="primary" onClick={show_aging}>Aging Charts</Button>
      <Button type="primary" onClick={show_cycle}>Cycle Times</Button>
      <Button type="primary" onClick={show_burn}>Burnup/Burndown</Button>
      <Button type="primary" onClick={show_velocity}>Code Velocity</Button>

      <div> {/* Aging charts piece */}
        {(show_aging_charts===1 && is_data===1) ? <div>
          <AgingCharts display = { aging_charts_data } show = "true"/>
        </div> : (show_aging_charts===1 ? "You need to enter a search first!" : "")}
      </div>

      <div> {/* Cycle time table piece */}
        {(show_cycle_time===1 && is_data===1) ? <div>
          <CycleTime data = {cycle_time_data} />
        </div> : (show_cycle_time===1 ? "You need to enter a search first!" : "")}
      </div>

      <div> {/* Burnup and burndown charts piece */}
        {(show_burn_charts===1 && is_data===1) ? <div>
          <Burn data = {burn_data} />
        </div> : (show_burn_charts===1 ? "You need to enter a search first!" : "")}
      </div>

      <div> {/* User and code velocity piece */}
        {(show_velocity_tables===1 && is_data===1) ? <div>
          <Velocity data = {velocity_data} />
        </div> : (show_velocity_tables===1 ? "You need to enter a search first!" : "")}
      </div>
    </RootFormat>

    // For the routing system. I might not use it
    // <div className = "App">
    //  <Routes>
    //     {/* Route for testing backend APIs */}
    //     {/* <Route path="/" element={
    //       <div className="App">
    //         <header className="App-header">
    //           <p>{!data ? "Loading..." : data}</p>
    //         </header>
    //       </div>
    //     } /> */}
    //     <Route path="/" element={<Home />} />
    //     <Route path="/deployment" element={<Deployment />} />
    //     <Route path="/burn-down" element={<Burndown />} />
    //     <Route path="/burn-up" element={<Burnup />} />
    //   </Routes>
    // </div>
    
  );
}

export default App;

const RootFormat = styled.div`
  padding: 10px 10px;
`


