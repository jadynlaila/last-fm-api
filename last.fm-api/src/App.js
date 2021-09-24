import Home from "./Pages/Home";
import { Switch, Route } from "react-router-dom";
import Album from "./Pages/Album";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path='/album'>
          <Album />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
