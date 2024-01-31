import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";

const MenuItems = ({ items, depth }) => {
  const [dropdown, setDropdown] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handler);

    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);

      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const toggleDropDown = () => {
    setDropdown((prev) => !prev);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const onMouseEnter = () => {
    setDropdown(true);
  };

  //   console.log(items, depth, ref.current, "keyyy");

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? true : false}
            onClick={() => toggleDropDown()}
          >
            <Link to={items.url}>{items.title}</Link>
            {depth > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>

          <DropDown
            depth={depth}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? true : false}
          >
            {items.title}
            {depth > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>

          <DropDown
            depth={depth}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link to={items.url}>{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;
