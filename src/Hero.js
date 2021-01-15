import React from 'react';
import './App.css';
import NavBar from "./NavBar";

const Hero = ({handleLogout}) => {
  return (
    <div>
      <NavBar />
      <div className="headerImage"></div>

      <footer>
        <p className="smallText">Sport solent app intended for solent students by Eleanor Morgan</p>
        <a className="logout" onClick={handleLogout}>Logout</a>
      </footer>
      

    </div>
  );
}

export default Hero;