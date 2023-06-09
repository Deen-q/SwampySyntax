import CreateEventBtn from './CreateEventBtn/CreateEventBtn';
import EventCard from './EventCard/EventCard';

export default function HomePage(props) {
	return (
		<div>
		<CreateEventBtn/>
			<EventCard filteredData={props.filteredData} />
		</div>
	);
}
