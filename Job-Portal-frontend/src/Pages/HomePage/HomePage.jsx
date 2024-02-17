import React, { useState } from "react";
import Search from "../../Component/Search/Search";
import Feeds from "../../Component/Tabs/Feeds/Feeds";
import OpenMandates from "../../Component/Tabs/OpenMandates/OpenMandates";
import Overview from "../../Component/Tabs/Overview/Overview";
import "./HomePage.css";

const HomePage = () => {

    const [activeTab, setActiveTab] = useState(2);

    // const navigate = useNavigate();

    const handleTabClick=(tab) =>{

        setActiveTab(tab);
        // if(tab === 1){
        //     navigate("/overview");
        // }
        // else if(tab === 2){
        //     navigate("/");
        // }
        // else if(tab === 3){
        //     navigate("/feeds");
        // }
        
    }

    return (
        <div className="flex flex-row w-full h-full">
            <div className="w-[66%] homepage">
                <div className=" mt-10  pl-4   relative ">

                    <div className=" flex mt-10  pl-4   relative ">
                        <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? "activetab flex items-center p-3 tabHover  cursor-pointer py-2 text-sm" : "opacity-60 flex items-center p-3 tabHover  cursor-pointer py-2 text-sm"}>
                        OVERVIEW
                        </button>
                        <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? "activetab flex items-center p-3 tabHover  cursor-pointer py-2 text-sm" : "opacity-60 flex items-center p-3 tabHover  cursor-pointer py-2 text-sm"}>
                        OPEN MANDATES
                        </button>
                        <button onClick={() => handleTabClick(3)} className={activeTab === 3 ? "activetab flex items-center p-3 tabHover  cursor-pointer py-2 text-sm" : "opacity-60 flex items-center p-3 tabHover  cursor-pointer py-2 text-sm"}>
                        FEEDS
                        </button>
                    </div>
                    <div>
                        {activeTab === 1 && <p><Overview/></p>}
                        {activeTab === 2 && <p><OpenMandates/></p>}
                        {activeTab === 3 && <p><Feeds/></p>}
                    </div>

                    {/* <Routes>
                        <Route path="/overview" element={ <Overview />} />
                        <Route path="/openmandates" element={ <OpenMandates /> } />
                        <Route path="/feeds" element={ <Feeds />} />
                        
                    </Routes> */}
                    

                </div>
                
                
                
            </div>

            

            <div className="w-[34%] "> <Search/> </div>
        </div>
        
    )
}

export default HomePage;