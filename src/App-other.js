import "./App.css";
import FunFact from "./components/other-practice/FunFact";
import Header from "./components/other-practice/Header";
import Footer from "./components/other-practice/Footer";
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
