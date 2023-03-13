import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import { themeColors } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";

const ThemeSettings = () => {
  const {
    currentColor,
    currentMode,
    setColor,
    setMode,
    setCurrentColor,
    setThemeSettings,
  } = useStateContext();
  return (
    <div className="bg-half-transparent fixed w-screen h-screen top-0 right-0 z-50 dark:text-white">
      <div className="ml-auto pt-8 px-7 max-w-sm flex flex-col gap-9 h-screen bg-white dark:bg-main-dark-bg">
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">Settings</p>
          <button
            onClick={() => setThemeSettings(false)}
            className="p-2 rounded-full hover:drop-shadow-xl text-xl"
          >
            <AiOutlineCloseCircle className="text-2xl dark:text-white text-gray-400" />
          </button>
        </div>
        <hr className="bg-gray-200 h-0.5 w-11/12 mx-auto" />
        <div className="flex flex-col gap-4">
          <p className="text-xl font-semibold">Theme Option</p>
          <div>
            <input
              value="light"
              name="theme"
              className="mr-3 cursor-pointer"
              type="radio"
              id="light"
              checked={currentMode === "light"}
              onChange={setMode}
            />
            <label htmlFor="light">Light</label>
          </div>
          <div>
            <input
              value="dark"
              name="theme"
              className="mr-3 cursor-pointer"
              type="radio"
              id="dark"
              checked={currentMode === "dark"}
              onChange={setMode}
            />
            <label htmlFor="dark">Dark</label>
          </div>
        </div>
        <hr className="bg-gray-200 h-0.5 w-11/12 mx-auto" />

        <div>
          <p className="text-xl font-semibold">Theme Colors</p>
          <div className="flex flex-wrap gap-2 pt-4 pl-4">
            {themeColors.map((color, index) => {
              return (
                <TooltipComponent
                  key={index}
                  position="TopCenter"
                  content={color.name}
                >
                  <button
                    type="button"
                    className={`h-10 w-10 text-white rounded-full`}
                    style={{ backgroundColor: color.color }}
                    onClick={() => setCurrentColor(color.color)}
                  >
                    <BsCheck
                      className={`text-2xl mx-auto ${
                        currentColor === color.color ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </TooltipComponent>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
