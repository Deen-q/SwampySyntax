// We made one copy of the Logo to take us back to the Landing
// logo component
// render the logo followed by Local Buzz title
import "./Logo.css";
import LogoWhiteOutline from "../../../assets/LogoWhiteOutline.png";
import {Link} from "react-router-dom";
import {UserContext} from "../../../contexts/user.context";

import {useContext, useState} from "react";

// import LogoBlackOutline from '../../../assets/LogoBlackOutline.png';
export default function LogoLandingPage(props) {
  const [show, setShow] = useState(true); // this is the state of the search bar
  const {user} = useContext(UserContext);
  //

  function handleShowSearch() {
    if (user === !null) {
      setShow(!show);
    }
  }

  return (
    <div className='logo-container'>
      {show && (
        <Link to='/'>
          {" "}
          <img
            id='logo'
            onClick={handleShowSearch}
            src={LogoWhiteOutline}
            alt='logo'
          />{" "}
        </Link>
      )}

      <div className='line'></div>
      <Link to='/'> {props.show && <h1>LocalBuzz</h1>}</Link>
      {/* <img id='logo' src={LogoBlackOutline} alt='logo' />
			<h1>| LocalBuzz</h1> */}
    </div>
  );
}
