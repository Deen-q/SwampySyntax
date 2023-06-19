import SearchBar from "./SearchBar/SearchBar";
import Logo from "./Logo/Logo.js";
import "./NavBar.css";
import {useState} from "react";
import LogoLandingPage from "./Logo/LogoLandingPage";

export default function NavBar(props) {
  const [show, setShow] = useState(true);

  function handleShowSearch() {
    setShow(!show);
  }

  return (
    <div id='navbar'>
      <LogoLandingPage show={show} />
      <Logo show={show} />
      <SearchBar
        show={show}
        handleShowSearch={handleShowSearch}
        setShow={setShow}
        handleFilteredData={props.handleFilteredData}
      />
    </div>
  );
}
