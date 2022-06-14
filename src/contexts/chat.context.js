import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./auth.context";
import { useSocket } from "./socket.context";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
    const [chats, setChats] = useState([]);
    const [messages, setMesages] = useState([]);

    const { socket, usersConnected } = useSocket();
    const { user } = useAuth();

    const sendMessage = (message) => {
        // Save to Db

        // Emit

        // Update messages
        setMesages((prev) => [...prev, message]);
	};
	
	useEffect(() => {
	  setChats(usersConnected)
	}, [usersConnected])
	

    console.log({chats});

    return (
        <ChatContext.Provider value={{ messages, chats, sendMessage }}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => useContext(ChatContext);

export default ChatProvider;
