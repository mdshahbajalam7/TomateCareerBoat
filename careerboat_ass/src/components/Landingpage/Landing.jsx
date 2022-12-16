import { Avatar, Stack } from "@mui/material";
import React from "react";
import styles from "./landing.module.css";

function Landing() {
  return (
    <div className={styles.landingpage}>
      <div className={styles.slider}>
        <img src="https://topmate.io/topmate-light.svg" alt="" />
        <Stack className={styles.stack}>
          <Avatar />{" "}
          <label style={{ marginLeft: "45px", marginTop: "-29px" }}>
            ASKJDKasjk
          </label>
          <button className={styles.btn10}>Pubish Profile</button>
          <label style={{ marginLeft: "200px", marginTop: "-29px" }}>fdg</label>
        </Stack>
      </div>
      <div className={styles.containerdiv}>dgfhfgd</div>
    </div>
  );
}

export default Landing;
