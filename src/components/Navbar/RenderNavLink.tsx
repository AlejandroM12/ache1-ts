import { NavLink } from "react-router-dom";

interface InterfaceNavLink {
  to: string;
  label: string;
  toggleNav: () => void;
}
const RenderNavLink = ({ to, label, toggleNav }: InterfaceNavLink) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) => {
          return isActive ? "active" : "link-a";
        }}
        to={to}
        onClick={toggleNav}
      >
        {label}
      </NavLink>
    </li>
  );
};
export default RenderNavLink;
