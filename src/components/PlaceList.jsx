import React from "react";
import del from "../images/del.png"

const PlaceList = (props) => {
  const onClickHandler = () => {
    const id = props.id;
    console.log("xxbhsjk",id);
    props.delHandler(id);
    
  };

  if (props.name === "") {
    return;
  }
  let image;
  try{
    const img_name = props.url.split('.');
     image = require(`../images/${img_name[1]}.png`)
  }
  catch{
    image = require ("../images/error.png")
    }
  
  return (
    <div className="style">
      <a className="name" target="_blank" href={props.url}>
        <img src={image} alt="" height="25px" width="25px" />
        <span className="name">{props.name}</span>
      </a>
      <img 
        src={del}
        alt=""
        className="minus"
        onClick={onClickHandler}
        height="20px"
        width="20px"
      />
    </div>
  );
};
export default PlaceList;
