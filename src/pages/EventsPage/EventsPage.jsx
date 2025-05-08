import "./EventsPage.css";
import { Search } from "lucide-react";

import EventsEvent from "../../components/EventsEvent/EventsEvent.jsx";
import getEvents from "../../hooks/useFetch.js";
import Navbar from "../../components/Navbar/Navbar.jsx";

export default function EventsPage() {
  const { data, isLoading, isError } = getEvents();

  const events = data?.events.map((event) => (
    <EventsEvent key={event.id} eventInfo={event} />
  ));

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

        {events}
      </main>
      <Navbar />
    </>
  );
}
