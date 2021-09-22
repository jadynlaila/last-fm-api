import Footer from "./Components/Footer";
import Search from "./Components/Search";
import Home from "./Pages/Home";
import { Switch, Route } from "react-router-dom";
import Album from "./Pages/Album";

function App() {
  return (
    <div className="App">
      <Search />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path='/album'>
          <Album />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
