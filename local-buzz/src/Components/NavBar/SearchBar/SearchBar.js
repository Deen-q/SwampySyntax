import "./SearchBar.css";

function SearchBar(props) {
  function handleEnterClick(event) {
    if (event.key === "Enter") {
      return props.filteredEvents;
    }
  }

  return (
    <input
      id="search"
      onKeyUp={handleEnterClick}
      type="text"
      placeholder="Search for an event"
    />
  );
}

export default SearchBar;
