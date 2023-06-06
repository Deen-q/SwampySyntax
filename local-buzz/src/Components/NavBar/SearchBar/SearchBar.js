import { useState } from 'react';
import './SearchBar.css'

// when clicked, opens up into a search bar
// when search button clicked, render event cards on to page
export default function SearchBar (){

    const [input, setInput] = useState ('');
    function handleInputChange (event){
        setInput(event.target.value);
    }


return(
    <input onChange={handleInputChange} type='text' placeholder='Search for an event'/>
);
}
