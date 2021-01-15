import React from 'react';
import './App.css';

function Event() {
  return (
    <div>
      <h1 className="mainHeading">American Football online social</h1>

      <h3 className="subHeading">Monday 13/01/2021</h3>
      <h3 className="subHeading">8pm - (no set finishing time)</h3>
      <h3 className="redHeading">17 members going</h3>

      <div className="left">
        <p className="eventText">
        Next week social theme is Tight & Bright!<br></br>
        <br></br>
        We will be doing this online due to Covid restrictions, however encourage you all to get dressed up and get some drinks in as we have got some great games planned!<br></br>
        <br></br>
        See you Monday!
        </p>

        <button className="eventBtn">Sign up!</button>
      </div>

      <div className="right">
        <div className="eventImage"></div>
      </div>
    </div>
  );
}

export default Event;
