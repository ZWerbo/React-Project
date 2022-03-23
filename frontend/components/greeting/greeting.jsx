import React from "react";
import { Link } from "react-router-dom";

// const Greeting = ({ currentUser, logout }) => {
//     const sessionLinks = () => (
//         <nav className="login-signup">
//         <Link to="/login">Login</Link>
//         &nbsp;or&nbsp;
//         <Link to="/signup">Sign up!</Link>
//       </nav>
//     );
//     const personalGreeting = () => (
//         <hgroup className="header-group">
//         <h2 className="header-name">Hi,!</h2>
//         <button className="header-button" onClick={logout}>Log Out</button>
//       </hgroup>
//     );
//     return currentUser ? personalGreeting() : sessionLinks()  
// }


const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      {/* <Link to="/login">Login</Link> */}
      <button onClick={() => openModal('login')}>Login</button>
      &nbsp;or&nbsp;
      {/* <Link to="/signup">Sign up!</Link> */}
      <button onClick={() => openModal('signup')}>Signup</button>
      <button className="header-button" onClick={logout}>Log Out</button>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting