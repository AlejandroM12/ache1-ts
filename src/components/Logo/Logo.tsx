import { NavLink } from "react-router-dom";

interface LogoInterface {
  logo: string;
  onClick?: () => void;
}
const Logo = ({ logo, onClick }: LogoInterface) => {
  return (
    <NavLink className="logo" to="/" onClick={onClick}>
      <img src={logo} alt="ache1 logo" />
    </NavLink>
  );
};

export default Logo;
