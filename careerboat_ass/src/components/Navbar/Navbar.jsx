import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import Home from "../Home/Home";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
    <div className={styles.Headers}>
      <div className={styles.nabvar}>
        {/* <div> */}
        <img src="https://topmate.io/topmate-light.svg" alt="" />
        {/* </div> */}
        <div className={styles.container}>
          <h4>About</h4>
          <h4>Pricing</h4>
          <button className={styles.btn1}>Login</button>
          <button className={styles.btn2} onClick={() => navigate("/Signup")}>
            Sign up Free
          </button>
        </div>
      </div>

      <Home />
      </div>
    </>
  );
}

export default Navbar;
