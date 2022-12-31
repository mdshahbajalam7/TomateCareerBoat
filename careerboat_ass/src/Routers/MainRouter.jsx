import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../components/Landingpage/Landing";
import Lognin from "../components/Lognin/Lognin";
import Navbar from "../components/Navbar/Navbar";
import Availability from "../components/page/Availability";
import Call from "../components/page/Call";
import Home from "../components/page/Home";
import Payment from "../components/page/Payment";
import Profile from "../components/page/Profile";
import Profiles from "../components/page/Profiles";
import Querise from "../components/page/Querise";
import Rewards from "../components/page/Rewards";
import Services from "../components/page/Services";
import WhatsNew from "../components/page/WhatsNew";
import Signup from "../components/Signup/Signup";
import Slider from "../components/Slider/Slider";

function MainRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/login" element={<Lognin />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
      </Routes>

      <Slider style={{display:"none"}}>
        {/* <Route path="/slider" element={<Slider />}> */}
          <Routes>
            <Route path="/profiles" element={<Profiles/>}/>
            <Route path="/availability" element={<Availability />}></Route>
            <Route path="/home" element={<Home />} />
            <Route path="payment" element={<Payment />} />
            <Route path="/service" element={<Services />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/querise" element={<Querise />} />
            <Route path="/reward" element={<Rewards />} />
            <Route path="/whatsnew" element={<WhatsNew />} />
            <Route path="/call" element={<Call />} />
          </Routes>
        {/* </Route> */}
      </Slider>
      {/* </Route> */}
    </div>
  );
}

export default MainRouter;
