// import { Toggle } from "react-bootstrap/lib/Dropdown";
import { Link } from "react-router-dom";
import header from "../styles/components/Header.module.css";
import { ThemeContext } from "./Themeprovider";
import { useContext } from "react";

export const Header = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  console.log(isDark);
  return (
    <header>
      <div className={header.contain} style={{background : isDark ? "white" : "black"}}>
        <div className={header.logoContain}>
          <Link to="/">
            <div className={header.logo}></div>
          </Link>
        </div>
        <div className={header.textContain}>
          <button className={header.but} onClick={toggleTheme}>
            Theme
          </button>
          <Link to="/products">
            <h2 className={header.head} style={{color : isDark ? "black" : "white"}}>Products</h2>
          </Link>
          <Link to="/services">
            <h2 className={header.head} style={{color : isDark ? "black" : "white"}}>Services</h2>
          </Link>
          <Link to="/contact">
            <h2 className={header.head} style={{color : isDark ? "black" : "white"}}>Contact</h2>
          </Link>
          <Link to="/login">
            <h2 className={header.head} style={{color : isDark ? "black" : "white"}}>Log in</h2>
          </Link>
          <Link to="getaccess">
          <h2 className={header.specialhead} style={{color : isDark ? "black" : "white"}}>Get Access</h2>
          </Link>
        </div>
      </div>
    </header>
  );
};
