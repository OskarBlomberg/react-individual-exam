import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <footer className="footer">
      <nav className="navbar">
        <Link to={"/"} className="navbar__link">
          Hem
        </Link>
        <Link to={"/events"} className="navbar__link">
          Events
        </Link>
        <Link to={"/tickets"} className="navbar__link">
          Biljetter
        </Link>
      </nav>
    </footer>
  );
}
