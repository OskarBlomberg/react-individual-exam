import "./EventsPage.css";
import { Search } from "lucide-react";
import EventsEvent from "../../components/EventsEvent/EventsEvent.jsx";
import getEvents from "../../hooks/useFetch.js";
import Navbar from "../../components/Navbar/Navbar.jsx";

export default function EventsPage() {
  const { data, isLoading, isError } = getEvents();

  const toRender = isLoading ? (
    <h3>Laddar...</h3>
  ) : data ? (
    data?.events.map((event) => (
      <EventsEvent key={event.id} eventInfo={event} />
    ))
  ) : isError ? (
    <h3>Eventen kunde inte laddas</h3>
  ) : (
    <h3>Vi har inga event på gång just nu</h3>
  );

  return (
    <>
      <main className="main">
        <h1>Events</h1>
        <div className="form-placeholder">
          <input
            aria-label="Search events"
            className="search-field"
            type="text"
            disabled
          />
          <button
            title="seach-button"
            aria-label="search button"
            className="search-button"
            disabled
          >
            <Search />
          </button>
        </div>

        {toRender}
      </main>
      <Navbar />
    </>
  );
}
