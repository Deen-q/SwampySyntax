// logo component
// render the logo followed by Local Buzz title
import "./Logo.css";
import LogoWhiteOutline from "../../../assets/LogoWhiteOutline.png";
import {Link} from "react-router-dom";
// import LogoBlackOutline from '../../../assets/LogoBlackOutline.png';
export default function Logo(props) {
  return (
    <div className='logo-container'>
      <Link to='/homepage'>
        {" "}
        <img id='logo' src={LogoWhiteOutline} alt='logo' />{" "}
      </Link>

      <div className='line'></div>
      <Link to='/homepage'> {props.show && <h1>LocalBuzz</h1>}</Link>
      {/* <img id='logo' src={LogoBlackOutline} alt='logo' />
			<h1>| LocalBuzz</h1> */}
    </div>
  );
}
