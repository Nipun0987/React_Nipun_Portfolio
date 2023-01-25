import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Header from "./component/header/Header";
import About from "./component/about/About";
import Qualification from "./component/qualification/Qualification";
import Skills from "./component/skills/Skills";
import Services from "./component/services/Services";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <>
        <Navbar />
        <Header />
        <About />
        <Qualification />
        <Skills />
        <Services />
        <Contact />
        <Footer />
    </>
  )}

export default App;
