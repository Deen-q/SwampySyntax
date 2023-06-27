import SearchBar from './SearchBar/SearchBar';
import Logo from './Logo/Logo.js';
import PersonIcon from './LoginIcon/loginIcon';
import './NavBar.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function NavBar(props) {
  const [show, setShow] = useState(true);

  const location = useLocation();

  function handleShowSearch() {
    setShow(!show);
  }

  return (
    <div id='navbar'>
      <Logo show={show} />
      <div className='navbar-right'>
        {' '}
        {/* only show SearchBar in certain urls in our App, we can change this as we want */}
        {['/', '/homepage'].includes(location.pathname) && (
          <SearchBar
            show={show}
            handleShowSearch={handleShowSearch}
            setShow={setShow}
            handleFilteredData={props.handleFilteredData}
          />
        )}
        <PersonIcon />
      </div>
    </div>
  );
}