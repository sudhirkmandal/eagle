import React from "react";
import Routing from "./components/Routing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full">
      <Navbar />
      <Routing />      
        <Footer />
    </div>
  );
}

export default App;
