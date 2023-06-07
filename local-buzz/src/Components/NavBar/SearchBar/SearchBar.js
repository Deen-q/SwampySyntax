import './SearchBar.css';

function SearchBar(props) {
	function handleEnterClick(event) {
		if (event.key === 'Enter') {
			props.handleFilteredData(event);
		}
	}
	return (
		<input
			id='search'
			// onKeyUp={handleEnterClick}
			type='text'
			placeholder='Search for an event'
			value={props.input}
			onChange={props.handleFilteredData}
		/>
	);
}

export default SearchBar;
