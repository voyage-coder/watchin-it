import React, { useState, useRef, useEffect } from "react";
import { Search, Bell, Plus, Menu, X } from "lucide-react";
import { FaBookmark, FaHistory, FaCog } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";

export default function NavBar() {

  const [mobileSearch, setMobileSearch] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);

  const profileRef = useRef(null);

  const navItems = ["Home","Announcements","Communities","Chat"];

  /* close profile menu when clicking outside */

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

        {/* LOGO */}
        <div className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">
          WATCHIN IT
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex gap-2">
          {navItems.map((item)=>(
            <button
              key={item}
              className="
              px-4 py-2
              rounded-full
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

          <button className="px-3 py-2 hover:bg-[#1f2a44]">
            <Search size={18}/>
          </button>

        </div>

      </div>


      {/* RIGHT */}
      <div className="flex items-center gap-2 sm:gap-3">

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={()=>setMobileMenu(!mobileMenu)}
          className="lg:hidden p-2 rounded-full hover:bg-[#1f2a44]"
        >
          <Menu size={20}/>
        </button>

        {/* MOBILE MENU DROPDOWN */}
        {mobileMenu && (
          <div
            className="
            absolute top-16 left-4
            bg-[#0b1228]
            border border-[#1f2a44]
            rounded-xl
            shadow-xl
            flex flex-col
            w-[200px]
            overflow-hidden
            "
          >
            {navItems.map((item)=>(
              <button
                key={item}
                className="
                px-4 py-3
                text-left
                hover:bg-[#1f2a44]
                "
              >
                {item}
              </button>
            ))}
          </div>
        )}

        {/* MOBILE SEARCH */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-[#1f2a44]"
          onClick={()=>setMobileSearch(true)}
        >
          <Search size={20}/>
        </button>


        {/* CREATE */}
        <button className="p-2 rounded-full hover:bg-[#1f2a44]">
          <Plus size={20}/>
        </button>


        {/* NOTIFICATIONS */}
        <div className="relative">
          <button className="p-2 rounded-full hover:bg-[#1f2a44]">
            <Bell size={20}/>
          </button>

          <span
            className="
            absolute -top-1 -right-1
            bg-red-500
            text-xs
            px-1.5
            rounded-full
            "
          >
            6
          </span>
        </div>


        {/* PROFILE */}
        <div className="relative" ref={profileRef}>

          <img
            src="https://i.pravatar.cc/150?u=19"
            className="w-8 h-8 rounded-full cursor-pointer"
            onClick={()=>setProfileMenu(!profileMenu)}
          />

          {/* PROFILE DROPDOWN */}
          {profileMenu && (
            <div
              className="
              absolute right-0 mt-3
              w-[220px]
              bg-[#0b1228]
              border border-[#1f2a44]
              rounded-xl
              shadow-xl
              overflow-hidden
              "
            >

              <div className="px-4 py-3 border-b border-[#1f2a44]">
                <p className="font-bold">Prem Sai</p>
                <p className="text-xs opacity-70">prem@watchinit.com</p>
              </div>

              <button className="flex items-center gap-3 px-4 py-3 hover:bg-[#1f2a44] w-full">
                <FaBookmark/> Bookmarks
              </button>

              <button className="flex items-center gap-3 px-4 py-3 hover:bg-[#1f2a44] w-full">
                <MdVideoLibrary/> Studio
              </button>

              <button className="flex items-center gap-3 px-4 py-3 hover:bg-[#1f2a44] w-full">
                <FaHistory/> History
              </button>

              <button className="flex items-center gap-3 px-4 py-3 hover:bg-[#1f2a44] w-full">
                <FaCog/> Settings
              </button>

              <div className="border-t border-[#1f2a44]"></div>

              <button className="px-4 py-3 text-red-500 hover:bg-[#1f2a44] w-full text-left">
                Sign out
              </button>

            </div>
          )}

        </div>

      </div>


      {/* MOBILE SEARCH OVERLAY */}
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
              className="px-3 py-2 text-white"
            >
              <X size={20}/>
            </button>

          </div>

        </div>

      )}

    </div>
  );
}