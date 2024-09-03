import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Gallery from "./Gallery";
import About from "./About";
import Contact from "./Contact";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Routing;
