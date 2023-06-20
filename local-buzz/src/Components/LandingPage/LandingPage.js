import LandingPageEventCard from "./LandingPageEventCard/LandingPageEventCard";
import {Link} from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage(props) {
  return (
    <div className='landing-page'>
    <div className='landing-page-container'>
      <Link to='/login' style={{textDecoration: "none", color: "white"}}><button>
         Login </button> </Link>
         <Link to='/signup' style={{textDecoration: "none", color: "white"}}> <button>
          Sign Up </button> </Link>
          </div>
      <LandingPageEventCard filteredData={props.filteredData} />
    </div>
  );
}
