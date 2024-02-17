import React, { useState } from "react";
import { MdGroups } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./IconSidebar.css";
import { iconSidebarMainu } from "./IconSidebarConfig";
import logo from '../../Image/Logo/logo.png';

const IconSidebar = () => {

    const[activeTab, setActiveTab] = useState();

    const navigate = useNavigate();

    const handleTabClick=(title) =>{

        setActiveTab(title)
        if(title === "Layer"){
            navigate("/");
        }
        else if(title === "Message"){
            navigate("/");
        }
        else if(title === "Notification"){
            navigate("/");
        }
        else if(title === "Phone"){
            navigate("/");
        }
        else if(title === "Help"){
            navigate("/");
        }
    }

    return (
        <div className="sticky flex flex-col top-0  IconSidebar sidebarOne">
            <div className="upIcon">
                <div className="logoBox">
                    <a href="/">
                        <img className=" logo" src={logo} alt="" />
                    </a>
                </div>

                <div className="service text-70">
                    <span className="serviceSpan"> Services  </span>
                </div>

                <div className="groupIcon" >
                    < MdGroups className="text-4xl mt-3"  ></MdGroups>
                </div>
            </div>

            <div className="downIcon">
                <div className="icons">

                    {iconSidebarMainu.map((item) => <div onClick={() => handleTabClick(item.title)}  className="iconDiv ">

                    {activeTab === item.title? item.activeIcon:item.icon}

                    </div>
                    )}
                </div>

                <div>

                    <img className="icon rounded-full h-7 w-7" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="" />

                </div>
            </div>
        </div>
    )
}

export default IconSidebar;