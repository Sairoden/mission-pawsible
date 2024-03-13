// REACT & LIBRARIES
import { useState } from "react";
import { useContext, createContext } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chatConnection, setChatConnection] = useState();
  const [connected, setConnected] = useState(false);

  const handleChatConnection = userData => {
    setChatConnection(userData);
    setConnected(true);
  };

  const value = {
    chatConnection,
    handleChatConnection,
    connected,
    setConnected,
  };
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChatContext = () => useContext(ChatContext);
