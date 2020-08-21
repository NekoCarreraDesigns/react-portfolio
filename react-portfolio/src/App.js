import React from 'react';
// import './App.css';
import Body from "./components/Body/Body";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Header />
      <Body />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
