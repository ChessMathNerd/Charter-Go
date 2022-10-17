// Component imports
import Comp from "../Menu.js";

// antd imports
import { useNavigate } from "react-router-dom";


function Data() {

    const navigate = useNavigate()

    return (
        <div>
            <Comp />
            <h1>{}</h1>
            <br />
        </div>
    );
}

export default Data;
