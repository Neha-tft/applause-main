import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Events() {
  const [details, setDetails] = useState({
    title: "",
    description: "",
  });
  const navigate = useNavigate();

  const PostData = async (e) => {
    e.preventDefault();

    const { title, description } = details;
    if (title.trim() === "" || description.trim() === "") {
      toast.error("Error", {
        position: "top-center",
        theme: "dark",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    } else {
      toast.success("Added Successfully", {
        position: "top-center",
        theme: "dark",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      const res = await fetch(
        "https://applause-c51bd-default-rtdb.firebaseio.com/applause/events.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
          }),
        }
      );
      navigate("/");
    }
  };

  return (
    <div className="container-2">
      <div className="box">
        <input
          className="form-input"
          type="text"
          placeholder="Title"
          onChange={(e) => setDetails({ ...details, title: e.target.value })}
        />
        <br />
        <input
          className="form-input"
          type="text"
          placeholder="Description"
          onChange={(e) =>
            setDetails({ ...details, description: e.target.value })
          }
        />
        <br />

        <button className="form-button" onClick={PostData}>
          Submit
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Events;
