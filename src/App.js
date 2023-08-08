import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import Summery from "./Components/Summery/Summery"; 
import Languages from "./Components/Languages/Languages";
import Process from "./Components/Process/Process";
import Projects from "./Components/Projects/Projects";
import Carrer from "./Components/Carrer/Carrer";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Progress from "./Components/Progress/Progress";
import Theme from "./Components/Theme/Theme";

function App() {
  return (
    <>
    <Theme/>
    <Progress/>
    <div className="container">
      <Navigation/>
      <Home/>
      <Summery/>
      <Languages/>
      <Process/>
      <Projects/>
      <Carrer/>
      <About/>
      <Contact />
      
      <Footer/>
      
    </div>
    </>
  );
}

export default App;