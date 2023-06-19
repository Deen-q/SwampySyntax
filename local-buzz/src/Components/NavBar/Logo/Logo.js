// render the logo followed by Local Buzz title
import "./Logo.css";
import LogoWhiteOutline from "../../../assets/LogoWhiteOutline.png";
import {Link} from "react-router-dom";
import {UserContext} from "../../../contexts/user.context";

import {useContext} from "react";

// import LogoBlackOutline from '../../../assets/LogoBlackOutline.png';
export default function Logo(props) {
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
        <Link to='/homepage' style={{textDecoration: "none"}}>
          {props.show && <h1>LocalBuzz</h1>}
        </Link>
      ) : (
        <Link to='/' style={{textDecoration: "none"}}>
          {props.show && <h1>LocalBuzz</h1>}
        </Link>
      )}
    </div>
  );
}
