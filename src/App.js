import React from "react";
import "./App.less";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

const App = () => (
  <div className="App">
    <Navbar />
    <Landing />
  </div>
);

export default App;
