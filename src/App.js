import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Details from "./Components/Details";
import Cart from "./Components/Cart";
import Default from "./Components/Default";
import { Switch, Route } from "react-router";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <ProductList />
          </Route>
          <Route>
            <Default />
          </Route>
        </Switch>
      </React.Fragment>
    );
  }
}
