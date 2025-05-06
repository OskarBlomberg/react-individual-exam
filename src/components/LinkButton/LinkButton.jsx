import { Link } from "react-router-dom";
import "./LinkButton.css";

export default function ({ URI, onClick, children }) {
  return (
    <Link to={URI} onClick={onClick} className="linkButton">
      {children}
    </Link>
  );
}
