import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[2];
  console.log(active)
  return (
    <div className="list-group">
      <a className="list-group-item">Tuiter</a>
      <Link to="/tuiter" className={`list-group-item ${!active?'active':''}`}>
        <i className="bi bi-house-door-fill me-2"></i>
        Home
      </Link>
      <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
        <i className="bi bi-hash me-2"></i>
        Explore
      </Link>
      <Link to="/" className="list-group-item">
        <i className="bi bi-asterisk me-2"></i>
        Labs
      </Link>
      <a className={`list-group-item ${active === 'notifications'?'active':''}`}>
        <i className="bi bi-bell me-2"></i>
        Notifications
      </a>
      <a className={`list-group-item ${active === 'messages'?'active':''}`}>
        <i className="bi bi-envelope me-2"></i>
        Messages
      </a>
      <a className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
        <i className="bi bi-bookmark me-2"></i>
        Bookmarks
      </a>
      <a className={`list-group-item ${active === 'lists'?'active':''}`}>
        <i className="bi bi-card-text me-2"></i>
        Lists
      </a>
      <a className={`list-group-item ${active === 'profile'?'active':''}`}>
        <i className="bi bi-person me-2"></i>
        Profile
      </a>
      <a className={`list-group-item ${active === 'more'?'active':''}`}>
        <i className="bi bi-three-dots me-2"></i>
        More
      </a>
    </div>
  );
};
export default NavigationSidebar;