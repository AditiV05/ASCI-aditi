import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/global.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ImportantDates from "./components/ImportantDates";
import About from "./components/about";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Committees from "./components/Committees";
import SpeakersPage from "./components/SpeakersPage";
import Author from "./components/author";
import TechCommitteeShowcase from "./components/techcommittee";
import Ctapage from "./components/ctapage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <ImportantDates />
            </>
          }
        />
        <Route path="/authors" element={<Author />} />
        <Route
          path="/speakers"
          element={
            <>
              <SpeakersPage />
            </>
          }
        />
        <Route path="/workshop" element={<div>Workshop</div>} />
        <Route path="/committees" element={<Committees />} />
        <Route path="/techCommittees" element={<TechCommitteeShowcase />} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
      <Ctapage />
      <Footer />
      <ScrollToTop />
    </Router>
  );
}

export default App;
