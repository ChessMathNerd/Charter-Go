import { Button } from 'antd';
import { useNavigate } from "react-router-dom";

import styled from 'styled-components';

function Menu() {

    const navigate = useNavigate();
    
    const toDeploy = () => {
        navigate('/deployment');
    }

    const toBurnDown = () => {
        navigate('/burn-down');
    }

    const toBurnUp = () => {
        navigate('/burn-up');
    }

    const backToHome = () => {
        navigate('/');
    }

    return (
        <>
            <F1>
                <Button type="primary" onClick={ backToHome } style={{width: 100}}>New Search</Button>
                <Button type="primary" onClick={ toDeploy } style={{width: 100}}>Deployment</Button>
                <Button type="primary" onClick={ toBurnDown } style={{width: 100}}>Burn Down</Button>
                <Button type="primary" onClick={ toBurnUp } style={{width: 100}}>Burn Up</Button>
            </F1>
        </>
    )
}

export default Menu;

const F1 = styled.div`
    height: 70px;
    width: 500px;
    align-items: center;
    display: flex;
    padding: 8px 30px;
    justify-content: space-between; 
`