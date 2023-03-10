import { Avatar, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { linkedinurl } from "../imageurl/imageurl";
import styles from "./signup.module.css";
let signuplocal = JSON.parse(localStorage.getItem("signupdata"))
function Signup() {
  const navigate = useNavigate();
  const [signupdata, setsignupdata] = useState({});
  const handleChange = (e) => {
    const inputName = e.target.name;
    setsignupdata({
      ...signupdata,
      [inputName]: e.target.value,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault()
    console.log(signupdata);
    // signuplocal.push(signupdata)
    localStorage.setItem("signupdata",JSON.stringify(signupdata))
    navigate("/login")
  };
  return (
    <div className={styles.container}>
      <div className={styles.Signup}>
        <div className={styles.nav}>
          <img src="https://topmate.io/topmate-light.svg" alt="" />
          <button className={styles.btn4} onClick={() => navigate("/login")}>
            Lognin
          </button>
          <h1>Welcome to topmate</h1>
          {/* <div className={styles.formdiv}> */}
          <button className={styles.btn5}>Google</button>
          <button className={styles.btn6}>linkedin</button>
          <hr style={{ marginTop: "10px", width: "90%" }} />
          <form onSubmit={handlesubmit} className={styles.form}>
            <Typography>First Name</Typography>
            <input
              className={styles.inputtag}
              type="text"
              name="firstname"
              placeholder="FirstName"
              onChange={handleChange}
            />
            {/* <Typography>Last Name */}
            <input
              onChange={handleChange}
              className={styles.inputtag}
              style={{ marginLeft: "40px" }}
              type="text"
              name="lastname"
              placeholder="LastName"
              required
            />
            <br />
            <input
              onChange={handleChange}
              className={styles.email}
              type="text"
              name="email"
              placeholder="Email"
              required
            />

            <br />
            <input
              onChange={handleChange}
              className={styles.password}
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <br />
            <input
              className={styles.submit}
              type="submit"
              value="Get Started"
            />
          </form>
          {/* </div> */}
        </div>
      </div>
      <div className={styles.imagediv}>
        <i>
          ???I found Topmate to be an excellent tool for connecting with my
          followers 1:1. The first session made me realise the whole beauty of
          it. The whole journey is extremely convenient and allows me to share
          my knowledge and expertise with my followers in a more effective way.???
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
