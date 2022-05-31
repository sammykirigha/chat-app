import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const ChatHeader = () => {
    return (
        <div className="flex justify-between my-5">
            {/* Search */}
            <div className="bg-white p-4 min-w-[35%] rounded-full flex items-center">
                <IoSearchOutline className="text-xl" />
                <input
                    type="text"
                    placeholder="SEARCH"
                    className="bg-transparent placeholder:font-bold placeholder:tracking-wider flex-1 w-full focus:outline-none px-2"
                />
            </div>

            <div className="flex items-center gap-4">
                <div className="bg-white p-3 px-8 text-lg uppercase rounded-full cursor-pointer flex items-center">
                    Clear Chat
				</div>
				<div className="bg-white p-3 px-8 text-lg uppercase rounded-full cursor-pointer flex items-center">
                    More
                </div>
            </div>
        </div>
    );
};

export default ChatHeader;
