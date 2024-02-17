import { FiLayers } from "react-icons/fi";
import { IoIosNotifications, IoMdHelpCircle, IoMdHelpCircleOutline } from "react-icons/io";
import { IoCall, IoCallOutline, IoLayersSharp, IoNotificationsOutline } from "react-icons/io5";
import { RiMessage2Fill, RiMessage2Line } from "react-icons/ri";
import "./IconSidebar.css";

export const iconSidebarMainu=[

    {
        title: "Layer",
        activeIcon: <FiLayers className="icon"></FiLayers>,
        icon: <IoLayersSharp className="icon"></IoLayersSharp>
    },

    {
        title: "Message",
        activeIcon: <RiMessage2Line className="icon"></RiMessage2Line>,
        icon: <RiMessage2Fill className="icon"></RiMessage2Fill>
    },

    {
        title: "Notification",
        activeIcon: <IoNotificationsOutline className="icon"></IoNotificationsOutline>,
        icon: <IoIosNotifications className="icon"></IoIosNotifications>
    },

    {
        title: "Phone",
        activeIcon: <IoCallOutline className="icon"></IoCallOutline>,
        icon: <IoCall className="icon"></IoCall>
    },

    {
        title: "Help",
        activeIcon: <IoMdHelpCircleOutline className="icon"></IoMdHelpCircleOutline>,
        icon: <IoMdHelpCircle className="icon"></IoMdHelpCircle>
    }
]