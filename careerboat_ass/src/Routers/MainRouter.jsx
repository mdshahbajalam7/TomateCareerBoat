import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../components/Landingpage/Landing";
import Lognin from "../components/Lognin/Lognin";
import Navbar from "../components/Navbar/Navbar";
import Signup from "../components/Signup/Signup";

function MainRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/login" element={<Lognin />}></Route>
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default MainRouter;
