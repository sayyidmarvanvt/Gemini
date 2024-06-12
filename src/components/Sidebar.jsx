import React, { useState } from "react";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen inline-flex flex-col justify-between bg-slate-200 sidebar p-4 font-display rounded-lg">
      <div>
        <img
          onClick={() => setOpen((prev) => !prev)}
          src={assets.menu_icon}
          alt="Menu Icon"
          className="ml-3 cursor-pointer"
        />
        <div className="mt-14 inline-flex items-center gap-2 p-2 px-3 bg-slate-100 rounded-[50px] text-sm text-gray-500 cursor-pointer">
          <img src={assets.plus_icon} alt="Plus Icon" />
          {open && <p>New Chat</p>}
        </div>
        {open && (
          <div className="flex flex-col mt-5">
            <p className="mb-2 text-gray-700">Recent</p>
            <div className="flex items-center gap-2 p-2 rounded-[50px] text-gray-900 hover:bg-slate-200 cursor-pointer">
              <img src={assets.message_icon} alt="Message Icon" />
              <p>What is react ...</p>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col mt-5">
        <div className="flex items-center gap-2 p-2 rounded-[50px] text-gray-900 hover:bg-slate-200 cursor-pointer">
          <img src={assets.question_icon} alt="Help Icon" />
          {open && <p>Help</p>}
        </div>
        <div className="flex items-center gap-2 p-2 rounded-[50px] text-gray-900 hover:bg-slate-200 cursor-pointer">
          <img src={assets.history_icon} alt="Activity Icon" />
          {open && <p>Activity</p>}
        </div>
        <div className="flex items-center gap-2 p-2 rounded-[50px] text-gray-900 hover:bg-slate-200 cursor-pointer">
          <img src={assets.setting_icon} alt="Settings Icon" />
          {open && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
