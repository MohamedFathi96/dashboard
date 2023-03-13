import React, { useEffect } from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenuGridR } from "react-icons/cg";
import { BiSearchAlt, BiChat } from "react-icons/bi";
import {
  MdOutlineNotificationsActive,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { useStateContext } from "../context/ContextProvider";
import avatar from "../data/avatar.jpg";
import Chat from "./Chat";
import Cart from "./Cart";
import Notification from "./Notification";
import UserProfile from "./UserProfile";

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    // flex gap-3 px-6 py-4 Parent Div
    <>
      <TooltipComponent content="Menu" position="BottomCenter">
        <button
          style={{ color: currentColor }}
          onClick={() => {
            setActiveMenu((prev) => !prev);
          }}
        >
          <CgMenuGridR className="text-2xl cursor-pointer" />
        </button>
      </TooltipComponent>
      <TooltipComponent content="Search" position="BottomCenter">
        <button
          style={{ color: currentColor }}
          onClick={() => handleClick("search")}
        >
          <BiSearchAlt className="text-2xl cursor-pointer" />
        </button>
      </TooltipComponent>
      <TooltipComponent
        className="ml-auto"
        content="Cart"
        position="BottomCenter"
      >
        <button
          style={{ color: currentColor }}
          onClick={() => handleClick("cart")}
        >
          <FiShoppingCart className="text-2xl cursor-pointer" />
        </button>
      </TooltipComponent>

      <TooltipComponent content="Chat" position="BottomCenter">
        <button
          style={{ color: currentColor }}
          onClick={() => handleClick("chat")}
        >
          <BiChat className="text-2xl cursor-pointer" />
        </button>
      </TooltipComponent>
      <TooltipComponent content="Notification" position="BottomCenter">
        <button
          style={{ color: currentColor }}
          onClick={() => handleClick("notification")}
        >
          <MdOutlineNotificationsActive className="text-2xl cursor-pointer" />
        </button>
      </TooltipComponent>

      <TooltipComponent content="Profile" position="BottomCenter">
        <div className="flex gap-1 items-center">
          <img src={avatar} className="w-10 rounded-full " />
          <button
            style={{ color: currentColor }}
            onClick={() => handleClick("userProfile")}
          >
            <span className="text-gray-500 font-medium">Hi, </span>
            <span className="font-extrabold text-gray-500">Adam</span>
          </button>
          <MdKeyboardArrowDown className="text-lg fill-slate-500 cursor-pointer" />
        </div>
      </TooltipComponent>
      {isClicked.cart && <Cart />}
      {isClicked.chat && <Chat />}
      {isClicked.notification && <Notification />}
      {isClicked.userProfile && <UserProfile />}
    </>
  );
};

export default Navbar;
