import { useParams } from "react-router-dom";
import "./singleEventPage.css";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import EventDetails from "../../components/eventDetails/EventDetails";

export default function SingleEventPage() {
  const { data, isLoading, isError } = useFetch(
    "https://santosnr6.github.io/Data/events.json"
  );
  const { id } = useParams();
  const currentEvent = data?.events.find((event) => event.id === id);

  const toRender = currentEvent ? (
    <EventDetails key={currentEvent.id} eventInfo={currentEvent} />
  ) : isLoading ? (
    <h2>Laddar event...</h2>
  ) : (
    <h2>Kunde inte ladda eventet</h2>
  );
  return (
    <main className="main">
      <h1>Event</h1>
      {toRender}
    </main>
  );
}
