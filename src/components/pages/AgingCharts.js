import React, { useState, useEffect } from 'react';
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

velocity: { G1=sprint velocity(bar chart), G2=user_velocity by sprint(categorical line chart, like burnup burndown)
    [
        {
            sprint_id: --> G2-category, G1-x 
            user_id: --> G2-x
            sprint_velocity: --> G1-y
            user_velocity: G2-y
        }
    ]
}


aging charts: {
    [
        {
            category-name: 
            time-in-category: current-time - updated-at
        }
    ]
}



*/


