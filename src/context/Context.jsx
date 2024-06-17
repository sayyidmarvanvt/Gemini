import { createContext, useState } from "react";
import run from "../config/gemini";
import { marked } from "marked";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSend = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;
    if (prompt !== undefined) {
      response = await run(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrevPrompt((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await run(input);
    }
    let newResponse = marked(response);
    setResultData(newResponse);
    setLoading(false);
    setInput("");
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const contextValue = {
    prevPrompt,
    recentPrompt,
    input,
    showResult,
    loading,
    resultData,
    onSend,
    newChat,
    setPrevPrompt,
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
