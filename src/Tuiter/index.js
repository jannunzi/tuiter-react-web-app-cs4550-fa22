import {Link} from "react-router-dom";
import Nav from "../nav";
import Explore from "./explore";
import Home from "./home";
import Profile from "./profile";
import {Routes, Route} from "react-router";
import Navbar from "./navbar";
import Whotofollow from "./whotofollow";

function Tuiter() {
  return (
    <div className="row">
      <div className="col-2">
        <Navbar/>
      </div>
      <div className="col-6">
        <h2>Tuiter</h2>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="explore" element={<Explore/>}/>
          <Route path="profile" element={<Profile/>}/>
        </Routes>
      </div>
      <div className="col-4">
        <Whotofollow/>
      </div>
    </div>
  )
}

export default Tuiter