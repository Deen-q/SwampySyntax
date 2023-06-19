import LandingPageEventCard from "./LandingPageEventCard/LandingPageEventCard";
import {Link} from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage(props) {
  return (
    <div className='landing-page'>
      <button>
        <Link to='/login'> Login</Link>
      </button>
      <button>
        <Link to='/signup'> Sign Up</Link>
      </button>
      <LandingPageEventCard filteredData={props.filteredData} />
    </div>
  );
}
