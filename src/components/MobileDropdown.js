import MobileMenuItems from "./MobileMenuItems";

const MobileDropdown = ({ submenus, dropdown, depth }) => {
  depth = depth + 1;
  const dropdownClass = depth > 1 ? "dropdown-submenu" : "";

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <MobileMenuItems items={submenu} key={index} depth={depth} />
      ))}
    </ul>
  );
};

export default MobileDropdown;
