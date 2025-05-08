import { useLocation } from "react-router-dom";
import "./Header.css";
import BackButton from "./BackButton/BackButton";
import CartButton from "./CartButton/CartButton";
import useTicketStore from "../../hooks/ticketStore";

export default function Header() {
  const tickets = useTicketStore((state) => state.tickets);

  const location = useLocation();
  const pathname = location.pathname;

  const needBackButton =
    pathname === "/order" || pathname.startsWith("/events/");

  return (
    <header className="header">
      <div className="header__container">
        {needBackButton ? <BackButton /> : null}
        {Object.keys(tickets).length !== 0 ? <CartButton /> : null}
      </div>
    </header>
  );
}
