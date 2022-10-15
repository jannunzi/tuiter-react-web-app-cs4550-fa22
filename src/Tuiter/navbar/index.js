import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const Navbar = () => {
  const location = useLocation();
  const {pathname, search} = location;
  console.log(pathname, search);
  const parts = pathname.split('/')
  console.log(parts);
  return(
    <div className="list-group">
      <Link to="/tuiter" href="#" className={`
        ${parts.length < 3 ? 'active': ''} list-group-item`}>
        Home
      </Link>
      <Link to="/tuiter/explore"  href="#"
            className={`
              ${parts[2] === 'explore' ? 'active':''}
              list-group-item
              `}>
        Explore
      </Link>
      <Link to="/tuiter/profile" href="#"
            className={`
              ${parts[2] === 'profile' ? 'active' : ''}
            list-group-item`}>
        Profile
      </Link>
      <Link to="/" className="list-group-item">
        Labs
      </Link>
    </div>
  )
}
export default Navbar