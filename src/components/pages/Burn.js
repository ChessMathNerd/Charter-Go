
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
import { Divider } from 'antd';

const Burn = (props) => {

    const [show, setShow] = useState("false");

    useEffect(() => {
        setShow(props.show);
    }, []);

    return (
        <div>
            <h2>Burn up charts by sprint. Select a sprint name to see the chart for that sprint</h2><Divider />
            {/* {props.show==="true" ? 
            <div>
                <Line data = { props.display } />
            </div> : "Nothing to display"} */}
            {show==="true" ? 
            <div>
                <Line 
                    data = { props.display }
                    xField = 'date'
                    yField =  'points-done'
                    seriesField = 'sprint-id'
                    xAxis = {[{type: 'time'}]}
                />
            </div> : "nothing here"}
            <br /> <br /> <br /> <br /> 
            <h2>Burn down charts by sprint. Select a sprint name to see the chart for that sprint</h2><Divider />
            {show==="true" ? 
            <div>
                <Line 
                    data = { props.display }
                    xField = 'date'
                    yField =  'points-remaining'
                    seriesField = 'sprint-id'
                    xAxis = {[{type: 'time'}]}
                />
            </div> : "nothing here"}
        </div>
    )
};

export default Burn;