import "./App.css";
import Dashboard from "./UI/dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShoppingCart from "./UI/shoppingCart";
import Nav from "./UI/nav/";
import Wishlist from "./UI/shoppingCart/wishlist";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/cart">
            <ShoppingCart />
          </Route>
          <Route path="/wishlist">
            <Wishlist />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
