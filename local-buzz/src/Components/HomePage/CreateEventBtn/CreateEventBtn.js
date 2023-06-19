import "./CreateEventBtn.css";
import React from "react";
import {Link} from "react-router-dom"; // Link is a built in function, we didnt name it that

function CreateEventBtn() {
  return (
    <div className='btnContainer'>
      <Link
        to='/createeventpage'
        style={{textDecoration: "none", color: "white"}}
      >
        <button className='btnPrimary'>Create Event</button>
      </Link>
    </div>
  );
}

export default CreateEventBtn;
