import "./App.css";
import FunFact from "./components/FunFact";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="app-main">
      <div>
        <Header></Header>
      </div>
      <div>
      <div>
        <FunFact></FunFact>
      </div>
      <div>
        <Footer></Footer>
      </div>
      </div>
    </div>
  );
}

export default App;
