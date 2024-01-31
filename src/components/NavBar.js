import React from "react";
import { DropDownData } from "../DropDownData";
import MenuItems from "./MenuItems";

const NavBar = () => {
  const depth = 0;
  return (
    <nav className="desk-nav">
      <ul className="menus">
        {DropDownData.map((menu, index) => {
          return <MenuItems items={menu} key={index} depth={depth} />;
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
