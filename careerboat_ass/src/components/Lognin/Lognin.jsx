import React from "react";
import { useNavigate } from "react-router-dom";
import { loginImage } from "../imageurl/imageurl";
import styles from "./Lognin.module.css";
function Lognin() {
  const navigate = useNavigate();
  return (
    <div className={styles.logindiv}>
      <div className={styles.login}>
        <img src="https://topmate.io/topmate-light.svg" alt="" />
        <button className={styles.btn6} onClick={()=>navigate("/Signup")}>Create Account</button>
        <div className={styles.conatiner}>
        <h1 className={styles.h1}>Sign in</h1>
        <button className={styles.btn7}>Google</button>
        <button className={styles.btn8}>LinkedIn</button>
        <hr />
        <form className={styles.form}>
          <input className={styles.email} type="text" name="email" placeholder="Email" />
          <br />
          <input className={styles.password} type="text" name="password" placeholder="Password" />
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
