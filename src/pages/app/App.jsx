import "./app.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <main>
      <h1>Hello world</h1>
      <ul>
        <li>
          <Link to={"/events"}>events</Link>
        </li>
        <li>
          <Link to={"/order"}>order</Link>
        </li>
        <li>
          <Link to={"/tickets"}>tickets</Link>
        </li>
      </ul>
    </main>
  );
}

export default App;

/* 
sidor:
landningssida : / swipebar
eventsida : /events  swipebar
singleevent : /events/:id
varukorg : /order
ticket : ticket - swipe  swipebar

komponenter: 
eventInfo (med namn, tid, plats, pris)

generera strecckod (Libre barcode) och id - uuid (eller kanske det från scrimba)

aria-labels
titles
alt-text

error handling:
 - felaktig routing
 - api-laddar, api-error
 - abort controller,
 - negativa tal / stora tal (max-antal per kund?)
 - 

html:
- author och description
- <link rel="icon" href="ikonnamn" type="image/x-icon">
*/
