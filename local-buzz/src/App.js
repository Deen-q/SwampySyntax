import './App.css';
import NavBar from './Components/NavBar/NavBar';
import EventCard from './Components/HomePage/EventCard/EventCard';
import { filteredEventsList } from './Components/NavBar/SearchBar/SearchBar';

function App() {
	return (
		<>
			<NavBar />
			<EventCard data={filteredEventsList} />
		</>
	);
}

export default App;
