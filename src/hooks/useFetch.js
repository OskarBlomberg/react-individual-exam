import Axios, { CanceledError } from "axios";
import { useState, useEffect } from "react";
import { setupCache } from "axios-cache-interceptor";

const instance = Axios.create();
const axios = setupCache(instance);

export default function getEvents() {
  return useFetch("https://santosnr6.github.io/Data/events.json", "events");
}

const useFetch = (url, cacheID) => {
  const [data, setData] = useState(null); // för flexibilitet kring datatyper
  const [isLoading, setIsLoading] = useState(true); // för att grundläget ska vara sant
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const controller = new AbortController(); // för att kunna avbryta hämtade requests
    const signal = controller.signal;

    setIsLoading(true);
    setIsError(false);

    axios
      .get(url, {
        signal,
        cache: {
          id: cacheID,
          cacheTakeover: false, // Stänger av att webläsaren inte chachar (som vi annars sköter manuellt som default) (för att undvika CORS error i detta fall)
          /* interpretHeader: false, // Ignorera cache-instrukitoner från servern. Behövs för att kunna bestämma ttl */
          /*  ttl: 1000 * 60, */ // Cache 1 minut
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        if (error instanceof CanceledError) {
          // setupCache gör att axios.isCancel inte funkar, så man får fånga med ovan. instanceof är ett keyword
          console.log("Fetch request cancelled", error.message); // lite info vid cancel
        } else {
          setIsError(true);
          console.error(error.message);
        }
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, [url]);

  return { data, isLoading, isError };
};
