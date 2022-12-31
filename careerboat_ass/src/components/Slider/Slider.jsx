// import React, { Children } from "react";
import styles from "./slider.module.css";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import MessageIcon from "@mui/icons-material/Message";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Avatar, Stack } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
import { Link, NavLink } from "react-router-dom";

function Slider({ children }) {
  let signuplocal = JSON.parse(localStorage.getItem("signupdata"));
  const menuItem = [
    {
      path: "/home",
      name: "Home",
      icon: <HomeIcon />,
    },
    {
      path: "/call",
      name: "Call",
      icon: <CallIcon />,
    },
    {
      path: "/querise",
      name: "Querise",
      icon: <MessageIcon />,
    },
    {
      path: "/availability",
      name: "Availability",
      icon: <CalendarTodayIcon />,
    },
    {
      path: "/service",
      name: "Service",
      icon: <SettingsIcon />,
    },
    {
      path: "/payment",
      name: "Payment",
      icon: <AccountBalanceWalletIcon />,
    },
    {
      path: "/reward",
      name: "Reward",
      icon: <EmojiEventsIcon />,
    },
    {
      path: "/profile",
      name: "Profile",
      icon: <PersonIcon />,
    },
    {
      path: "/whatsnew",
      name: "What's New",
      icon: <NotificationsActiveIcon />,
    },
  ];
  return (
    <>
      <div className={styles.sliderflex}>
        <div className={styles.slider}>
          <img
            style={{ padding: "5px" }}
            src="https://topmate.io/topmate-light.svg"
            alt=""
          />
          <Stack className={styles.stack}>
            <Avatar
              src="https://www.shutterstock.com/image-photo/portrait-successful-female-professional-her-260nw-1938756121.jpg"
              style={{ width: "50px", height: "50px" }}
            />{" "}
            <label className={styles.profilesname}>topmate.io/ {signuplocal.email}</label>
            <Link className={styles.btn10} to="/profiles">Pubish Profile <label className={styles.icon}>
              <IosShareIcon />
            </label></Link>
            {/* <button >Pubish Profile</button> */}
            
          </Stack>
          {menuItem.map((elem, index) => (
            <NavLink
              to={elem.path}
              key={index}
              className={styles.link}
              activeclassName="active"
            >
              <div className={styles.icon}>{elem.icon}</div>
              <div className={styles.link_text}>{elem.name}</div>
            </NavLink>
          ))}
        </div>
        <main>{children}</main>
      </div>
    </>
  );
}

export default Slider;
