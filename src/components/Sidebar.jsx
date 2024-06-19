import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Context } from "../context/Context";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const { prevPrompt, onSend, setRecentPrompt, newChat } = useContext(Context);
  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSend(prompt);
  };

  return (
    <div className="min-h-screen inline-flex flex-col justify-between bg-slate-200 sidebar p-4  font-display rounded-lg">
      <div >
        <img
          onClick={() => setOpen((prev) => !prev)}
          src={assets.menu_icon}
          alt="Menu Icon"
          className="pt-4 cursor-pointer"
        />
        {open && <div
          onClick={() => newChat()}
          className="mt-10 inline-flex items-center gap-2 p-2 px-3 bg-slate-100 rounded-[50px] text-sm text-gray-500 cursor-pointer "
        >
          <img src={assets.plus_icon} alt="Plus Icon" />
           <p>New Chat</p>
        </div> } 
        {open && (
          <div className="flex flex-col mt-5">
            <p className="mb-2 text-gray-700">Recent</p>
            {prevPrompt.length > 0 ? (
              prevPrompt.map((item, index) => (
                <div
                  key={index}
                  onClick={() => loadPrompt(item)}
                  className="sidebar-item"
                >
                  <img src={assets.message_icon} alt="Message Icon" />
                  <p>{item.slice(0, 15)} ...</p>
                </div>
              ))
            ) : (
              <div className="flex justify-center">
                <p className="text-gray-600">Empty</p>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="flex flex-col mt-5">
        <div className="sidebar-item">
          <img src={assets.question_icon} alt="Help Icon" />
          {open && <p>Help</p>}
        </div>
        <div className="sidebar-item">
          <img src={assets.history_icon} alt="Activity Icon" />
          {open && <p>Activity</p>}
        </div>
        <div className="sidebar-item">
          <img src={assets.setting_icon} alt="Settings Icon" />
          {open && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
