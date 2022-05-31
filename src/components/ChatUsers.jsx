import React from "react";
import image from "../data/download.png";

const ChatUsers = () => {
    return (
        <div className="bg-white p-4 min-w-[35%] rounded-3xl flex flex-col gap-4 items-center pt-4">
            {[1, 2, 3, 4].map((item) => {
                return (
                        <div className="flex flex-row justify-between items-center gap-4 cursor-pointer ">
                            <div className=" w-12 h-12 bg-red-400 rounded-full flex items-center pl-1.5">
                                <img
                                    src={image}
                                    alt="logo"
                                    className="w-8 h-8 relative"
                                />
                                <span className="absolute bottom-1 right-0 h-4 w-4 bg-red-300"></span>
                            </div>
                            <div className="flex flex-col border-b border-gray-200 pb-1">
                                <h4 className="text-md text-slate-800 font-semibold tracking-wider">
                                    John Joe
                                </h4>
                                <p className="text-md text-gray-500">
                                    Hi there, how are you doing
                                </p>
                            </div>
                            <div className="ml-10 flex flex-col">
                            <span className="text-xs text-gray-400">9:45</span>
                            <span className="h-4 w-4 pt-0.5 bg-orange-300 rounded-full flex items-center pl-1 text-xs text-white">5</span>
                            </div>
                        </div>
                );
            })}
        </div>
    );
};

export default ChatUsers;
