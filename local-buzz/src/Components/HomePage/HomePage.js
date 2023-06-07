import EventCard from "./EventCard/EventCard";

export default function HomePage(props) {
  return (
    <div>
      <EventCard filteredData={props.filteredData} />{" "}
    </div>
  );
}
