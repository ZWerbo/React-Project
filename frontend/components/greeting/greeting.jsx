import React from "react";
import { Link } from "react-router-dom";



const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    
    <nav className="login-signup">
      <button className="signup-button" onClick={() => openModal('signup')}>Signup</button>
      {/* &nbsp;&nbsp; */}
      <button className="login-button" onClick={() => openModal('login')}>Sign In</button>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <button className="logout-button-greeting" onClick={logout}>Log Out</button>
    </hgroup>
 
  );

  return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();
};


export default Greeting