import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ChatPage from "./pages/ChatPage";

const App = () => {
    return (
		<div className="min-h-screen bg-light-gray pb-[100px]">
			<Navbar />
            <Routes>
                <Route path="/" element={<ChatPage />} />
            </Routes>
        </div>
    );
};

export default App;
