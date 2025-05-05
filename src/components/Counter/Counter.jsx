import "./Counter.css";
import useTicketStore from "../../hooks/ticketStore.js";

export default function Counter({ eventInfo: { price, id } }) {
  const tickets = useTicketStore((state) => state.tickets);
  const incrementTicket = useTicketStore((state) => state.incrementTicket);
  const decrementTicket = useTicketStore((state) => state.decrementTicket);
  const ticketCount = tickets[id] ?? 0;
  console.log(tickets);

  return (
    <section className="counter">
      <h3 className="off-screen">Biljett-räknare</h3>
      <p className="counter__price" tabIndex={0} aria-label="Pris">
        {ticketCount * price} sek
      </p>
      <button
        className="counter__decrement-btn"
        aria-label="Minska antal biljetter"
        onClick={() => decrementTicket(id)}
      >
        -
      </button>
      <p
        className="counter__total-tickets"
        aria-label="Nuvarande antal biljetter"
      >
        {ticketCount}
      </p>
      <button
        className="counter__increment-btn"
        aria-label="Öka antal biljetter"
        onClick={() => incrementTicket(id)}
      >
        +
      </button>
    </section>
  );
}
