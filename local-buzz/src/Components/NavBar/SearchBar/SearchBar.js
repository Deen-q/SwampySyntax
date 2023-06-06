import { useState } from 'react';
import './SearchBar.css'
import { eventData } from '../../Data/EventData';

// when clicked, opens up into a search bar
// when search button clicked, render event cards on to page
export default function SearchBar (){

    const [input, setInput] = useState ('');
    const [filteredData, setFilteredData] = useState (eventData);
    const events = [...eventData]

    function handleFilteredData (event){
        setInput(event.target.value);
        const filteredEvents = events.filter(event => event.title.toLowerCase().startsWith(input.toLowerCase())
        )
        setFilteredData(filteredEvents);
        console.log(filteredData)
    }

return(
    <>
    <input id='search' onChange={handleFilteredData} type='text' placeholder='Search for an event'/>
    </>
);
}
