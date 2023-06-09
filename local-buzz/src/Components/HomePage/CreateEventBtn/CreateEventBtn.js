

import React from "react";
import { Link } from "react-router-dom" // Link is a built in function, we didnt name it that

function CreateEventBtn() {
  return (
    <div className='CreateEventBtn'>
      <button className='btn-primary'><Link to = "/createeventpage">Create Event + </Link></button>
    </div>
  );
}

export default CreateEventBtn;

