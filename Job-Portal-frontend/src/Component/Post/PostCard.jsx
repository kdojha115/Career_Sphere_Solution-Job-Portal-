import React, {   useState } from "react";
import { BsCalendarDate } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import { IoDocument } from "react-icons/io5";
import { MdCalendarMonth, MdCurrencyRupee } from "react-icons/md";
import "./PostCard.css";
import { useNavigate } from "react-router-dom";
import logo from "../../Image/Logo/logo.png";

const PostCard = ({ job }) => {

    const [showDropDown, setShowDropDown] = useState(false);

    const [showSalary, setShowSalary] = useState(false);

    const [showLocation, setShowLocation] = useState(false);

    const [showStartDate, setShowStartDate] = useState(false);

    const [showEndDate, setShowEndDate] = useState(false);

    function handleSalary() {
        setShowSalary(!showSalary);
    }

    function handleLocation() {
        setShowLocation(!showLocation);
    }

    function handleStartDate() {
        setShowStartDate(!showStartDate);
    }

    function handleEndDate() {
        setShowEndDate(!showEndDate);
    }

    const navigate = useNavigate();

    const handleClick = () => {
        setShowDropDown(!showDropDown);
    };

    // console.log(job);

    function handleAggrement(){
        navigate('/');
    }



    return (
        <div>
            <div className="flex flex-row card ">
                <div>
                    <div>
                        <a  href="/">
                            <img className="logo " src={logo} alt="" />
                        </a>
                    </div>
                    <div className="aggrement">
                        <IoDocument className="text-2xl "/>
                        <button className="btn btn-primary" onClick={handleAggrement}> Aggrement </button>
                    </div>
                </div>
                
                <div className="flex w-full  justify-between">
                    <div className="content w-full flex flex-col justify-between ml-0">
                        <div>
                            <div className="">
                                <div className="contentDetail justify-center items-center flex">
                                    {/* <BsPersonWorkspace className="rainbow "/> */}
                                    <h1 className="changableContent ">Looking for {job.jobtitle} </h1>
                                </div>
                            </div>
                            <div className="contentIcons mt-4 justify-between px-6 flex">
                                <div className="contentDetail ">
                                    <MdCurrencyRupee className="rainbow cursor-pointer px-1" onClick={handleSalary} />{showSalary && `${job.salary} LPA`}

                                </div>
                                <div className="contentDetail">
                                    <MdCalendarMonth className="rainbow cursor-pointer px-1" onClick={handleStartDate}/>{showStartDate && `${job.startDate}`}

                                </div>
                                <div className="contentDetail">
                                    <FaLocationDot className="rainbow cursor-pointer px-1" onClick={handleLocation}/>{showLocation && `${job.location}`}

                                </div>
                                <div className="contentDetail">
                                    <BsCalendarDate className="rainbow cursor-pointer px-1" onClick={handleEndDate}/>{showEndDate && `${job.endDate}`}

                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="btn btn-primary flex items-center">Add to My Work</button>
                        </div>
                    </div>

                    <div className="flex addButton flex-col ">
                        <div className="dropdown">
                            <HiDotsVertical className="dots" onClick={handleClick}></HiDotsVertical> 
                            <div className="dropdown-content">
                                {showDropDown && (
                                    <div>
                                        <p className="list ">
                                            Delete
                                        </p>
                                        
                                        
                                    </div>
                                    
                                    
                                )}
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default PostCard;