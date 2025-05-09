import "./EventDetails.css";

export default function EventDetails({
  eventInfo: { name, where, when, price },
}) {
  return (
    <article className="details">
      <h2 className="details__name">{name}</h2>
      <p className="details__date">
        {when.date} {when.from} - {when.to}
      </p>
      <p className="details__where">@ {where}</p>
      <p className="details_price">Pris: {price} :-</p>
    </article>
  );
}
