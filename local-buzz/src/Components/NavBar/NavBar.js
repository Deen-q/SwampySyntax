import SearchBar from './SearchBar/SearchBar';
import Logo from './Logo/Logo.js';
import PersonIcon from './LoginIcon/loginIcon';
import './NavBar.css';
import { useState } from 'react';

export default function NavBar(props) {
	const [show, setShow] = useState(true);

	function handleShowSearch() {
		setShow(!show);
	}

	return (
		<div id='navbar'>
			<Logo show={show} />
			<div className='navbar-right'>
				{' '}
				<SearchBar
					show={show}
					handleShowSearch={handleShowSearch}
					setShow={setShow}
					handleFilteredData={props.handleFilteredData}
				/>
				<PersonIcon />
			</div>
		</div>
	);
}
