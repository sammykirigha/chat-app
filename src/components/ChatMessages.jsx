import React from "react";
import image from "../data/download.png";

const ChatMessages = () => {
    return (
        <div className="bg-white p-4 flex-1 rounded-3xl flex flex-col max-h-[600px] gap-5">
            <div className="flex bg-slate-500 w-full flex-1 p-5"></div>
            <div className="border p-5"></div>
        </div>
    );
};

export default ChatMessages;
