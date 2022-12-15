import React from "react";
import { Route, Routes } from "react-router-dom";
import Lognin from "../components/Lognin/Lognin";
import Navbar from "../components/Navbar/Navbar";
import Signup from "../components/Signup/Signup";

function MainRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar/>}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/login" element={<Lognin />}></Route>
      </Routes>
    </div>
  );
}

export default MainRouter;
