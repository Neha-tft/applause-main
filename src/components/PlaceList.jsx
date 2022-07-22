import React from "react";
const PlaceList = (props) => {
  const onClickHandler = () => {
    const id = props.id;
    console.log(id);
    props.delHandler(id);
  };
  if (props.name === "") {
    return;
  }
  return (
    <div className="style">
      <a className="name" target="_blank" href={props.url}>
        <img src={props.name + ".png"} alt="" height="25px" width="25px" />
        <span className="name">{props.name}</span>
      </a>
      <img
        src="./del.png"
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
