import "./SearchBar.css";

function SearchBar(props) {
  return (
    <div className="searchContainer">
      <img
        onClick={props.handleShowSearch}
        src="https://img.icons8.com/?size=512&id=7695&format=png"
        alt="Search Icon"
        className="SearchIcon"
      />

      {!props.show === true && (
        <input
          // alternatively: !show &&; !show means show then the useState is false
          id="search"
          // onKeyUp={handleEnterClick} // Commented out because it is not being used
          type="text"
          placeholder="Search for an event"
          value={props.input}
          onChange={props.handleFilteredData} // Call the handleFilteredData function passed as a prop on input change
        />
      )}
    </div>
  );
}
export default SearchBar;

// Define function to handle enter key press
// function handleEnterClick(event) {
// 	// Check if the pressed key is 'Enter'
// 	if (event.key === 'Enter') {
// 		props.handleFilteredData(event); // Call the handleFilteredData function passed as a prop
// 	}
// }
// Render the SearchBar component
