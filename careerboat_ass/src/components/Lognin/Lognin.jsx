import { Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginImage } from "../imageurl/imageurl";
import styles from "./Lognin.module.css";
let signuplocal = JSON.parse(localStorage.getItem("signupdata"));
console.log("signuplocal", signuplocal);
function Lognin() {
  const navigate = useNavigate();
  const [logindata, setlogindata] = useState({});
  const handleChange = (e) => {
    const InputName = e.target.name;
    setlogindata({
      ...logindata,
      [InputName]: e.target.value,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log(logindata);
    if (
      logindata.email === signuplocal.email &&
      logindata.password === signuplocal.password
    ) {
      alert("login Successful");
      navigate("/slider");
    } else {
      alert("Invalid password");
    }
  };
  return (
    <div className={styles.logindiv}>
      <div className={styles.login}>
        <img src="https://topmate.io/topmate-light.svg" alt="" />
        <button className={styles.btn6} onClick={() => navigate("/Signup")}>
          Create Account
        </button>
        <div className={styles.conatiner}>
          <h1 className={styles.h1}>Sign in</h1>
          <button className={styles.btn7}>Google</button>
          <button className={styles.btn8}>LinkedIn</button>
          <hr style={{ marginTop: "10px" }} />
          <form onSubmit={handlesubmit} className={styles.form}>
            <Typography style={{ marginTop: "20px" }}>
              Email/UserName
              <input
                onChange={handleChange}
                className={styles.email}
                type="text"
                name="email"
                placeholder="Email"
              />
            </Typography>
            <br />
            <Typography>
              Password
              <input
                onChange={handleChange}
                className={styles.password}
                type="text"
                name="password"
                placeholder="Password"
              />
            </Typography>
            <br />
            <input className={styles.submit} type="submit" value="Sign-in" />
          </form>
        </div>
      </div>
      <div>
        <img src={loginImage} alt="" />
      </div>
    </div>
  );
}

export default Lognin;
