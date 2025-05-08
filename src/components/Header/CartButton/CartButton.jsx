import { ShoppingCart } from "lucide-react";
import useTicketStore from "../../../hooks/ticketStore";
import { useNavigate } from "react-router-dom";

export default function CartButton() {
  const tickets = useTicketStore((state) => state.tickets);
  const totalTickets = Object.values(tickets).reduce(
    (total, curr) => total + curr,
    0
  );

  const navigate = useNavigate();
  return (
    <button
      className="header-button header-button--cart"
      onClick={() => navigate("/order")}
    >
      <ShoppingCart color="white" size={30} />
      <span className="cart-count">{totalTickets}</span>
    </button>
  );
}
