import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Work from "./components/Work/Work";
import Services from "./components/Service/Services";
import Courses from "./components/Courses/Courses";
import Internships from "./components/Internships/Internships";
import Download from "./components/Download/Download";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Work/>
      <Services/>
      <Courses/>
      <Internships/>
      <Download/>
      <Footer/>
    </div>
  )
}

export default App;
