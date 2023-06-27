import "./CreateEventBtn.css";
import React from "react";
import {Link} from "react-router-dom"; // Link is a built in function, we didnt name it that

function CreateEventBtn() {
  return (
    <div className='bottomBarContainer'>
    

    <div className='btnContainer'>
      <Link
        to='/createeventpage'
        style={{textDecoration: "none", color: "white"}}
      >
        <button className='btnPrimary'>+</button>
      </Link>
    </div>
    <div className= 'bottomLine'></div>
    </div>
  );
}

export default CreateEventBtn;
