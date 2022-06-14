import React from "react";

import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import {  MdAttachFile, MdSend } from "react-icons/md";
const ChatMessages = () => {
    return (
        <div className="bg-white p-4 flex-1 rounded-3xl flex flex-col max-h-[600px] gap-5">
            <div className="flex bg-slate-500 w-full flex-1 p-5"></div>
            <div className="flex items-center gap-2">
                <div className="bg-main-purple text-xl flex items-center p-2 rounded-full">
                    <BsFillEmojiHeartEyesFill className="text-main-orange" />
                </div>
                <div className="bg-main-purple text-xl flex items-center p-2 rounded-full">
                    <MdAttachFile className="text-main-orange" />
                </div>
                <div className="input flex-1 border rounded-full">
                    <input type="text" className="w-full py-2 focus:outline-none px-3 bg-transparent" />
                </div>
                <div className="bg-main-purple text-xl flex items-center p-2 rounded-full">
                    <MdSend className="-rotate-45 text-white" />
                </div>
            </div>
        </div>
    );
};

export default ChatMessages;
