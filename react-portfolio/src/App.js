import React from 'react';
// import './App.css';
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Header />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
