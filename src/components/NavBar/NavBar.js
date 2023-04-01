import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = ({ logo, menu }) => {
  const [menuButtonClicked, setMenuButtonClicked] = useState(false);

  return (
    <nav className={styles.navbar}>
      <img
        className={styles.navbarLogo}
        style={{ display: menuButtonClicked ? "none" : "inline" }}
        src={logo}
        alt="Logo of Thunderfoot"
      />
      <div
        className={styles.mobileIcon}
        onClick={() => setMenuButtonClicked(!menuButtonClicked)}
      >
        {menuButtonClicked ? <FaTimes /> : <RxHamburgerMenu />}
      </div>
      <ul
        className={styles.navbarMenu}
        style={{ left: menuButtonClicked ? "0" : "-100%" }}
      >
        {Object.keys(menu).map((item) => (
          <li key={menu[item]}>
            <a href={menu[item]}>{menu[item]}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
