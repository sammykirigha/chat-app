import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBell } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className=" h-20 container flex items-center px-2 xl:px-0">
            <div className="flex justify-between items-center w-full">
                <Link to="/">Logo Here</Link>
                <div className="flex items-center gap-8">
                    <div className="flex gap-6 uppercase items-center text-sm">
                        <Link to="#">Home</Link>
                        <Link className="text-main-green border-b-2 pb-2 border-main-green" to="#">Chat</Link>
                        <Link to="#">Contact</Link>
                        <Link to="#">Settings</Link>
                        <Link to="#">Faqs</Link>
                        <Link to="#">Terms of use</Link>
                    </div>

                    <div className="icons flex items-center gap-4">
                        <div className="relative">
                            <FaSearch className="text-lg text-slate-700 cursor-pointer" />
                        </div>
                        <div className="relative">
                            <div className="relative">
                                <FaBell className="text-xl text-slate-700 cursor-pointer"  />
                                <span className="absolute block w-2 h-2 bg-main-orange top-0 right-0 rounded-full"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
