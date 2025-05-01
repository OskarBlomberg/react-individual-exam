import { useParams } from "react-router-dom";
import "./singleEventPage.css";
import useFetch from "../../hooks/useFetch";

export default function SingleEventPage() {
  const { data, isLoading, isError } = useFetch(
    "https://santosnr6.github.io/Data/events.json"
  );
  const { id } = useParams();
  const currentEvent = data?.events.find((event) => event.id === id);

  return <h1>{currentEvent.name}</h1>;
}
