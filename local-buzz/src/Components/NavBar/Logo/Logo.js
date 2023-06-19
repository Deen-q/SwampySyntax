// We made one copy of the Logo to take us back to the Landing
// logo component
// render the logo followed by Local Buzz title
import "./Logo.css";
import LogoWhiteOutline from "../../../assets/LogoWhiteOutline.png";
import {Link} from "react-router-dom";
import {UserContext} from "../../../contexts/user.context";

import {useContext} from "react";

// import LogoBlackOutline from '../../../assets/LogoBlackOutline.png';
export default function LogoLandingPage(props) {
  const {user} = useContext(UserContext);

  return (
    <div className='logo-container'>
      {user ? (
        <Link to='/homepage'>
          <img id='logo' src={LogoWhiteOutline} alt='logo' />
        </Link>
      ) : (
        <Link to='/'>
          <img id='logo' src={LogoWhiteOutline} alt='logo' />
        </Link>
      )}
      <div className='line'></div>
      {user ? (
        <Link to='/homepage'>{props.show && <h1>LocalBuzz</h1>}</Link>
      ) : (
        <Link to='/'>{props.show && <h1>LocalBuzz</h1>}</Link>
      )}
    </div>
  );
}
