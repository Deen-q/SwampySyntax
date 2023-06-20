import AddEventForm from "./AddEventForm/AddEventForm";
import "./CreateEventPage.css";

export default function CreateEventPage({ addNewEvent }) {
  return (
    <div>
  
      <AddEventForm addNewEvent={addNewEvent} />
    </div>
  );
}
