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

import { FaBookmark, FaHistory, FaCog } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";

import { IoLogoReact} from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import SearchIcon from "@rsuite/icons/Search";
import 'rsuite/dist/rsuite.min.css';
import "../index.css";

const Brand = () => (
  <Navbar.Brand className="text-2xl font-bold" href="#">
    <IoLogoReact size={26} /> WATCHIN IT
  </Navbar.Brand>
);

const NavBar = () => {
  return (
    <Navbar appearance="inverse" style={{backgroundColor: "black", margin: "1rem 1.5rem", borderRadius: "50px", boxShadow: "0 4px 20px #380bcd", backdropFilter: "blur(5px)", WebkitBackdropFilter: "blur(5px)", border: "1px solid rgba(255, 255, 255, 0.3)"}}>

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
      <Navbar.Content>
        <InputGroup inside style={{ marginLeft: "30px", width: 300 }}>
          <Input placeholder="Search movies..." />
          <InputGroup.Addon>
            <SearchIcon />
          </InputGroup.Addon>
        </InputGroup>
      </Navbar.Content>

      {/* RIGHT SIDE */}
      <Navbar.Content pullRight>

        <Badge content={6} >
          <IconButton
            icon={<FaBell size={40} color="rgb(211, 169, 78)" />}
            circle
            appearance="subtle"
            size="lg"
          />
        </Badge>
        <div>
        <Dropdown style={{color:"red"}}
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