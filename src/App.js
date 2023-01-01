import "./App.css";
import { Route, Routes } from 'react-router-dom';
import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Reservations from "./components/Reservations";
import OrderOnline from "./components/OrderOnline";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/reservations" element={<Reservations />}/>
        <Route path="/order-online" element={<OrderOnline />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
