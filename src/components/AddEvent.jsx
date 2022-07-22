import React from 'react'

const AddEvent = () => {
  return (
    <div className="container">
        
    
    <div className="box">
      
      <input
        className="form-input"
        type="text"
        placeholder="Enter your first name"
       
      />
      <br />
      <input
        className="form-input"
        type="text"
        placeholder="Enter your last name"
        
      />
      <br />
      <input
        className="form-input"
        type="email"
        placeholder="Enter your Email address"
        
      />
      <br />
      
      <button className="form-button" >Submit</button>
    
  </div>
  </div>
    
  )
}
export default AddEvent;
