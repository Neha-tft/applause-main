import React from "react";
// import Events from './Events'
// import {useNavigate} from 'react-router-dom';
import UpcomingEvent from "./UpcomingEvent";

export default function Card() {
  // const Navigate = useNavigate();
  // const navigate = useNavigate();
  // const History= createBrowserHistory();

  //  function Event (){

  // navigate("/events")

  //  }
  return (
    <div>
      <div className="card_2">
        {/* <img src="applause.jfif" alt=""> --> */}
        <h3 className="text-bg">
          <b>Applause Community</b>
        </h3>
        <h5 className="text">2000 Fans &ensp; 1000 Superfans</h5>
        <h6 className="txt">Neha Mishra joined applause in july 2022</h6>
      </div>

      <h5 className="events">
        <b>Upcoming Events</b>{" "}
      </h5>

      {/* <div className="card_3">
                <img className="zapp" src="./concert.jfif" alt="Zapp" height="160rem" />
                <h6 className="title">Zappcrash</h6>
                <p className="title_2">Free Event sep 16th at 12:05 AM IST</p>
                <button className="btn-3" onClick={Event}> <b> performance</b></button>
            </div> */}
      {<UpcomingEvent></UpcomingEvent>}
    </div>
  );
}
