import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSend = async (prompt) => {
    await run(prompt);
  };
  onSend("what is react js");
  const contextValue = {
    prevPrompt,
    recentPrompt,
    input,
    showResult,
    loading,
    resultData,
    setPrevPrompt,
    onSend,
    setRecentPrompt,
    setInput,
    setShowResult,
    setLoading,
    setResultData,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
