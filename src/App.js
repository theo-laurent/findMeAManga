import "./App.css";
// router
import { BrowserRouter as Router, Route } from "react-router-dom";
// components
import Banner1 from "./components/banner1/Banner1.jsx";
import Nav from "./components/nav/Nav.jsx";
import FindManga from "./components/findManga/FindManga";
import Results from "./components/results/Result";
import TopManga from "./components/topManga/TopManga";

function App() {
  return (
    <div className="App">
      <Banner1 />
      <Router>
        <Nav />
        <Route path="/" exact component={FindManga} />
        <Route path="/results" exact component={Results} />
        <Route path="/top"exact  component={TopManga} />
      </Router>
    </div>
  );
}

export default App;
