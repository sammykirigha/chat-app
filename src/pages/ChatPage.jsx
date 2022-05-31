import React from "react";
import ChatHeader from "../components/ChatHeader";
import ChatMessages from "../components/ChatMessages";
import ChatUsers from "../components/ChatUsers";

const ChatPage = () => {
    return (
        <div className="container">
			<ChatHeader />
			
			<div className="flex gap-5 min-h-[500px]">
				{/* Chat Users */}
				<ChatUsers />

				{/* Chat messages */}
				<ChatMessages />
				
			</div>
        </div>
    );
};

export default ChatPage;
