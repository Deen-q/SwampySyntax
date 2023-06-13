// testing the SearchBar component - does it render correctly
import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from "./SearchBar";

test ("does the search icon appear", () => {
    render(
        <SearchBar/>);
        const iconElement = screen.getByAltText(/Search Icon/);
        expect (iconElement).toBeInTheDocument();

})

test ("does search bar open when search icon is clicked?", () => {
    render(
        <SearchBar/>);
        
        const searchIcon = screen.getByAltText(/Search Icon/)
        fireEvent.click(searchIcon);
        
        const searchInput = screen.getByPlaceholderText("Search for an event");
        expect (searchInput).toBeInTheDocument();

})