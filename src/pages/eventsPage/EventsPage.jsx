import "./eventsPage.css";
import useFetch from "../../hooks/useFetch.js";
import EventsEvent from "../../components/eventsEvent/EventsEvent.jsx";

export default function EventsPage() {
  const { data, isLoading, isError } = useFetch(
    "https://santosnr6.github.io/Data/events.json"
  );

  const events = data?.events.map((event) => (
    <EventsEvent key={event.id} eventInfo={event} />
  ));

  return (
    <main className="main">
      <h1>Events</h1>
      <input className="search-field" type="text" disabled />
      {events}
    </main>
  );
}
