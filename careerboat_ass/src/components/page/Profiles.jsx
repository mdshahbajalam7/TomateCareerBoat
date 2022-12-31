import React from 'react'
import styles from "../page/pagealldata.module.css";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SmartToyIcon from '@mui/icons-material/SmartToy';
function Profiles() {
  return (
    <>
    <div className={styles.profiles_container}>
     <h1>Publish Profile</h1>
     <hr style={{marginTop:"20px"}} />
    </div>
    <div className={styles.Profilesdiv}>
      <div className={styles.create}>
        <BorderColorIcon/>
        Create a post
      </div>
      <div>
        Use A template {">"}
      </div>
      <div>
        <SmartToyIcon/> 
        Ink pot AI
      </div>
    </div>
    </>
  )
}

export default Profiles