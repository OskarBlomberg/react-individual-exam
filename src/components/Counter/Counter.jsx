import "./Counter.css";

export default function Counter() {
  return (
    <section className="counter">
      <h3 className="off-screen">Biljett-räknare</h3>
      <p className="counter__price" tabIndex={0} aria-label="Pris">
        sek
      </p>
      <button
        className="counter__decrement-btn"
        aria-label="Minska antal biljetter"
      >
        -
      </button>
      <p
        className="counter__total-tickets"
        aria-label="Nuvarande antal biljetter"
      >
        total
      </p>
      <button
        className="counter__increment-btn"
        aria-label="Öka antal biljetter"
      >
        +
      </button>
    </section>
  );
}
