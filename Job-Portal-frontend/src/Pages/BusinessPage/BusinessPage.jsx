import React from "react";
import IconSidebar from "../../Component/IconSidebar/IconSidebar";
import Sidebar from "../../Component/SideBar/Sidebar";

const BusinessPage = () => {
    return (
        <div className="flex flex-row">
            <div className="flex flex-row w-[4%]">

                <IconSidebar />

            </div>

            <div className="w-[96%]">

                <Sidebar />

            </div>
        </div>
    );
};

export default BusinessPage;
