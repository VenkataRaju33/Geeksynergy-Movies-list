import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Popover } from "@material-ui/core";
import "./Header.css";
function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="main-div">
      <Button className="descr-btn" variant="contained" onClick={handleClick}>
        Company info
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography className="description">
          <b>Company</b>: Geeksynergy Technology Pvt Ltd. <br />
          <b>Address:</b> SanjayNagar Banglore <br />
          <b>Phone:</b> xxxxxxx09 <br />
          <b>Email:</b> xxxxx @gmail.com
        </Typography>
      </Popover>
    </div>
  );
}

export default Header;
