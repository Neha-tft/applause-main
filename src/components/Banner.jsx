import React from "react";
import bg from "../images/bg.avif";
import anime from "../images/anime.jfif";
import book from "../images/book.png";

function Banner() {
  return (
    <>
      <div className="img">
        <img src={bg} alt="" width="100%" height="290rem" />
      </div>

      <img
        className="image_anime"
        src={anime}
        alt=""
        width="7%"
        height="80rem"
      />

      <div className="p">
        <h2>
          <strong>
            Neha Mishra<br></br>
          </strong>
        </h2>
        <h5>
          <b> @neha</b>
        </h5>
      </div>
      <div className="p_2">
        <p>
          My Name is Neha Mishra, i am working as a software <br></br>Trainee in
          TFT.
        </p>
      </div>

      <button className="btn-1">
        <b>Follow</b>
      </button>
      <button className="btn-2">
        <b>Share Profile</b>
      </button>

      <div className="work">
        Neha is <span className="read">&ensp;reading book&ensp;</span>
        <img className="book" src={book} alt="" height="25px" />&ensp; 12 july
      </div>
    </>
  );
}

export default Banner;
