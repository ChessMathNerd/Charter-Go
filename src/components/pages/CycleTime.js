
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';
import { Divider, Select } from 'antd';

const Burn = (props) => {

    const [options, setOptions] = useState([]);
    const [show, setShow] = useState("false");
    const [displayable, setDisplayable] = useState([]);

    useEffect(() => {
        setDisplayable(props.display);
        setShow(props.show);
        setOptions(populate_options());
    }, []);

    const populate_options = () => {
        var result = [];
        var temp = props.projects[0].number;
        for (var i = 0; i < temp; i++) {
            result[i] = {
                "value": props.projects[i].id,
                "label": props.projects[i].name
            }
        }
        return result;
    }

    const filter = (value) => {
        var response = [];

        for (var i = 0; i < props.display[0].length; i++) {
            if (props.display[i].project_id === value) {
                response.push(props.display[i]);
            }
        }

        (response[0]) ? setDisplayable(response) : setDisplayable(0);
        
    }

    // onChange for the label change method property
    return (
        <div>
            <Select
                style={{ width: 120 }} 
                options={options}
                onChange={filter}
            />
            <Divider /><h2>Cycle time by sprint: The average amount of time from card creation to completion</h2><Divider />
            {/* {props.show==="true" ? 
            <div>
                <Line data = { props.display } />
            </div> : "Nothing to display"} */}
            {(show==="true" && displayable !== 0)? 
            <div>
                <Column 
                    data = { displayable }
                    xField = 'sprint_name'
                    yField =  'cycle_time'
                />
            </div> : <h2>No cycle time data to display for the selected project!</h2>}
        </div>
    )
};

export default Burn;