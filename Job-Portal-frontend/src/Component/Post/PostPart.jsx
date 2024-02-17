import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PostPart.css";

const PostPart = () =>{

    const [activeTab, setActiveTab] = useState("");

    const tabs = [
        {
            tab: "OVERVIEW"
        },
        {
            tab: "OPEN MANDATES"
        },
        {
            tab: "FEEDS"
        }
    ]

    const navigate = useNavigate("/openmandates");

    const handleTabClick=(tab) =>{

        setActiveTab(tab)
        if(tab === "OVERVIEW"){
            navigate("/overview");
        }
        else if(tab === "OPEN MANDATES"){
            navigate("/openmandates");
        }
        else if(tab === "FEEDS"){
            navigate("/feeds");
        }
        
    }

    return (
        <div className="">
            <div className="flex mt-10  pl-4   relative ">
                {tabs.map((item)=>
                    <div onClick={() => handleTabClick(item.tab)} className={`${activeTab===item.tab?"activetab":"opacity-60"} flex items-center p-3 tabHover  cursor-pointer py-2 text-sm`}>
                        <p>{item.tab}</p>
                    </div>
                )}
            </div>

            <div>
                
            </div>


        </div>
    )
}

export default PostPart;