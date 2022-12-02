// Gotta have css!
import './App.css';

// component imports
import React from "react";
import Velocity from "./components/pages/Velocity.js";
import AgingCharts from "./components/pages/AgingCharts.js";
import Burn from "./components/pages/Burn.js";
import CycleTime from "./components/pages/CycleTime.js";

// lib imports
import { Button, Divider } from 'antd';
import styled from 'styled-components';
import axios from 'axios';

const App = () => {

  const buttoncss = {height: 50, width: 150};

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
  const [project_data, set_project_data] = React.useState({});

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

  const getProjList = async () => {
    await axios.get(
      'http://localhost:3001/proj_data'
    ).then(res=>{
      set_project_data(res.data);
    })
    .catch (err=> {
      console.log(err);
    })
    
  };
 
  const getData = async () => {
    set_is_data(0);
    await getProjList();
    await axios.get(
      'http://localhost:3001/data'
    ).then(res=>{

      set_aging_charts_data(res.data.agingcharts);
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

  return (
    <RootFormat>
      <Header>
        <C_Format_1>
          <Button type="primary" onClick={show_aging} style={buttoncss}>Aging Charts</Button>
          <Button type="primary" onClick={show_cycle} style={buttoncss}>Cycle Times</Button>
          <Button type="primary" onClick={show_burn} style={buttoncss}>Burnup/Burndown</Button>
          <Button type="primary" onClick={show_velocity} style={buttoncss}>Code Velocity</Button>
        </C_Format_1>
        <Button type="primary" onClick={getData} style={buttoncss}>Get/Refresh Data</Button>
      </Header>
      <Divider />

      <div> {/* Aging charts piece */}
        {(show_aging_charts===1 && is_data===1) ? <div>
          <AgingCharts display = { aging_charts_data } show = "true" projects = {project_data}/>
        </div> : (show_aging_charts===1 ? <h2>Waiting for data from zube</h2> : "")}
      </div>

      <div> {/* Cycle time table piece */}
        {(show_cycle_time===1 && is_data===1) ? <div>
          <CycleTime display = {cycle_time_data} show = "true" projects = {project_data}/>
        </div> : (show_cycle_time===1 ? <h2>Waiting for data from zube</h2> : "")}
      </div>

      <div> {/* Burnup and burndown charts piece */}
        {(show_burn_charts===1 && is_data===1) ? <div>
          <Burn display = {burn_data} show = "true"/>
        </div> : (show_burn_charts===1 ? <h2>Waiting for data from zube</h2> : "")}
      </div>

      <div> {/* User and code velocity piece */}
        {(show_velocity_tables===1 && is_data===1) ? <div>
          <Velocity display = {velocity_data} show = "true"/>
        </div> : (show_velocity_tables===1 ? <h2>Waiting for data from zube</h2> : "")}
      </div>
    </RootFormat>
  );
}

export default App;

const RootFormat = styled.div`
  padding: 10px 10px;
`

const Header = styled.div`
  display:flex;
  justify-content: space-between;
`

const C_Format_1 = styled.div`
  min-width: 630px;
  display: flex;
  justify-content:space-between;
`


