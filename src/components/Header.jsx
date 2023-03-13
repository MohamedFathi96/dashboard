import React from "react";

const Header = ({ category, title, darkColor }) => {
  return (
    <div className={`mb-8 dark:text-${darkColor}`}>
      <p className="text-gray-400">{category}</p>
      <h1 className="text-3xl font-bold">{title}</h1>
    </div>
  );
};

export default Header;
