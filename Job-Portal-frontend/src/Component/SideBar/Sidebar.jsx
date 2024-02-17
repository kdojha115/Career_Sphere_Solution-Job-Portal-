import React, { useState } from "react";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaCamera } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { HiClipboardList } from "react-icons/hi";
import { LuClipboardList } from "react-icons/lu";
import { MdAccountCircle, MdCurrencyRupee } from "react-icons/md";
import AccountsPage from "../../Pages/AccountsPage/AccountsPage";
import HomePage from "../../Pages/HomePage/HomePage";
import ProfilePage from "../../Pages/ProfilePage/ProfilePage";
import ReportsPage from "../../Pages/ReportsPage/ReportsPage";
import "./Sidebar.css";

const Sidebar = () => {
    const list = [
        {
        title: "Home",
        activeIcon: <AiFillHome className="text-2xl mr-5"></AiFillHome>,
        icon: <AiOutlineHome className="text-2xl mr-5"></AiOutlineHome>,
        },

        {
        title: "Profile",
        activeIcon: <MdAccountCircle className="text-2xl mr-5"></MdAccountCircle>,
        icon: <CgProfile className="text-2xl mr-5"> </CgProfile>,
        },

        {
        title: "Accounts",
        activeIcon: (
            <FaIndianRupeeSign className="text-2xl mr-5"></FaIndianRupeeSign>
        ),
        icon: <MdCurrencyRupee className="text-2xl mr-5"></MdCurrencyRupee>,
        },

        {
        title: "Reports",
        icon: <LuClipboardList className="text-2xl mr-5"></LuClipboardList>,
        activeIcon: <HiClipboardList className="text-2xl mr-5"></HiClipboardList>,
        },
    ];

    const [activeTab, setActiveTab] = useState("Home");

    // const navigate = useNavigate();

    const handleClick = (title) => {
        setActiveTab(title);
    };

    return (
        <div className=" h-[100vh] w-full flex flex-row">
            <div className="sticky w-[15%] top-0 pt-12 pl-5">
                <div className="profilePart ">
                <div className="profilePic ">
                    <img
                    className=" rounded-full h-12 w-12"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                    alt=""
                    />
                    <label htmlFor="file-upload" className="">
                    <div className="profileCamera h-5 w-5 rounded-full">
                        <FaCamera className="p-[3px]" />
                    </div>
                    </label>
                    <input
                    className="fileInput"
                    type="file"
                    id="file-upload"
                    accept="image/*, video/*"
                    />
                </div>

                <div className="profileDetails">
                    <div className="profileEdit">
                    <div>
                        <span className="name">Admin</span>
                    </div>

                    <div className=" editIcon">
                        <BiSolidEdit />
                    </div>
                    </div>
                    <div>
                    <span className="userAccount opacity-70 "></span>
                    </div>
                </div>
                </div>

                <div className="secondPart">
                {list.map((item) => (
                    <div
                    onClick={() => handleClick(item.title)}
                    className="sidebaricons"
                    >
                    {activeTab === item.title ? item.activeIcon : item.icon}
                    <p
                        className={`${
                        activeTab === item.title ? "font-bold" : "font-semibold"
                        }`}
                    >
                        {item.title}
                    </p>
                    </div>
                ))}
                </div>
            </div>
            <div className="w-[85%] page">
                <div onClick={() => handleClick("Home")}>
                {activeTab === "Home" && <HomePage />}
                </div>
                <div onClick={() => handleClick("Profile")}>
                {activeTab === "Profile" && <ProfilePage />}
                </div>
                <div onClick={() => handleClick("Accounts")}>
                {activeTab === "Accounts" && <AccountsPage />}
                </div>
                <div onClick={() => handleClick("Reports")}>
                {activeTab === "Reports" && <ReportsPage />}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
