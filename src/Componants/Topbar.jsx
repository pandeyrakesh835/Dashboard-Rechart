import React from "react";
import "./Topbar.css";
import ToggleButton from "@mui/material/ToggleButton";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Language, Settings } from "@material-ui/icons";
// import {EditNotificationsOutlinedIcon} from '@mui/icons-material';

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbartopbar">
        <div className="topLeft">
          <span className="logo">lamaadmin</span>
        </div>
        <div className="topRight">
          <div className="topbatIconContainer">
            <NotificationsNoneIcon />
            <span className="topIconBadge "> 2 </span>
          </div>
          <div className="topbatIconContainer">
            <Language />
            <span className="topIconBadge "> 2 </span>
          </div>
          <div className="topbatIconContainer">
            <Settings />
           
          </div>
          <img src='https://image.shutterstock.com/image-photo/man-metal-detector-on-sea-260nw-1654688977.jpg' className='img'/>
        </div>
      </div>
    </div>
  );
}
export default Topbar;
