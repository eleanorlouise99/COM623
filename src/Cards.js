import React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props) {
    let newClassName = 'color_bg $(props.alt)';
    let {title, members, events, more} = props
    return(
        <div className="card">
            <div className="wrapper">
                <div className="cardInfo">
                    <h1 className="title">{title}</h1>
                    <p className="members">{members}</p>
                    <p className="events">{events}</p>
                    <Link to="/society">
                        <p className="more">{more}</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

