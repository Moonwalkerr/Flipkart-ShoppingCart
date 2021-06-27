import "./App.css";
import Dashboard from "./UI/dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          {/* <Route></Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
