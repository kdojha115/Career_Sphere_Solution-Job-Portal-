
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { HiClipboardList } from "react-icons/hi";
import { LuClipboardList } from "react-icons/lu";
import { MdAccountCircle, MdCurrencyRupee } from "react-icons/md";
import "./Sidebar.css";

export const mainu=[

    {
        title: "Home",
        activeIcon: <AiFillHome className="text-2xl mr-5"></AiFillHome>,
        icon: <AiOutlineHome className="text-2xl mr-5"></AiOutlineHome>
    },

    {
        title: "Profile",
        activeIcon: <MdAccountCircle className="text-2xl mr-5"></MdAccountCircle>,
        icon: <CgProfile className="text-2xl mr-5"> </CgProfile >
    },

    {
        title: "Accounts",
        activeIcon: <FaIndianRupeeSign className="text-2xl mr-5"></FaIndianRupeeSign>,
        icon: <MdCurrencyRupee className="text-2xl mr-5"></MdCurrencyRupee>
    },

    {
        title: "Reports",
        icon: <LuClipboardList className="text-2xl mr-5"></LuClipboardList>,
        activeIcon: <HiClipboardList className="text-2xl mr-5"></HiClipboardList>
    }
]