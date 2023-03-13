import React from "react";
import { SparkLine, Stacked } from "../components";
import { useStateContext } from "../context/ContextProvider";

import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";

const Ecommerce = () => {
  // dark:bg-main-dark-bg bg-main-bg min-h-screen Parent
  const { currentMode, currentColor } = useStateContext();
  return (
    <div className="lg:px-8 px-4 mt-14 dark:text-white">
      {/* First Div */}
      <div className="flex flex-wrap lg:flex-nowrap gap-4">
        <div
          className="flex-grow flex flex-col justify-around h-44 lg:w-80 w-full
        bg-contain bg-no-repeat bg-right-bottom bg-main-bg dark:bg-main-dark-bg rounded-3xl pt-4 
        bg-hero-pattern px-6"
        >
          <div>
            <p className="font-bold text-gray-500">Earnings</p>
            <p className="text-2xl">$63,448.78</p>
          </div>
          <div>
            <button
              style={{ backgroundColor: currentColor }}
              type="button"
              className="p-3 text-white rounded-xl"
            >
              Download
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-center flex-grow gap-3 ">
          {earningData.map((elem) => {
            return (
              <div key={elem.title} className="flex-grow">
                <span
                  className={`p-4 inline-block rounded-full opacity-80 text-2xl`}
                  style={{ backgroundColor: elem.iconBg }}
                >
                  {elem.icon}
                </span>
                <p className="font-semibold">
                  {elem.amount}
                  <span className={`ml-2 text-${elem.pcColor}`}>
                    {elem.percentage}
                  </span>
                </p>
                <p className="text-gray-500 mt-2">{elem.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between mt-12">
        <p className="font-semibold tex2x">Revenue Updates</p>
        <ul className="flex justify-end gap-6 list-disc">
          <li>Expense</li>
          <li className="text-yellow-600">Budget</li>
        </ul>
      </div>
      {/*Contaiiner*/}
      <div className="flex flex-wrap gap-4 sm:gap-0 sm:flex-wrap justify-center mt-8">
        {/*First*/}
        <div className="sm:flex-grow">
          <div className="pl-10 ">
            <div>
              <p className="font-bold text-2xl">
                $93,438{" "}
                <span className="font-thin text-sm p-1 text-white rounded-3xl bg-yellow-500">
                  23%
                </span>
              </p>
              <p className="text-gray-500">Budget</p>
            </div>
            <div className="mt-5">
              <p className="font-bold text-2xl">$93,438</p>
              <p className="text-gray-500">Expense</p>
            </div>
            <div>
              <SparkLine
                currentColor={"#000"}
                id="line-sparkLine"
                type="Line"
                height="80px"
                width="250px"
                data={SparklineAreaData}
                color={currentColor}
              />
              <button
                style={{ backgroundColor: currentColor }}
                type="button"
                className="p-3 mt-8 text-white rounded-xl"
              >
                Download Report
              </button>
            </div>
          </div>
        </div>
        {/*Second*/}
        <div className="sm:flex-grow">
          <Stacked currentMode={currentMode} width="320px" height="360px" />
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
