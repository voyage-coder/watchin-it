import React from "react";
import {
  Navbar,
  Nav,
  Avatar,
  Badge,
  IconButton,
  Input,
  InputGroup,
  Dropdown,
  Divider
} from "rsuite";
import { Search, Bell } from "lucide-react";

import { FaBookmark, FaHistory, FaCog } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";

import { IoLogoReact} from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import 'rsuite/dist/rsuite.min.css';
import "../index.css";

const Brand = () => (
  <Navbar.Brand className="text-2xl font-bold" href="#">
    <IoLogoReact size={26} /> WATCHIN IT
  </Navbar.Brand>
);

const NavBar = () => {
  return (
    <Navbar appearance="inverse" style={{backgroundColor: "black", margin: "1rem 1.5rem", borderRadius: "50px", boxShadow: "0 4px 20px #380bcd", backdropFilter: "blur(5px)", WebkitBackdropFilter: "blur(5px)", border: "1px solid rgba(255, 255, 255, 0.3)", position:"sticky", top: 0, zIndex:1000}}>

      {/* LEFT SIDE */}
      <Navbar.Content>
        <Brand />

        <Nav style={{ gap: "20px", marginLeft: "30px"}}>
            <Nav.Item className="navItem">Home</Nav.Item>
            <Nav.Item className="navItem">Movies</Nav.Item>
            <Nav.Item className="navItem">Communities</Nav.Item>
            <Nav.Item className="navItem">Chat</Nav.Item>
        </Nav>
      </Navbar.Content>

      {/* SEARCH */}
      <Navbar.Content style={{ marginLeft: "30px" }}>
        
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "380px",
            background: "#0f0f0f",
            border: "1px solid #303030",
            borderRadius: "30px",
            overflow: "hidden"
          }}
        >

          {/* input */}
          <input
            type="text"
            placeholder="Search videos..."
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              padding: "8px 14px",
              color: "white",
              fontSize: "14px"
            }}
          />

          {/* search button */}
          <button type="submit" className="search-btn"
            style={{
              background: "#2a2a2a",
              border: "none",
              padding: "8px 16px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              transition: "0.2s"
            }}
            onMouseEnter={(e)=> e.target.style.background="#3a3a3a"}
            onMouseLeave={(e)=> e.target.style.background="#2a2a2a"}
          >
            <Search size={18} color="white" />
          </button>

        </div>

      </Navbar.Content>

      {/* RIGHT SIDE */}
      <Navbar.Content pullRight>
        <Badge content={6} style={{backgroundColor:"transparent"}}>
          <div
            style={{
              background: "transparent",
              padding: "8px",
              borderRadius: "50%",
              cursor: "pointer",
              transition: "0.2s"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#3a3a3a")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#2a2a2a")}
          >
            <Bell size={20} color="white" />
          </div>
        </Badge>
        <div>
        <Dropdown style={{color:"black"}}
        placement="bottomEnd"
        renderToggle={(props, ref) => (
            <Avatar
            {...props}
            ref={ref}
            src="https://i.pravatar.cc/150?u=19"
            circle
            size="sm"
            style={{ marginLeft: "12px", cursor: "pointer" }}
            />
        )}
        >
        {/* PROFILE HEADER */}
        <div style={{ padding: "12px 16px", width: "220px", color:"white" }}>
            <div style={{ fontWeight: "bold" }}>Prem Sai</div>
            <div style={{ fontSize: "12px", opacity: 0.7 }}>
            prem@watchinit.com
            </div>
        </div>

        <Divider />

        <Dropdown.Item icon={<FaBookmark />}>
            Bookmarks
        </Dropdown.Item>

        <Dropdown.Item icon={<MdVideoLibrary />}>
            Studio
        </Dropdown.Item>

        <Dropdown.Item icon={<FaHistory />}>
            History
        </Dropdown.Item>

        <Dropdown.Item icon={<FaCog />}>
            Settings
        </Dropdown.Item>

        <Divider />

        <Dropdown.Item style={{ color: "black" }}>
            Sign out
        </Dropdown.Item>
        </Dropdown>
        </div>

      </Navbar.Content>

    </Navbar>
  );
};

export default NavBar;