import "./App.css";
import React from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Place from "./components/Place";
import Card from "./components/Card";

import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import Events from "./components/Events";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/events" element={<Events />} />
        <Route exact path="/" element={
            <>
              <Nav />
              <Banner />
              <Place />
              <Card />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
