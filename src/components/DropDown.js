import React from "react";
import MenuItems from "./MenuItems";

const DropDown = ({ dropdown, submenus, depth }) => {
  depth = depth + 1;
  const dropdownClass = depth > 1 ? "dropdown-submenu" : "";

  console.log(submenus, "keyyyy1");
  return (
    <>
      <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => {
          return <MenuItems items={submenu} key={index} depth={depth} />;
        })}
      </ul>
    </>
  );
};

export default DropDown;
