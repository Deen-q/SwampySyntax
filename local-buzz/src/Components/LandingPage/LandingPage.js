import LandingPageEventCard from "./LandingPageEventCard/LandingPageEventCard";
import {Link} from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage(props) {
  return (
    <div className='landing-page'>
      <Link to='/login'><button>
         Login </button> </Link>
         <Link to='/signup'> <button>
          Sign Up </button> </Link>
      <LandingPageEventCard filteredData={props.filteredData} />
    </div>
  );
}
