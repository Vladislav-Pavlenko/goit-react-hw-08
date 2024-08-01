import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

export default function AuthNav() {
  const makeNavLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div className={css.nav}>
      <NavLink className={makeNavLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={makeNavLinkClass} to="/login">
        Log In
      </NavLink>
    </div>
  );
}
