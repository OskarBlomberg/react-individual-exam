import Counter from "../../components/Counter/Counter";
import useTicketStore from "../../hooks/ticketStore";
import LinkButton from "../../components/LinkButton/LinkButton";
import "./orderPage.css";
import useBoughtTicketStore from "../../hooks/boughtTicketsStore";
import getEvents from "../../hooks/useFetch";

export default function OrderPage() {
  const { data, isLoading, isError } = getEvents();
  const tickets = useTicketStore((state) => state.tickets);
  const clearTicketStore = useTicketStore((state) => state.clearTicketStore);
  const setBoughtTickets = useBoughtTicketStore(
    (state) => state.setBoughtTickets
  );

  const ticketIds = new Set(Object.keys(tickets)); // för att kunna använda "has", vilket är snabbare
  const eventsWithTickets = data?.events.filter((event) =>
    ticketIds.has(event.id)
  );
  const totalPrice =
    eventsWithTickets?.reduce((sum, event) => {
      const quantity = tickets[event.id] || 0;
      return sum + quantity * event.price;
    }, 0) || 0;

  const handleClick = () => {
    setBoughtTickets(tickets);
    clearTicketStore();
  };

  const renderTickets = eventsWithTickets ? (
    <>
      {eventsWithTickets.map((event) => (
        <article className="store-item" key={event.id}>
          <h2 className="store-item__name">{event.name}</h2>
          <p className="store-item__date">
            {event.when.date} {event.when.from} - {event.when.to}
          </p>
          <Counter eventInfo={event} />
        </article>
      ))}
      <section className="total-price">
        <h2 className="total-price__header">Totalt:</h2>
        <p className="total-price__price">{totalPrice} sek</p>
        <LinkButton URI={"/tickets"} onClick={handleClick}>
          Skicka order
        </LinkButton>
      </section>
    </>
  ) : isLoading ? (
    <h2>Laddar event...</h2>
  ) : isError ? (
    <h2>Kunde inte ladda eventen</h2>
  ) : (
    <h2>Inga event i varuorgen</h2>
  );

  return (
    <main className="main">
      <h1>Varukorg</h1>
      {renderTickets}
    </main>
  );
}
