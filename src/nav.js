import {Link} from "react-router-dom";

function Nav() {
    const myStyles = {
        backgroundColor: 'red'
    }
    return(
        <div>
            <Link to="/">Labs</Link> |
            <Link to="/tuiter">Tuiter</Link>
        </div>
    )
}
export default Nav;