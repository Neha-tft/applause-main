import React from "react";
import del from "../images/del.png"
const PlaceList = (props) => {
  const onClickHandler = () => {
    const id = props.id;
    console.log(id);
    props.delHandler(id);
  };

  if (props.name === "") {
    return;
  }
  const img_name = props.url.split('.');
  const image = require(`../images/${img_name[1]}.png`)
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
        height="25px"
        width="25px"
      />
    </div>
  );
};
export default PlaceList;
