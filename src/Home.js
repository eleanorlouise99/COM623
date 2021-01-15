import React from 'react';
import './App.css';
import Card from "./Cards";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1 className="mainHeading">Societies</h1>
      <div className="left">
      <Link to="/society">
        <Card 
          title="American Football"
          members="27 members"
          events="3 Upcoming events"
          more="View more"
        />
      </Link>
         <Card 
          title="Badminton"
          members="16 members"
          events="4 Upcoming events"
          more="View more"
        />
        <Card 
          title="Cricket"
          members="21 members"
          events="2 Upcoming events"
          more="View more"
        /> 
        <Card 
          title="Equestrian"
          members="17 members"
          events="3 Upcoming events"
          more="View more"
        />
        <Card 
          title="Futsal"
          members="11 members"
          events="4 Upcoming events"
          more="View more"
        />
        <Card 
          title="Mens football"
          members="34 members"
          events="3 Upcoming events"
          more="View more"
        /> 
        <Card 
          title="Womens football"
          members="18 members"
          events="2 Upcoming events"
          more="View more"
        />
      </div>

      <div className="right">
        <Card 
          title="Mens hockey"
          members="17 members"
          events="3 Upcoming events"
          more="View more"
        />
         <Card 
          title="Womens hockey"
          members="16 members"
          events="4 Upcoming events"
          more="View more"
        />
        <Card 
          title="Netball"
          members="32 members"
          events="2 Upcoming events"
          more="View more"
        /> 
        <Card 
          title="Mens rugby"
          members="41 members"
          events="3 Upcoming events"
          more="View more"
        />
        <Card 
          title="Womens rugby"
          members="22 members"
          events="4 Upcoming events"
          more="View more"
        />
        <Card 
          title="Sailing"
          members="14 members"
          events="3 Upcoming events"
          more="View more"
        /> 
        <Card 
          title="Snowsports"
          members="28 members"
          events="2 Upcoming events"
          more="View more"
        />
      </div>

    </div>
  );
}

export default Home;
