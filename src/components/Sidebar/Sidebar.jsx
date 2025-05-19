import React, { useState } from "react";
import { assets } from "@/assets/assets";


const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className="sidebar font-outfit min-h-screen py-6 px-4 inline-flex flex-col justify-between bg-gray-200 ">
      <div className="top">
        <img
          onClick={()=>setExtended(prev=>!prev)}
          className="menu w-8 block ml-2 cursor-pointer"
          src={assets.menu_icon}
          alt=""
        />
        <div className="new-chat mt-14 inline-flex items-center gap-2.5 py-5 px-3.5 bg-gray-300 rounded-4xl text-sm text-gray-500 cursor-pointer">
          <img className="plus w-8" src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent flex flex-col">
            <p className="recent-title mt-8 mb-5 ">Recent</p>
            <div className="recent-entry flex items-start gap-2.5 p-2.5 pr-10 text-lg rounded-xl text-zinc-800 cursor-pointer hover:bg-blue-200">
              <img className="message w-10" src={assets.message_icon} alt="" />
              <p className="mt-1">What is React ...</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-4 items-start text-gray-500 text-2xl">
        <div className="bottom-item recent-entry inline-flex hover:bg-blue-200 rounded-2xl cursor-pointer">
          <img className="question w-10" src={assets.question_icon} alt="" />
          {extended ?<p className="ml-2 mt-1">Help</p>:null}
        </div>
        <div className="bottom-item recent-entry inline-flex  hover:bg-blue-200 rounded-2xl cursor-pointer">
          <img className="history w-10" src={assets.history_icon} alt="" />
          {extended?<p className="ml-2 mt-1">Activity</p>:null}
        </div>
        <div className="bottom-item recent-entry  inline-flex hover:bg-blue-200 rounded-2xl cursor-pointer">
          <img className="setting w-10" src={assets.setting_icon} alt="" />
          {extended?<p className="ml-2 mt-1">Settings</p>:null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
