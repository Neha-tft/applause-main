import React from "react";
import UpcomingEvent from "./UpcomingEvent";
import { useNavigate } from "react-router-dom";
import add1 from '../images/add1.png'

export default function Card() {
  const navigate = useNavigate();
  function Event() {
    navigate("/events");
  }

  return (
    <div>
      <div className="card_2">
        <h3 className="text-bg">
          <b>Applause Community</b>
        </h3>
        <h5 className="text">20 Fans &ensp; 2 Superfans</h5>
        <h6 className="txt">Neha Mishra joined applause in july 2022</h6>
      </div>

      <h5 className="events">
        <b >Upcoming Events</b> &ensp;
        
        <img className="button" src={add1} alt="" onClick={Event} height='30px' width='30px'/>
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
