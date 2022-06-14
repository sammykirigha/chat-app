import { createContext, useContext, useEffect, useState } from "react";

import io from "socket.io-client";
import { useAuth } from "./auth.context";

const SocketContext = createContext();

let socket;
const SocketProvider = ({ children }) => {
    const [socketConnected, setSocketConnected] = useState(false);
    const [usersConnected, setUsersConnected] = useState([]);

    const { user } = useAuth();

    useEffect(() => {
        if (user?.id) {
            socket = io("http://localhost:9004");

            socket.emit("setup", { ...user, latest: "" });

            socket.on("connected", (user) => {
                setSocketConnected(true);
                setUsersConnected(user);
            });
        }
    }, [user]);

    return (
        <SocketContext.Provider
            value={{ socket, socketConnected, usersConnected }}
        >
            {children}
        </SocketContext.Provider>
    );
};

export const useSocket = () => useContext(SocketContext);

export default SocketProvider;
