import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';
import { Divider } from 'antd';

const Velocity = (props) => {

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
            <h2>Velocity by Sprint: Number of user story points completed</h2><Divider />
            {show==="true" ? 
            <div>
                <Column 
                    data = { props.display }
                    xField = 'sprint_id'
                    yField =  'sprint_velocity'
                />
                <br /><br /><br /><br />
                <Divider /><h2>User velocity by sprint: The number of points each user completes per sprint</h2><Divider />
                <Column 
                    data = {props.display }
                    xField = 'user_id'
                    yField = 'user_velocity'
                    seriesField = 'sprint_id'
                    isGroup = 'true'
                />
            </div> : "nothing here"}
        </div>
    )
}

export default Velocity;