import SearchBar from './SearchBar/SearchBar';
import Logo from './Logo/Logo.js';
import './NavBar.css';

export default function NavBar(props) {
	return (
		<div id='navbar'>
			<Logo />
			<SearchBar handleFilterData={props.handleFilterData } input={props.input}/>
		</div>
	);
}
