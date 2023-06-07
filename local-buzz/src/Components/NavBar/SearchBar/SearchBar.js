import './SearchBar.css';

function SearchBar(props) {

	return (
		<input
			id='search'
			onKeyUp={props.handleFilteredData}
			type='text'
			placeholder='Search for an event'
		/>
	);
}

export default SearchBar;
