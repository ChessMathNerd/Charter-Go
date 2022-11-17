import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const AgingCharts = (props) => {

    const [show, setShow] = useState("false");

    useEffect(() => {
        setShow(props.show);
    }, []);

    return (
        <div>
            {/* {props.show==="true" ? 
            <div>
                <Line data = { props.display } />
            </div> : "Nothing to display"} */}
            {show==="true" ? 
            <div>
                <Line 
                    data = { props.display }
                    xField = 'year'
                    yField =  'value'
                    seriesField = 'category'
                />
            </div> : "nothing here"}
        </div>
    )
};

export default AgingCharts;

/* 
burnupburndown: {
    [
        {
            sprint_id: --> series-field
            totalpoints: 
            date: --> x-field
            pointsdone: --> y-field
        }
    ]
}

cycletime: {
    [
        {
            sprint_id: --> x-field
            average_time_completed: --> y-field
        }
    ]
}

veocity: { G1=sprint velocity, G2=user_velocity by sprint
    [
        {
            sprint_id: --> G2-category, G1-x
            user_id: --> G2-x
            sprint_velocity: --> G1-y
            user_velocity: G2-y
        }
    ]
}

*/