import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Card from "./components/Card";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Analytics />
      <Newsletter />
      <Card />
      <Footer />
    </>
  );
}

export default App;
