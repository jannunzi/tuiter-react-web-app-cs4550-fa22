import Todo from "./Todo";
import {Link} from "react-router-dom";
import Nav from "../nav";

function Labs() {
    return(
        <div>
            <Nav/>
            <h1 styles={{backgroundColor: 'red'}}>Labs</h1>
            <Todo/>
        </div>
    )
}
export default Labs;