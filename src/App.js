import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Products} />
          <Route path="/signup" exact component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
