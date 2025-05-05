import { useParams } from "react-router-dom";
import "./SingleEventPage.css";
import useFetch from "../../hooks/useFetch";
import EventDetails from "../../components/EventDetails/EventDetails";
import Counter from "../../components/Counter/Counter";
import LinkButton from "../../components/LinkButton/LinkButton";

export default function SingleEventPage() {
  const { data, isLoading, isError } = useFetch(
    "https://santosnr6.github.io/Data/events.json"
  );
  const { id } = useParams();
  const currentEvent = data?.events.find((event) => event.id === id);

  const toRender = currentEvent ? (
    <>
      <span className="singleEventMain__comment">
        Här hittar du biljetterna till:
      </span>
      <EventDetails key={currentEvent.id} eventInfo={currentEvent} />
      <Counter eventInfo={currentEvent} />
      <LinkButton URI={"/order"}>Till varukorgen</LinkButton>
    </>
  ) : isLoading ? (
    <h2>Laddar event...</h2>
  ) : (
    <h2>Kunde inte ladda eventet</h2>
  );
  return (
    <main className="main singleEventMain">
      <h1>Event</h1>
      {toRender}
    </main>
  );
}
