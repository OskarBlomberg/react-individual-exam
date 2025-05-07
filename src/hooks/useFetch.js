import axios from "axios";
import { useState, useEffect } from "react";

export default function getEvents() {
  return useFetch("https://santosnr6.github.io/Data/events.json");
}

const useFetch = (url) => {
  const [data, setData] = useState(null); // för flexibilitet kring datatyper
  const [isLoading, setIsLoading] = useState(true); // för att grundläget ska vara sant
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const controller = new AbortController(); // för att kunna avbryta hämtade requests
    const signal = controller.signal;

    setIsLoading(true);
    setIsError(false);

    axios
      .get(url, { signal })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log("Fetch request cancelled", error.message); // lite info vid cancel
        } else {
          setIsError(true);
        }
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, [url]);

  return { data, isLoading, isError };
};
