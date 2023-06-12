import "./CreateEventBtn.css"
import React from "react";
import { Link } from "react-router-dom" // Link is a built in function, we didnt name it that

function CreateEventBtn() {
  return (
    <div className='btnContainer'>
      <button className='btnPrimary'><Link to = "/createeventpage"
      style={{ textDecoration: 'none', color:"white" }}>
      Create Event + </Link></button>
    </div>
  );
}

export default CreateEventBtn;

