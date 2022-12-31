import React, { useState } from "react";
import styles from "../page/pagealldata.module.css";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Calendar from "react-calendar";
import { Button, Input } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Availability() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [checkbox, setCheckbox]=useState(false)
  const handleinputchange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className={styles.Availability}>
      <h1>Availability</h1>
      <div className={styles.buttondiv}>
        <button className={styles.btn11}>Schedule</button>
        <button className={styles.btn12}>Configurations</button>
      </div>
      <hr style={{ marginTop: "10px" }} />

      <button className={styles.btn13}>Default</button>
      <button className={styles.btn14} onClick={handleOpen}>
        + New Schedule
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 style={{ marginTop: "-40px" }}>Create Schedule</h1>
          <Typography id="modal-modal-title" variant="button" component="h2">
            Schedule Name
          </Typography>
          <Input type="text" placeholder="Exclusive hours Free Hours" />
          <br />
          <Button className={styles.btn15}>Cancel</Button>
          <Button className={styles.btn15}>Create</Button>
        </Box>
      </Modal>
      <div className={styles.flexdiv}>
        <div className={styles.buttonflex}>
          <button className={styles.btn16}>Default</button>
          <button className={styles.btn17}>Save</button>
          <div className={styles.inputdiv}>
            <input
              style={{ width: "30px", height: "20px" }}
              type="checkbox"
              onChange={handleinputchange}
            />{" "}
            <label style={{ fontSize: "25px", marginTop: "-10px" }}>
              Monday
            </label>
            <span style={{ marginLeft: "30%" }}>Unavailable</span>
          </div>
          <hr style={{ marginTop: "15px" }} />
          <div className={styles.inputdiv}>
            <input
              style={{ width: "30px", height: "20px" }}
              type="checkbox"
              onChange={handleinputchange}
            />{" "}
            <label style={{ fontSize: "25px", marginTop: "-10px" }}>
              Tuesday
            </label>
            <span style={{ marginLeft: "30%" }}>Unavailable</span>
          </div>
          <hr style={{ marginTop: "15px" }} />
          <div className={styles.inputdiv}>
            <input
              style={{ width: "30px", height: "20px" }}
              type="checkbox"
              onChange={handleinputchange}
            />{" "}
            <label style={{ fontSize: "25px", marginTop: "-10px" }}>
              Wednesday
            </label>
            <span style={{ marginLeft: "30%" }}>Unavailable</span>
          </div>
          <hr style={{ marginTop: "15px" }} />
          <div className={styles.inputdiv}>
            <input
              style={{ width: "30px", height: "20px" }}
              type="checkbox"
              onChange={handleinputchange}
            />{" "}
            <label style={{ fontSize: "25px", marginTop: "-10px" }}>
              Thursday
            </label>
            <span style={{ marginLeft: "30%" }}>Unavailable</span>
          </div>
          <hr style={{ marginTop: "15px" }} />
          <div className={styles.inputdiv}>
            <input
              style={{ width: "30px", height: "20px" }}
              type="checkbox"
              onChange={handleinputchange}
            />{" "}
            <label style={{ fontSize: "25px", marginTop: "-10px" }}>
              Firday
            </label>
            <span style={{ marginLeft: "30%" }}>Unavailable</span>
          </div>
          <hr style={{ marginTop: "15px" }} />
          <div className={styles.inputdiv}>
            <input
              style={{ width: "30px", height: "20px" }}
              type="checkbox"
              onChange={handleinputchange}
            />{" "}
            <label style={{ fontSize: "25px", marginTop: "-10px" }}>
              Saturday
            </label>
            <span style={{ marginLeft: "30%" }}>Unavailable</span>
          </div>
          <hr style={{ marginTop: "15px" }} />
          <div className={styles.inputdiv}>
            <input
              style={{ width: "30px", height: "20px" }}
              type="checkbox"
              onChange={handleinputchange}
            />{" "}
            <label style={{ fontSize: "25px", marginTop: "-10px" }}>
              sunday
            </label>
            <span style={{ marginLeft: "30%" }}>Unavailable</span>
          </div>
          <hr style={{ marginTop: "15px" }} />
        </div>
        <div className={styles.blockdate}>
         <h3> Block Date</h3>
          <h5>Add dates when you will be unavailable to take calls</h5>
          <button
            className={styles.btn18}
            onClick={() => {
              <Calenderdata />;
            }}
          >
            Add unavailable date
          </button>
        </div>
      </div>
    </div>
  );
}

export default Availability;
// import { useState } from "react";

export const Calenderdata = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};
