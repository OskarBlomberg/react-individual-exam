import "./App.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_728x712.webp";

function App() {
  return (
    <main className="landing">
      <div className="logo-container">
        <img
          className="logo-img"
          src={logo}
          width={728} // explicit w&h best practice för att undvika risk för cumulative layout shift
          height={712}
          alt="Stilserad logo. En person med partyhatt omgiven av konfett."
        />
      </div>
      <h1>Where It's @</h1>
      <h2 className="landing__h2">Ticketing made easy</h2>
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
