import React from 'react';
import './App.css';
import Card from "./Cards";
import { Link } from 'react-router-dom';

function Society() {
  return (
    <div>
      <h1 className="mainHeading">American Football</h1>
      <h3 className="subHeading">27 members</h3>

      <button className="societyBtn">Join</button>

      <h2 className="secondHeading">Events</h2>
      <h3 className="subHeading">This week</h3>

      <div className="left">
        <Link to="/event">
        <Card 
          title="American Football online social"
          members="17 going"
          events="Monday 13/01/2021"
          more="View more"
        />
        </Link>
        <Card 
          title="First team training"
          members="7 going"
          events="Thursday 14/01/2021"
          more="View more"
        />

      <h3 className="inTextHeading">Next week</h3>
      <Card 
          title="Second team training"
          members="11 going"
          events="Monday 18/01/2021"
          more="View more"
        />
        <Card 
          title="American Football online social"
          members="5 going"
          events="Thursday 21/01/2021"
          more="View more"
        />
      </div>

      <div className="right">
        <div className="footballImage"></div>
      </div>
    </div>
  );
}

export default Society;