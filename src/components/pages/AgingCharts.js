import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';
import { Divider, Select } from 'antd';

const AgingCharts = (props) => {

    const [show, setShow] = useState("false");
    const [displayable, setDisplayable] = useState([]);
    const [displayProj, setDisplayProj] = useState([]);
    const [proj_options, setProj_Options] = useState([]);
    const [sprint_options, setSprint_Options] = useState([]);
    const [isproject, setIsproject] = useState();
    const [issprint, setIssprint] = useState();
    var project;
    var sprint;
    const [size, setSize] = useState(0);

    useEffect(() => {
        setSize(props.display[0].number);
        setDisplayable(props.display);
        setShow(props.show);
        setProj_Options(pop_proj_options());
    }, []);

    const pop_proj_options = () => {
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

    const pop_sprint_options = () => {
        var result = [];
        var helper = [];
        console.log(size);
        for (var i = 0; i < size; i++) {
            var ac_temp_1 = props.display[i];
            if (ac_temp_1.project_id === project && !helper.includes(ac_temp_1.sprint_name)) {
                result.push({
                    "value": ac_temp_1.sprint_name,
                    "label": ac_temp_1.sprint_name
                });
                helper.push(ac_temp_1.sprint_name)
            } 
        }

        console.log(result);
        
        return result;
    }

    const proj_event = (value) => {
        project = value;
        setIsproject(0);
        setDisplayProj(filtered_by_project);
        setSprint_Options(pop_sprint_options(value));
        setIsproject(1);
    }

    const sprint_event = (value) => {
        sprint = value;
        setIssprint(0);
        setDisplayable(filtered_by_sprint());
        setIssprint(1);
    }

    const filtered_by_project = () => {
        console.log(props.display);
        var response = [];
        var counter = 0;
        for (var i = 0; i < size; i++ ) {
            var temp2 = props.display[i];
            if (temp2.project_id === project) {
                response.push(temp2);
                counter ++;
            }
        }
        if (response[0]) response[0].number = counter;
        return response;
    }

    const filtered_by_sprint = () => {
        var response = [];

        if (displayProj[0]) {
            var temp = displayProj[0].number;
            console.log(displayProj);

            for (var i = 0; i < temp; i++) {
                var temp2 = displayProj[i];
                if (temp2.sprint_name === sprint) {
                    response.push(temp2);
                }
            }
            console.log(response);
            return response;
        }
        return response;

    }

    return (
        <div>
            <div>
                <h2>Filter your data</h2>
                <Select
                    style={{ width: 120 }} 
                    defaultValue="Select project"
                    options={proj_options}
                    onChange={proj_event}
                />
                {(isproject===1) ? <Select 
                    style={{ width: 120 }} 
                    defaultValue="Select sprint"
                    options={sprint_options}
                    onChange={sprint_event}
                /> : ""}
            </div>

            <Divider /><h2>Aging charts for all sprints and projects. Use the filters to select a project and then a sprint</h2><Divider />
            {/* {props.show==="true" ? 
            <div>
                <Line data = { props.display } />
            </div> : "Nothing to display"} */}
            {show==="true" && isproject===1 && issprint===1 ? 
            <div>
                <Column 
                    data = { displayable }
                    xField = 'category_name'
                    yField =  'num_of_cards'
                    seriesField = 'length'
                    isStack = 'true'
                />
            </div> : ""}
        </div>
    )
}

export default AgingCharts;

/*

aging charts [
    {
        category_name: The name of the status queue this object is for (ready, waiting, debugging, etc)
        length: How long the number of cards in the next attribute have been in this category
        num-of-cards: how many cards have been in this status for the above length of time
        sprint-name: The name of the sprint in question
        project-id: The id of the project that this srint is in
    }
]

stacked column plot (https://charts.ant.design/en/examples/column/stacked#column-background)

*/
