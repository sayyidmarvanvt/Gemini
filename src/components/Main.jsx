import React from "react";
import { assets } from "../assets/assets";

const Main = () => {
  const cards = [
    {
      text: "Suggest beautiful places to see on an upcoming road trip",
      icon: assets.compass_icon,
    },
    {
      text: "Briefly summarize this concept: urban planning",
      icon: assets.bulb_icon,
    },
    {
      text: "Brainstorm team bonding activities for our work retreat",
      icon: assets.message_icon,
    },
    {
      text: "Improve the readability of the following code",
      icon: assets.code_icon,
    },
  ];

  return (
    <main className="flex-1 min-h-scrren pb-4 relative font-display">
      <nav className="flex items-center justify-between text-lg p-5 text-gray-500">
        <p>Gemini</p>
        <img
          src={assets.user_icon}
          alt="user icon"
          className="w-10 rounded-3xl"
        />
      </nav>
      <div className="max-w-3xl m-auto">
        <div className="my-12 text-6xl text-gray-400 p-5">
          <p>
            <span className="heading">Hello, Dev.</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="flex gap-4 p-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className="h-52 w-1/4 relative p-4 bg-slate-100 rounded-lg cursor-pointer hover:bg-slate-200"
            >
              <p className="text-gray-700">{card.text}</p>
              <img
                className="w-8 absolute p-1 bg-white rounded-3xl bottom-2.5 right-2.5"
                src={card.icon}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="absolute w-full max-w-3xl bottom-0 m-auto">
          <div className="flex items-center justify-between gap-5 bg-slate-50 py-2 px-5 rounded-3xl">
            <input className="flex-1 bg-transparent border-none outline-none p-2 text-lg" type="text" placeholder="Enter a prompt here" />
            <div className="flex items-center gap-4">
              <img
                className="w-6 cursor-pointer"
                src={assets.gallery_icon}
                alt=""
              />
              <img
                className="w-6 cursor-pointer"
                src={assets.mic_icon}
                alt=""
              />
              <img
                className="w-6 cursor-pointer"
                src={assets.send_icon}
                alt=""
              />
            </div>
          </div>
          <p className="text-xs my-2 mx-auto text-center font-light">
            Gemini may display inaccurate info, including about people,so
            double-check its responses. 
            Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
