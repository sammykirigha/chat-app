import React from "react";
import { useChat } from "../contexts/chat.context";
import image from "../data/download.png";

const ChatUsers = () => {
    const { chats, setSelectedChat } = useChat();

    return (
        <div className="bg-white p-4 min-w-[35%] rounded-3xl flex flex-col gap-4 max-h-[600px] overflow-y-auto">
            {chats?.map((chat) => {
                return (
                    <div
                        onClick={() => setSelectedChat(chat)}
                        key={chat.id}
                        className="flex flex-row justify-betwee items-center gap-4 cursor-pointer "
                    >
                        <div className=" w-12 h-12 relative rounded-full flex items-center pl-1.5">
                            <img
                                src={image}
                                alt="logo"
                                className="w-8 h-8 relative"
                            />
                            <span className="absolute bottom-1 rounded-full right-0 h-3 w-3 bg-red-300"></span>
                        </div>
                        <div className="flex flex-col flex-1 border-b border-gray-200 pb-1">
                            <h4 className="text-md text-slate-800 font-semibold tracking-wider">
                                {chat.name}
                            </h4>
                            <p className="text-sm text-gray-500">
                                {chat.latest}
                            </p>
                        </div>
                        <div className="flex flex-col ml-6">
                            <span className="text-xs text-gray-400">9:45</span>
                            <span className="h-4 w-4 pt-0.5 bg-orange-300 rounded-full flex items-center pl-1 text-xs text-white">
                                5
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ChatUsers;
