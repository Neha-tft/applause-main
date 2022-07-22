import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Events() {
  const [details, setDetails] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  const PostData = async (e) => {
    e.preventDefault();

    const { fName, lName, email } = details;
 if(fName.trim()==="" || lName.trim()==="" || email.trim()===""){
  toast.error('Error',{
    position: "top-center",
    theme:'dark',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
});
 }
   else{
    toast.success('Added Successfully',{
      position: "top-center",
      theme:'dark',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,

  });
 const res = await fetch(
      "https://events-ac31b-default-rtdb.firebaseio.com/events.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fName,
          lName,
          email,
        }),
      }
    );
   } 

  };

  return (
    <div className="container">
 <div className="box">
      
      <input
        className="form-input"
        type="text"
        placeholder="Enter your first name"
        onChange={(e) => setDetails({ ...details, fName: e.target.value })}
      />
      <br />
      <input
        className="form-input"
        type="text"
        placeholder="Enter your last name"
        onChange={(e) => setDetails({ ...details, lName: e.target.value })}
      />
      <br />
      <input
        className="form-input"
        type="email"
        placeholder="Enter your Email address"
        onChange={(e) => setDetails({ ...details, email: e.target.value })}
      />
      <br />
      
      <button className="form-button" onClick={PostData}>Submit</button>
    
  </div>
  <ToastContainer />

    </div>
   
  );
}

export default Events;
