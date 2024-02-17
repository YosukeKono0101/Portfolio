import React from "react";
import Header from "./components/Header";
import TopBanner from "./components/TopBanner";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <TopBanner />
      <About />
      <Projects />
      <Skills />
      <Profile />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
