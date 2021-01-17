import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import WayData from "./components/WayData";

function App() {
  return (
    <div className="App">
      <div className="headerWay">
        <Header />
      </div>
      <div className="cardWay">
        {WayData.map((val) => {
          return (
            <Card
              className="cardCool"
              key={val.id}
              imagesrc={val.imagesrc}
              title={val.title}
              name={val.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
