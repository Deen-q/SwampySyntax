import EventCard from "./EventCard/EventCard"

export default function HomePage(props){


    return(
        <div>
    <EventCard data={props.filteredEvents}/>        </div>
    )
}