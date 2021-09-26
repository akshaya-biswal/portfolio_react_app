import React from "react";
import "./App.less";
import AboutMe from "./components/AboutMe";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Tech from "./components/Tech";
import Experience from "./components/Experience";

const App = () => (
  <div className="App">
    <Navbar />
    <Landing />
    <AboutMe />
    <Tech />
    <Experience />
  </div>
);

export default App;
