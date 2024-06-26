import React, { useContext, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { Context } from "../context/Context";
import Typed from "typed.js";

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

  const {
    onSend,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const el = useRef(null);

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: [resultData],
        typeSpeed: 5,
        backSpeed: 10,
        backDelay: 500,
        startDelay: 100,
        smartBackspace: true,
        showCursor: false,
        autoInsertCss: true,
        contentType: "html",
      });

      return () => {
        typed.destroy();
      };
    }
  }, [resultData]);

  return (
    <main className="w-full min-h-screen pb-4  font-display relative ">
      <nav className="flex items-center justify-between text-lg p-5 text-gray-500">
        <p>Gemini</p>
        <img
          src={assets.user_icon}
          alt="user icon"
          className="w-10 rounded-3xl"
        />
      </nav>
      <div className="max-w-6xl m-auto px-4">
        {!showResult ? (
          <>
            <div className="my-12 text-6xl text-gray-400">
              <p>
                <span className="heading">Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-4 p-5">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="h-52 relative p-4 bg-slate-100 rounded-lg cursor-pointer hover:bg-slate-200"
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
          </>
        ) : (
          <div className="max-h-[70vh] overflow-y-scroll hide">
            <div className="mt-10 mb-5 flex items-center gap-5">
              <img
                className="w-10 rounded-full"
                src={assets.user_icon}
                alt=""
              />
              <p className="text-lg">{recentPrompt}</p>
            </div>
            <div className="flex items-start gap-5">
              <img
                className="w-10 rounded-full"
                src={assets.gemini_icon}
                alt=""
              />
              {loading ? (
                <div className="w-full flex flex-col gap-2.5">
                  <hr className="gradient-bar" />
                  <hr className="gradient-bar" />
                  <hr className="gradient-bar" />
                </div>
              ) : (
                <p className="pt-2" ref={el}></p>
              )}
            </div>
          </div>
        )}

        <div className="md:absolute max-w-6xl w-full  bottom-0 m-auto px-4">
          <div className="relative flex items-center justify-between gap-5 bg-slate-50 py-2 px-5 rounded-3xl ">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="flex-1 bg-transparent border-none outline-none p-1 text-lg"
              type="text"
              placeholder="Enter a prompt here"
            />
            <div className="absolute right-0 pr-2 flex items-center  sm:gap-4">
              <img
                className="w-6 cursor-pointer"
                src={assets.gallery_icon}
                alt="Gallery"
              />
              <img
                className="w-6 cursor-pointer"
                src={assets.mic_icon}
                alt="Mic"
              />
              <img
                src={assets.send_icon}
                alt="Send"
                onClick={() => input.length > 0 && onSend()}
                className={`w-6 cursor-pointer ${
                  input.length === 0 && "opacity-80 cursor-not-allowed"
                }`}
              />
            </div>
          </div>
          <p className="text-xs my-2 mx-auto text-center font-light">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
