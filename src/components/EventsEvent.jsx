export default function Event({ eventInfo: { name, where, when, price } }) {
  return (
    <article className="event">
      <time className="event__date">{when.date}</time>
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
  );
}
