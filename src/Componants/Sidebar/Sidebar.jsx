import {
    AttachMoney,
    ChatBubbleOutline,
    Equalizer,
    FeedbackOutlined,
  LineStyle,
  MailOutlineOutlined,
  PersonOutline,
  Report,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@material-ui/icons";
import { Analytics, ProductionQuantityLimits } from "@mui/icons-material";
import "./Sidebar.css";
import React from "react";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="sidebarwraper">
        <div className="sidebarmenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle />
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PersonOutline />
              User
            </li>
            <li className="sidebarListItem">
              <ProductionQuantityLimits />
              Products
            </li>
            <li className="sidebarListItem">
              <AttachMoney />
              Transactions
            </li>
            <li className="sidebarListItem">
              <Equalizer />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebarTitle">Notification</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutlineOutlined />
              Mail
            </li>
            <li className="sidebarListItem">
              <FeedbackOutlined />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarListItem" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebaricon" />
              Repor
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
