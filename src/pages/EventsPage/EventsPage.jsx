import "./EventsPage.css";

import EventsEvent from "../../components/EventsEvent/EventsEvent.jsx";
import getEvents from "../../hooks/useFetch.js";

export default function EventsPage() {
  const { data, isLoading, isError } = getEvents();

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
