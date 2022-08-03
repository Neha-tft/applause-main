import React from "react";
import concert from "../images/concert.jfif"
import { useNavigate } from "react-router-dom";
import del from '../images/del.png' 
function UpcomingEventList(props) {
  
  const removeHandler=()=>{
  props.remove(props.id)
  }
  return (
    <div className="card_3">
      <img className="zapp" src={concert} alt="Zapp" height="160rem" />
      <li >
        
        <div className="title">{props.title}</div>
        <div className="title_2">Free Event {props.description}</div>
        <button className="btn-3" >
          
          <b> performance</b>
        </button> &ensp;
        <img onClick={removeHandler} src={del} alt="" height="20px" width="20px"/>
      </li>
    </div>
  );
}
export default UpcomingEventList;
