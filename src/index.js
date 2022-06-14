import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SocketProvider from "./contexts/socket.context";
import { BrowserRouter } from "react-router-dom";
import ChatProvider from "./contexts/chat.context";
import AuthProvider from "./contexts/auth.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <SocketProvider>
                    <ChatProvider>
                        <App />
                    </ChatProvider>
                </SocketProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);
