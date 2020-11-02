import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Middle from "./components/Middle";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
      <Header />
      {/* <Middle /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
