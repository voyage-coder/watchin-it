import React, { useState } from "react";
import { Avatar, Badge, Dropdown, Divider } from "rsuite";
import { Search, Bell, Plus, Menu, X } from "lucide-react";
import { FaBookmark, FaHistory, FaCog } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import "rsuite/dist/rsuite.min.css";

export default function NavBar() {

  const [mobileSearch, setMobileSearch] = useState(false);

  const navItems = ["Home","Announcements","Communities","Chat"];

  return (
    <div
      className="
      sticky top-0 z-50
      w-full
      bg-[#0b1228]/90
      backdrop-blur-xl
      text-white
      border-b border-[#1f2a44]
      px-3 sm:px-6
      py-3
      flex items-center justify-between
      "
    >

      {/* LEFT */}
      <div className="flex items-center gap-2 sm:gap-4">

        {/* Logo */}
        <div className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">
          WATCHIN IT
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-2">

          {navItems.map((item)=>(
            <button
              key={item}
              className="
              text-white
              px-4 py-2
              rounded-full
              overflow-hidden
              transition-all duration-200
              hover:bg-[#1f2a44]
              hover:-translate-y-[2px]
              hover:shadow-md
              "
            >
              {item}
            </button>
          ))}

        </div>

      </div>


      {/* SEARCH */}
      <div className="hidden md:flex flex-1 justify-center px-4">

        <div className="flex items-center w-full max-w-[420px] bg-[#0f172a] border border-[#1f2a44] rounded-full overflow-hidden">

          <input
            placeholder="Search videos..."
            className="
            flex-1
            bg-transparent
            outline-none
            px-4
            py-2
            text-white
            text-sm
            placeholder-gray-400
            "
          />

          <button className="px-3 py-2 rounded-full hover:bg-[#1f2a44] transition">
            <Search size={18}/>
          </button>

        </div>

      </div>


      {/* RIGHT */}
      <div className="flex items-center gap-2 sm:gap-3">

        {/* Mobile Menu */}
        <Dropdown
          placement="bottomStart"
          renderToggle={(props, ref)=>(
            <button
              {...props}
              ref={ref}
              className="lg:hidden p-2 rounded-full hover:bg-[#1f2a44] transition"
            >
              <Menu size={20}/>
            </button>
          )}
        >
          {navItems.map((item)=>(
            <Dropdown.Item key={item}>
              {item}
            </Dropdown.Item>
          ))}
        </Dropdown>


        {/* Mobile Search */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-[#1f2a44] transition"
          onClick={()=>setMobileSearch(true)}
        >
          <Search size={20}/>
        </button>


        {/* Create */}
        <button className="p-2 rounded-full hover:bg-[#1f2a44] transition">
          <Plus size={20}/>
        </button>


        {/* Notifications */}
        <Badge content={6}>
          <button className="p-2 rounded-full hover:bg-[#1f2a44] transition">
            <Bell size={20}/>
          </button>
        </Badge>


        {/* Profile */}
        <Dropdown
          placement="bottomEnd"
          renderToggle={(props, ref)=>(
            <Avatar
              {...props}
              ref={ref}
              src="https://i.pravatar.cc/150?u=19"
              circle
              size="sm"
              className="cursor-pointer"
            />
          )}
        >

          <div className="px-3 py-2 bg-[#0b1228]/90 w-[220px] text-white">
            <p className="font-bold">Prem Sai</p>
            <p className="text-xs opacity-70">prem@watchinit.com</p>
          </div>

          <Divider/>

          <Dropdown.Item icon={<FaBookmark/>}>
            Bookmarks
          </Dropdown.Item>

          <Dropdown.Item icon={<MdVideoLibrary/>}>
            Studio
          </Dropdown.Item>

          <Dropdown.Item icon={<FaHistory/>}>
            History
          </Dropdown.Item>

          <Dropdown.Item icon={<FaCog/>}>
            Settings
          </Dropdown.Item>

          <Divider/>

          <Dropdown.Item className="text-red-500">
            Sign out
          </Dropdown.Item>

        </Dropdown>

      </div>


      {/* MOBILE SEARCH */}
      {mobileSearch && (

        <div className="fixed inset-0 bg-[#020617] flex items-start p-4 z-50">

          <div className="flex items-center w-full bg-[#0f172a] border border-[#1f2a44] rounded-full overflow-hidden">

            <input
              autoFocus
              placeholder="Search videos..."
              className="flex-1 bg-transparent outline-none px-4 py-2 text-white"
            />

            <button
              onClick={()=>setMobileSearch(false)}
              className="px-3 py-2"
            >
              <X size={20}/>
            </button>

          </div>

        </div>

      )}

    </div>
  );
}