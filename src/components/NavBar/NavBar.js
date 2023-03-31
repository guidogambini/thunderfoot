import { useState } from "react";
import UseAppContext from "../../hooks/UseAppContext";
import { FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.module.css";

const Navbar = () => {
  const { navbarData } = UseAppContext();

  const [menuButtonClicked, setMenuButtonClicked] = useState(false);

  return (
    <nav>
      <img className="navbar-logo" src={navbarData.logo} alt="" />
      <div
        className="mobile-icon"
        onClick={() => setMenuButtonClicked(!menuButtonClicked)}
      >
        {menuButtonClicked ? <FaTimes /> : <RxHamburgerMenu />}
      </div>
      <ul
        className="navbar-menu"
        style={{ left: menuButtonClicked ? "0" : "-100%" }}
      >
        {Object.keys(navbarData).map((menu) => (
          <li key={navbarData[menu]}>
            <a href={navbarData[menu]}>{navbarData[menu]}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
