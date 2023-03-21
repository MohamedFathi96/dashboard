import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import { useStateContext } from "./context/ContextProvider";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";
import "./App.css";

const App = () => {
  const {
    activeMenu,
    setActiveMenu,
    setThemeSettings,
    themeSettings,
    currentColor,
    currentMode,
  } = useStateContext();
  return (
    <div className={`${currentMode === "dark" ? "dark" : ""} `}>
      {themeSettings && <ThemeSettings />}
      {/* <div className="fixed top-2 left-2 text-xl z-20 sm:before:content-['sm'] md:before:content-['md'] lg:before:content-['lg'] xl:b sm:before:content-['sm']efore:content-['xl'] 2xl:before:content-['2xl']"></div> */}
      <BrowserRouter>
        <div className="relative flex dark:bg-main-dark-bg">
          <div className="fixed z-50 right-4 bottom-4">
            <TooltipComponent content="Settings" position="TopLeft">
              <button
                style={{ backgroundColor: currentColor }}
                className="p-2 rounded-full hover:drop-shadow-3xl"
                onClick={() => setThemeSettings((prev) => !prev)}
              >
                <FiSettings className="text-white text-3xl"></FiSettings>
              </button>
            </TooltipComponent>
          </div>

          {activeMenu ? (
            <div className="sidebar bg-white pb-2 z-10 w-72 border-r-4 border-x-gray-400 h-screen fixed dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          ) : (
            <Sidebar />
          )}

          <div // Right Side
            className={`flex-1 dark:bg-main-dark-bg bg-main-bg min-h-screen ${
              activeMenu ? "md:ml-72" : ""
            }`}
          >
            <div className="navBar flex gap-3 px-6 py-4  items-center">
              <Navbar />
            </div>

            <div>
              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* pages  */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* apps  */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* charts  */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
