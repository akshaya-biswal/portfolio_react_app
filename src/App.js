import React from "react";
import "./App.less";
import AboutMe from "./components/AboutMe";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";

const App = () => (
  <div className="App">
    <Navbar />
    <Landing />
    <AboutMe />
    <Tech />
    <Experience />
    <Project />
    <Contact />
  </div>
);

export default App;
