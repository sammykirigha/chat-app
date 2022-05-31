import { createContext, useContext, useEffect, useState } from "react";

import io from "socket.io-client";

const SocketContext = createContext();

let socket;
const SocketProvider = ({ children }) => {
    const [socketConnected, setSocketConnected] = useState(false);

    useEffect(() => {
        if (true) {
            socket = io("http://localhost:9004");

            socket.emit("setup", 587455485748);

            socket.on("connected", () => setSocketConnected(true));
        }
    }, []);

    return (
        <SocketContext.Provider value={{ socket, socketConnected }}>
            {children}
        </SocketContext.Provider>
    );
};

export const useSocket = () => useContext(SocketContext);

export default SocketProvider;
