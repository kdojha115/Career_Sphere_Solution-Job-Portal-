import { Menu, Transition } from "@headlessui/react";
import { Fragment, default as React, useState } from "react";
import { FaChevronDown, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";

import "./Search.css";

const Search = () => {

    const [selectedItem, setSelectedItem] = useState();

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

    return(
        <div className="searchPage  ">
            <div className="SearchBox">
                <div className="">
                    <h1 className="searchText">Search Mandate</h1>
                </div>
                <div className="flex w-full ">

                    <input className="searchInput" type="text" />
                    <IoSearch className="searchIcon text-3xl"></IoSearch>
                    
                </div>
            </div>

            <div className="clientBox">
                <div className="clientHeading">
                    <span>CLIENTs</span>
                </div>
                <div className="dropMenu">
                    <Menu as="div" className="relative w-full inline-block text-left">
                        <div className="w-full">
                            <Menu.Button className="group w-full inline-flex justify-between text-sm font-medium text-gray-700 hover:text-gray-900">
                                <span className="pr-2 ">
                                    ALL
                                </span>
                                <FaChevronDown
                                    className="  h-5 w-5 flex-shrink-0 text-black-400 group-hover:text-gray-500"
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
                                {sortOptions.map((option) =>  (
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

            <div className="socialMediaBox">
                <div className="socialMediaText">
                    <span>Social Media</span>
                </div>
                <div className="socialMediaIcon">
                    <a href="https://www.linkedin.com/in/kundan-kumar-ojha-98327718b/" className="h-9 w-9 rounded-full  socialmediacircle">
                    {<GrFacebookOption className="iconColor"/>}
                    </a>
                    <div className="h-9 w-9 rounded-full socialmediacircle">
                        <FaTwitter className="iconColor"/>
                    </div>
                    <div className="h-9 w-9 rounded-full socialmediacircle">
                        <FaLinkedin className="iconColor"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;