import "./App.css";
import Dashboard from "./UI/dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShoppingCart from "./UI/shoppingCart";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/cart">
            <ShoppingCart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
