import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import PostCard from "../../Post/PostCard";
import "./OpenMandates.css";
import { listJobs } from "../../../services/JobService";

const OpenMandates = () => {
    const [selectedItem, setSelectedItem] = useState();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        listJobs().then((response) => {
            setJobs(response.data);
        }).catch(error => {
            console.error(error);
        });
    }, []); // Empty dependency array to run the effect only once

    const handleSelected = (item) => {
        setSelectedItem(!selectedItem);
    }

    const sortOptions = [
        { name: "latest", href: "#", current: true },
        { name: "Last week", href: "#", current: false },
        { name: "Last Month", href: "#", current: false },
        { name: "Last 3 Months", href: "#", current: false },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    return (
        <div>
            <div className="">
                <div className="flex w-full sorting w-full px-4 mt-5">
                    <div className=" sortingLeft w-[50%]">
                        <div className="w-full">
                            <Menu as="div" className="relative w-[50%]  inline-block text-left">
                                <div className="justify-between px-4 flex w-full">
                                    <Menu.Button className="group w-full flex justify-between text-sm font-medium text-gray-700 hover:text-gray-900">
                                        <span className="pr-2 ">
                                            ALL
                                        </span>
                                        <FaChevronDown
                                            className=" h-5 w-5 flex-shrink-0 text-black-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            {sortOptions.map((option) => (
                                                <Menu.Item key={option.name} onClick={() => handleSelected(option.name)}>
                                                    {({ active }) => (
                                                        <a
                                                            href={option.href}
                                                            className={classNames(
                                                                option.current
                                                                    ? "font-medium text-gray-900"
                                                                    : "text-gray-500",
                                                                active ? "bg-gray-100" : "",
                                                                "block px-4 py-2 text-sm"
                                                            )}
                                                        >
                                                            {option.name}
                                                        </a>
                                                    )}
                                                </Menu.Item>)
                                            )}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                            <Menu as="div" className="relative w-[50%] inline-block text-left">
                                <div className="justify-between px-4 flex w-full">
                                    <Menu.Button className="group w-full flex justify-between  text-sm font-medium text-gray-700 hover:text-gray-900">
                                        <span className="pr-2">
                                            ALL Mode
                                        </span>
                                        <FaChevronDown
                                            className="-mr-1  5 h-5 w-5 flex-shrink-0 text-black-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            {sortOptions.map((option) => (
                                                <Menu.Item key={option.name} onClick={() => handleSelected(option.name)}>
                                                    {({ active }) => (
                                                        <a
                                                            href={option.href}
                                                            className={classNames(
                                                                option.current
                                                                    ? "font-medium text-gray-900"
                                                                    : "text-gray-500",
                                                                active ? "bg-gray-100" : "",
                                                                "block px-4 py-2 text-sm"
                                                            )}
                                                        >
                                                            {option.name}
                                                        </a>
                                                    )}
                                                </Menu.Item>)
                                            )}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>

                    <div className=" sortingRight w-[50%]">
                        <div className="pr-3 w-full">Sort By</div>
                        <Menu as="div" className="relative w-full inline-block text-left">
                            <div>
                                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                    <span className="pr-2"> Date Posted(latest) </span>
                                    <FaChevronDown
                                        className="-mr-1 h-5 w-5 flex-shrink-0 text-black-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        {sortOptions.map((option) => (
                                            <Menu.Item key={option.name} onClick={() => handleSelected(option.name)}>
                                                {({ active }) => (
                                                    <a
                                                        href={option.href}
                                                        className={classNames(
                                                            option.current
                                                                ? "font-medium text-gray-900"
                                                                : "text-gray-500",
                                                            active ? "bg-gray-100" : "",
                                                            "block px-4 py-2 text-sm"
                                                        )}
                                                    >
                                                        {option.name}
                                                    </a>
                                                )}
                                            </Menu.Item>)
                                        )}
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>
                <div className="mt-2 ml-0 pl-0">
                    <div>
                        <p className="result">256 Mandates found</p>
                    </div>

                    <div>
                    {jobs.map((item) => (
                        <PostCard key={item.id} job={item} />
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OpenMandates;
