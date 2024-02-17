import React from "react";
import { useNavigate } from 'react-router-dom';
import "./FirstPage.css";
import logo from '../../Image/Logo/logo.png';

const FirstPage = () =>{

    const navigate = useNavigate();

    const handleLogin = () => {
            
        navigate('/');
        
    };

    const handleAddJob = () => {
            
        navigate('/alljobs');
        
    };

    return (

        
        <div className="table w-full h-full">
            <div className="box">
                <div className="flex flex-col">
                    <div className="w-full flex  logoCompany">
                        <img className=" logo" src={logo} alt="" />
                    </div>

                    <div className="heading">
                        <h1 className="text-sm text-blue-700"> Connecting Careers, Creating Futures </h1>
                    </div>
                </div>
                <div className=" btncontent blue w-full h-full">
                        
                    <div className=" ">

                        <button className="text-white-700 btnstyle " onClick={handleAddJob} > Recruiter </button>

                    </div>

                    <div className=" ">

                        <button className="btnstyle1 " onClick={handleLogin}> Job Seeker </button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default FirstPage;