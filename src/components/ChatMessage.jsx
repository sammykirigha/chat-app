import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { MdOutlineAvTimer } from "react-icons/md";
const ChatMessage = ({ index }) => {
    return (
        <div
            className={`flex flex-row ml-3 ${
                index % 2 === 0 && "justify-start flex-row-reverse mr-2 gap-2"
            }`}
        >
            <div className=" mt-6 relative h-8 w-8 bg-blue-100 flex items-center justify-center rounded-full ">
                {index % 2 !== 0 && (
                    <span className="absolute -top-2 -right-2">
                        <GoPrimitiveDot className="text-green-700 h-6 w-6 " />{" "}
                    </span>
                )}
            </div>
            <div className="bg-white flex flex-col mt-5 ml-2 max-w-[60%]">
                <h6 className="text-gray-400 border border-gray-300 mt-3 pt-1 pl-1 rounded-md">
                    Nice to meet you Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. m ipsum dolor sit, amet consectetur
                    adipisicing elit.
                </h6>
                <div className="flex flex-row items-center">
                    <MdOutlineAvTimer className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-500">42 min ago</span>
                </div>
            </div>
        </div>
    );
};

export default ChatMessage;
