// Antd imports
import { Button, Form, Input, DatePicker } from "antd";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

function Home() {

    const navigate = useNavigate();
    
    const newPage = () => {
        console.log('text');
        navigate('/data', {name: 'Peter', age: 20, lastName: 'Morris'})
    }

    return (
        <div>
            <F1><h1>Welcome to Zube.io Data Analytics!</h1></F1>

            <F2><h3>
                Enter the project name, user, and date range. 
                If you leave a field blank, everything will be selected. 
                A project name is required.
            </h3></F2>
            <F2>
                <Form name="basic" labelCol={{ span: 8 }} labelAlign="left"
                    wrapperCol={{ span: 16 }} initialValues={{ remember: true }} autoComplete="off">
                    <Form.Item
                        label="Project name (required)"
                        name="projectName"
                        rules={[{ required: true, message: "Please input a project name"}]}>  
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="User name"
                        name="userName">
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Start date"
                        name="startDate">
                        <DatePicker />
                    </Form.Item>

                    <Form.Item
                        label="End date"
                        name="endDate">
                        <DatePicker />
                    </Form.Item>

                    <Form.Item wrapperCol={{offset: 8}} name="searchButton">
                        <Button type="primary" style={{width: 150, height: 45}} onClick={newPage}>
                            SEARCH
                        </Button>
                    </Form.Item>
               </Form>
            </F2>
        </div>
  );
}

export default Home;

const F1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const F2 = styled.div`
    padding: 10px 350px;
    max-width: 1380px;
    display: flex;
    flex-direction: column;
`


