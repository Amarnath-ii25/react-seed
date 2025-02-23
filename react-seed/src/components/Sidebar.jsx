import React, { useState } from "react";
import { GoHome, GoPeople } from "react-icons/go";
import { LuCalendarDays, LuFilePen, LuPrinter } from "react-icons/lu";
import { PiChatsCircle } from "react-icons/pi";
import { TiFolderDelete } from "react-icons/ti";
import { IoSchoolOutline } from "react-icons/io5";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { FlaskConical } from "lucide-react";
import { BsWindowDesktop } from "react-icons/bs";
import { RiBuildingLine } from "react-icons/ri";
import { TfiAnnouncement } from "react-icons/tfi";

import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null); 

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <div
      className={`h-screen bg-white border-r p-3 flex flex-col items-center transition-all duration-300 ${
        collapsed ? "lg:w-16 w-12" : "lg:w-20 w-10"
      }`}
    >
     
      <div className="flex items-center justify-center w-full mb-6">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-500 focus:outline-none"
        >
          {collapsed ? <FiChevronsRight size={22} /> : <FiChevronsLeft size={22} />}
        </button>
      </div>

      {/* Main Section */}
      <p className="text-gray-500 text-sm">Main</p>
      <div>
        <SidebarIcon Icon={GoHome} isActive={activeIcon === "home"} onClick={() => handleIconClick("home")} />
        <SidebarIcon Icon={GoPeople} isActive={activeIcon === "friends"} onClick={() => handleIconClick("friends")} />
        <SidebarIcon Icon={LuCalendarDays} isActive={activeIcon === "calendar"} onClick={() => handleIconClick("calendar")} />
        <SidebarIcon Icon={PiChatsCircle} isActive={activeIcon === "comments"} onClick={() => handleIconClick("comments")} />
        <SidebarIcon Icon={TiFolderDelete} isActive={activeIcon === "folder"} onClick={() => handleIconClick("folder")} />
        <SidebarIcon Icon={LuFilePen} isActive={activeIcon === "file"} onClick={() => handleIconClick("file")} />
        <SidebarIcon Icon={IoSchoolOutline} isActive={activeIcon === "graduation"} onClick={() => handleIconClick("graduation")} />
      </div>
      <p className="text-gray-500 lg:text-sm text-[0%] mt-3">Manage</p>
      <div >
      <SidebarIcon Icon={HiOutlineDocumentText} isActive={activeIcon === "clipboard"} onClick={() => handleIconClick("clipboard")} />
        <SidebarIcon Icon={FlaskConical} isActive={activeIcon === "server"} onClick={() => handleIconClick("server")} />
        <SidebarIcon Icon={BsWindowDesktop} isActive={activeIcon === "car"} onClick={() => handleIconClick("car")} />
        <SidebarIcon Icon={RiBuildingLine} isActive={activeIcon === "car"} onClick={() => handleIconClick("car")} />
        <SidebarIcon Icon={LuPrinter} isActive={activeIcon === "car"} onClick={() => handleIconClick("car")} />
        <SidebarIcon Icon={TfiAnnouncement} isActive={activeIcon === "car"} onClick={() => handleIconClick("car")} />
      </div>

     
    </div>
  );
};


const SidebarIcon = ({ Icon, isActive, onClick }) => (
  <div
    className={`flex justify-center items-center p-3 rounded-lg cursor-pointer transition-all ${
      isActive ? "text-blue-500 bg-blue-100" : "text-gray-500 hover:bg-gray-100"
    }`}
    onClick={onClick}
  >
    <Icon size={24} />
  </div>
);

export default Sidebar;
