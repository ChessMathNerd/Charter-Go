// Component imports
import Comp from "../Comp.js";

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
