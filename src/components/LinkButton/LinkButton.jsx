import { Link } from "react-router-dom";
import "./LinkButton.css";

export default function ({ URI, children }) {
  return (
    <Link to={URI} className="linkButton">
      {children}
    </Link>
  );
}
