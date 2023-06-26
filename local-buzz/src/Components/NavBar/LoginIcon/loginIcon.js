// render the logo followed by Local Buzz title
import personIcon from "../../../assets/icons8-person-64.png";
import "./loginIcon.css";
import {Link} from "react-router-dom";
import {UserContext} from "../../../contexts/user.context";
import {useContext} from "react";

// import LogoBlackOutline from '../../../assets/LogoBlackOutline.png';
export default function PersonIcon() {
  const {user} = useContext(UserContext);

  return (
    <>
      {user && (
        <Link to='/profilePage'>
          <img className="personIcon" id='personIcon' src={personIcon} alt='personIcon' />
        </Link>
       )}
    </>
  );
}
