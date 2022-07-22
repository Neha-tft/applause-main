import React from "react";
import { useNavigate } from "react-router-dom";
function UpcomingEventList(props) {
  const navigate = useNavigate();
  function Event() {
    navigate("/events");
  }
  return (
    <div className="card_3">
      <img className="zapp" src="./concert.jfif" alt="Zapp" height="160rem" />
      <li>
        {" "}
        <div className="title">{props.title}</div>
        <div className="title_2">Free Event {props.description}</div>
        <button className="btn-3" onClick={Event}>
          {" "}
          <b> performance</b>
        </button>{" "}
      </li>
    </div>
  );
}
export default UpcomingEventList;
