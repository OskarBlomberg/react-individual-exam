import { Link } from "react-router-dom";

export default function EventsEvent({
  eventInfo: { name, where, when, price, id },
}) {
  const dateArr = when.date.split(" ");
  const month = dateArr[1].slice(0, 3).toUpperCase();

  return (
    <Link to={`/events/${id}`} className="event-link">
      <article className="event">
        <div className="event__date">
          <span>{dateArr[0]}</span>
          <span>{month}</span>
        </div>
        <div className="event__container">
          <h2 className="event__name">{name}</h2>
          <span className="event__where">{where}</span>
          <div className="event__time-price-container">
            <time className="event__time">
              {when.from} - {when.to}
            </time>
            <span className="event__price">{price} sek</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
