import getEvents from "../../hooks/useFetch";
import Barcode from "react-barcode";
import "./Ticket.css";

export default function Ticket({
  ticketInfo: { eventId, ticketCode, section, seatNumber },
}) {
  const { data, isLoading, isError } = getEvents();

  if (isLoading) return <h2>Laddar...</h2>;

  if (isError || !data) return <h2>Biljetten kunde inte laddas</h2>;

  const event = data.events.find((e) => e.id === eventId);

  return (
    <article className="ticket">
      <div className="ticket__field ticket__what">
        <span className="ticket__mini-header">VAD</span>

        <h2 className="ticket__name">{event.name}</h2>
      </div>
      <div className="ticket__field ticket__where">
        <span className="ticket__mini-header">VAR</span>

        <h3>{event.where}</h3>
      </div>
      <div className="ticket__field ticket__when">
        <span className="ticket__mini-header">NÄR</span>

        <h3>{event.when.date}</h3>
      </div>
      <div className="ticket__field ticket__from">
        <span className="ticket__mini-header">FRÅN</span>

        <h3>{event.when.from}</h3>
      </div>
      <div className="ticket__field ticket__to">
        <span className="ticket__mini-header">TILL</span>

        <h3>{event.when.to}</h3>
      </div>
      <div className="ticket__field ticket__info">
        <span className="ticket__mini-header">INFO</span>

        <h3>
          Sektion {section} - plats {seatNumber}
        </h3>
      </div>
      <div className="ticket__field ticket__code">
        <Barcode
          className="ticket__code__barcode"
          background="#E0E0E0"
          height={50}
          displayValue={false}
          value={ticketCode}
        />
        <p className="ticket__code__number">#{ticketCode}</p>
      </div>
    </article>
  );
}
