import "./App.css";
// router
import { Route } from "react-router-dom";
// components
import Nav from "./components/nav/Nav.jsx";
import Home from "./components/home/Home";
import FindManga from "./components/findManga/FindManga";
import TopManga from "./components/topManga/TopManga";
import Results from "./components/results/Result";
import MangaDetails from "./components/mangaDetails/MangaDetails";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home}/>
      <Route path="/find" exact component={FindManga} />
      <Route path="/top" exact component={TopManga} />
      <Route path="/results" exact component={Results} />
      <Route path="/results/:id" exact component={MangaDetails} />
    </div>
  );
}

export default App;
