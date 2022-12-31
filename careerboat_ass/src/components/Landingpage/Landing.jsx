import { Avatar, Stack } from "@mui/material";
import React from "react";
import styles from "./landing.module.css";
import IosShareIcon from "@mui/icons-material/IosShare";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import MessageIcon from "@mui/icons-material/Message";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useNavigate } from "react-router-dom";
// import Availability from "../availability/Availability";
function Landing() {
  const Navigate = useNavigate();
  return (
    <div className={styles.landingpage}>
      <div className={styles.slider}>
        <img
          style={{ padding: "5px" }}
          src="https://topmate.io/topmate-light.svg"
          alt=""
        />
        <Stack className={styles.stack}>
          <Avatar style={{ width: "50px", height: "50px" }} />{" "}
          <label className={styles.profilesname}>topmate.io/</label>
          <button className={styles.btn10}>Pubish Profile</button>
          <label style={{ marginLeft: "200px", marginTop: "-29px" }}>
            <IosShareIcon />
          </label>
        </Stack>
        <div className={styles.homediv}>
          <div className={styles.allhovers}>
            <HomeIcon /> <span>Home</span>
          </div>
          <br />
          <div className={styles.allhovers}>
            <CallIcon /> <span>Call</span>
          </div>
          <br />
          <div className={styles.allhovers}>
            <MessageIcon />
            <span>Querise</span>
          </div>
          <hr />
          <br />
          <div className={styles.allhovers}>
            <CalendarTodayIcon />{" "}
            <span onClick={() => Navigate("/availability")}>Availability</span>
          </div>
          <br />
          <div className={styles.allhovers}>
            <SettingsIcon /> <span>Services</span>
          </div>
          <br />
          <div className={styles.allhovers}>
            <AccountBalanceWalletIcon /> <span>Payment</span>
          </div>
          <hr />
          <br />
          <div className={styles.allhovers}>
            <EmojiEventsIcon /> <span>Rewards</span>
          </div>
          <br />
          <div className={styles.allhovers}>
            <PersonIcon /> <span>Profile</span>
          </div>
          <br />
          <div className={styles.allhovers}>
            <NotificationsActiveIcon /> <span>What's New</span>
          </div>
        </div>
      </div>
      <div className={styles.containerdiv}>
        {/* <Availability /> */}
      </div>
    </div>
  );
}

export default Landing;
