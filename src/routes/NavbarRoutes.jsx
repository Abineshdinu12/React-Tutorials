import React from "react";
import { Routes, Route } from "react-router-dom";
import UseState from "../components/Hooks/UseState";
import UseEffect from "../components/Hooks/UseEffect";
import PropsDrilling from "../components/examples/PropsDrilling";
import Usecontext from "../components/Hooks/Usecontext";
import UseRef from "../components/Hooks/UseRef";
import UseMemo from "../components/Hooks/UseMemo";
import Form from "../components/examples/Form";
import UseCallBack from "../components/Hooks/UseCallBack";

const NavbarRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UseState />} />
      <Route path="/use-effect" element={<UseEffect />} />
      <Route path="/props-drilling" element={<PropsDrilling />} />
      <Route path="/use-context" element={<Usecontext />} />
      <Route path="/use-ref" element={<UseRef />} />
      <Route path="/use-memo" element={<UseMemo />} />
      <Route path="/form" element={<Form />} />
      <Route path="/use-callback" element={<UseCallBack />} />
    </Routes>
  );
};

export default NavbarRoutes;
