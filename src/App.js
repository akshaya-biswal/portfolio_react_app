import React from "react";
import "./App.less";
import AboutMe from "./components/AboutMe";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

const App = () => (
  <div className="App">
    <Navbar />
    <Landing />
    <AboutMe />
  </div>
);

export default App;
