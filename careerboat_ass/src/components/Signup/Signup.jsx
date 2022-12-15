import { Avatar, Grid, Input } from "@mui/material";
import React, { useState } from "react";
import styles from "./signup.module.css";
function Signup() {
    const handleChange = ()=>{

    }
  return (
    <div className={styles.container}>
      <div className={styles.Signup}>
        <div className={styles.nav}>
          <img src="https://topmate.io/topmate-light.svg" alt="" />
          <button className={styles.btn4}>Lognin</button>
          {/* <div> */}
            <form className={styles.form}>
                <span>First Name</span>
                <br />
                <input type="text" name="" id="" />
                <input type="text" name="" id="" />
            
            </form>
          {/* </div> */}
        </div>
      </div>
      <div className={styles.imagediv}>
        <i>
          “I found Topmate to be an excellent tool for connecting with my
          followers 1:1. The first session made me realise the whole beauty of
          it. The whole journey is extremely convenient and allows me to share
          my knowledge and expertise with my followers in a more effective way.“
        </i>
        <Avatar
          style={{
            width: "80px",
            height: "80px",
            marginLeft: "45%",
            marginTop: "40px",
          }}
          className={styles.Avatar}
          alt="Remy Sharp"
          src="https://topmate.io/static/media/corina.45ffe1e1aed7f046d936.png"
        />
        <h2>Corina Andrei</h2>

        <p>Career Coach</p>
      </div>
    </div>
  );
}

export default Signup;
