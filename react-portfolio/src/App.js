import React from 'react';
import Body from "./components/Body/Body";
import Card from "./components/Card/Card";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Body />
      <Card />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
