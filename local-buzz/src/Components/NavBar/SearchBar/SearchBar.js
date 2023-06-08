import './SearchBar.css';
function SearchBar(props) {
	// Define function to handle enter key press
	// function handleEnterClick(event) {
	// 	// Check if the pressed key is 'Enter'
	// 	if (event.key === 'Enter') {
	// 		props.handleFilteredData(event); // Call the handleFilteredData function passed as a prop
	// 	}
	// }
	// Render the SearchBar component
	return (
		<input
			id='search'
			// onKeyUp={handleEnterClick} // Commented out because it is not being used
			type='text'
			placeholder='Search for an event'
			value={props.input}
			onChange={props.handleFilteredData} // Call the handleFilteredData function passed as a prop on input change
		/>
	);
}
export default SearchBar;
