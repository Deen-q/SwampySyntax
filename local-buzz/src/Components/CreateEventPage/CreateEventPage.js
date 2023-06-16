import AddEventForm from "./AddEventForm/AddEventForm";

export default function CreateEventPage({ addNewEvent }) {
  return (
    <div>
      <AddEventForm addNewEvent={addNewEvent} />
    </div>
  );
}
