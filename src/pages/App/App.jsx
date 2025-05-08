import "./App.css";
import logo from "../../assets/logo_728x712.webp";
import Navbar from "../../components/Navbar/Navbar";

function App() {
  return (
    <>
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
      </main>
      <Navbar />
    </>
  );
}

export default App;

/* 

aria-labels
titles
alt-text

error handling:
 - felaktig routing
 - api-laddar, api-error
  - negativa tal / stora tal (max-antal per kund?)
 - 

html:
- author och description
- <link rel="icon" href="ikonnamn" type="image/x-icon">
*/
