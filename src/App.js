import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Middle from "./components/Middle";
import News from "./pages/News";
import About from "./pages/About";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Storerefund from "./pages/Storerefund";
import Support from "./pages/Support";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="wrapper">
          <Header />
          <Switch>
            <Route exact path="/" component={Middle} />
            <Route exact path="/news" component={News} />
            <Route exact path="/about" component={About} />
            <Route exact path="/Terms & Conditions" component={Terms} />
            <Route exact path="/Privacy Policy" component={Privacy} />
            <Route exact path="/Store Refund Policy" component={Storerefund} />
            <Route exact path="/Support us" component={Support} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
