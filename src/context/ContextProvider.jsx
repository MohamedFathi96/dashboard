import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();
const initialState = {
  chat: false,
  cart: false,
  notification: false,
  userProfile: false,
  search: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const [currentMode, setCurrentMode] = useState("dark");
  const [currentColor, setCurrentColor] = useState("#1A97F5");
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (event) => {
    setCurrentMode(event.target.value);
  };

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentMode,
        currentColor,
        setThemeSettings,
        themeSettings,
        setMode,
        setCurrentColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
