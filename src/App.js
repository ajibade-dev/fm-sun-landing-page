import React from "react";
import Hero from "./sections/Hero"
import Products from "./sections/Products"
import Testimonials from "./sections/Testimonials"
import About from "./sections/About"
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Testimonials />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
