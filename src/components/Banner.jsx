import React from "react";

function Banner() {
  return (
    <>
      <div className="img">
        <img src="./bg.avif" alt="" width="100%" height="290rem" />
      </div>

      <img
        className="image_anime"
        src="./anime.jfif"
        alt=""
        width="8%"
        height="80rem"
      />

      <div className="p">
        <h2>
          <strong>
            Neha Mishra<br></br>
          </strong>
        </h2>
        <h5>
          <b> @nehac</b>
        </h5>
      </div>
      <div className="p_2">
        <p>
          My Name is Neha Mishra, i am working as a software <br></br>Trainee in
          TFT.
        </p>
      </div>

      <button className="btn-1">
        {" "}
        <b>Follow</b>
      </button>
      <button className="btn-2">
        <b>Share Profile</b>
      </button>

      <div className="work">
        {" "}
        Neha is <span className="read">&ensp;reading book&ensp;</span>
        <img className="book" src="book.webp" alt="" height="40px" /> 12 july
      </div>
    </>
  );
}

export default Banner;
