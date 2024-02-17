import React from "react";
import { Route, Routes } from "react-router-dom";
import AddNewJob from "../../Component/AddNewJob/AddNewJob";
import BusinessPage from "../BusinessPage/BusinessPage";
import FirstPage from "../FirstPage/FirstPage";
import AllJobs from "../../Component/AllJobs/AllJobs";

const Router = () => {
    return (

        <div>
            <Routes>
                <Route path="/login" element={ <FirstPage/>  } />
                <Route path="/" element={ <BusinessPage/>} />
                <Route path="/alljobs" element={ <AllJobs/>} />
                <Route path="/createnewjob" element={ <AddNewJob/>} />
                <Route path="/edit-job/:jobId" element={ <AddNewJob/> } />
            </Routes>
        </div>

    )
}

export default Router;