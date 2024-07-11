import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./layouts/Navbar";
import NavbarRoutes from "./routes/NavbarRoutes";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <NavbarRoutes />
      </div>
    </Router>
  );
}

export default App;
