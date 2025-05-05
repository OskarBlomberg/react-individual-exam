import "./orderPage.css";

export default function OrderPage() {
  const { data, isLoading, isError } = useFetch(
    "https://santosnr6.github.io/Data/events.json"
  );
  return <h1>OrderPage</h1>;
}
