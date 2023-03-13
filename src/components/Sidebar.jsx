import React, { useCallback, useContext } from "react";
import { ReactComponent as ReactLogo } from "../data/default.svg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { Link, NavLink } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

const SideBar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();
  const activeLink =
    "flex gap-5 items-center rounded-lg text-white text-md pt-3 pb-3 pl-2";
  const normalLink =
    "flex gap-5 dark:text-white dark:main-dark-bg items-center rounded-lg text-gray-700 text-md pt-3 pb-3 pl-2";
  const closingSideBar = useCallback(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    }
  }, []);
  return (
    <>
      <div className="md:overflow-hidden relative hover:md:overflow-auto overflow-auto ml-6 h-screen">
        <div className="absolute top-3 right-3 text-2xl md:hidden">
          <TooltipComponent content="Close" position="BottomCenter">
            <button
              onClick={() => {
                setActiveMenu(false);
              }}
              type="button"
            >
              <AiOutlineCloseCircle className="text-2xl" />
            </button>
          </TooltipComponent>
        </div>

        {activeMenu && (
          <>
            <div className="mb-8">
              <Link onClick={closingSideBar} to="/ecommerce">
                <ReactLogo className="logo w-32 mt-4 dark:text-white" />
              </Link>
            </div>

            {links.map((item) => {
              return (
                <div className="flex flex-col gap-3" key={item.title}>
                  <p className="text-gray-400 mt-3 uppercase">{item.title}</p>
                  <div className="ml-3">
                    {item.links.map((link) => {
                      return (
                        <NavLink
                          onClick={closingSideBar}
                          key={link.name}
                          style={({ isActive }) => ({
                            backgroundColor: isActive ? currentColor : "",
                          })}
                          className={({ isActive }) =>
                            isActive ? activeLink : normalLink
                          }
                          to={`/${link.name}`}
                        >
                          {link.icon}
                          <span className="capitalize">{link.name}</span>
                        </NavLink>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default SideBar;
