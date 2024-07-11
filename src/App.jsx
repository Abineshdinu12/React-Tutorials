import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./layouts/Navbar";
import UseState from "./components/Hooks/UseState";
import UseEffect from "./components/Hooks/UseEffect";
import PropsDrilling from "./components/examples/PropsDrilling";
import Usecontext from "./components/Hooks/Usecontext";
import UseRef from "./components/Hooks/UseRef";
import UseMemo from "./components/Hooks/UseMemo";
import Form from "./components/examples/Form";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<UseState />} />
          <Route path="/use-effect" element={<UseEffect />} />
          <Route path="/PropsDrilling" element={<PropsDrilling />} />
          <Route path="/use-context" element={<Usecontext />} />
          <Route path="/use-ref" element={<UseRef />} />
          <Route path="/use-memo" element={<UseMemo />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
