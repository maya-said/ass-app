import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Navbar />
      <Slider />

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <Card title="First Card" />
          </div>
          <div className="col-md-4">
            <Card title="Second Card" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;