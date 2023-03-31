import { useState } from "react";
import UseAppContext from "../../hooks/UseAppContext";
import { FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./Navbar.module.css";

const Navbar = () => {
  //const { navbarData } = UseAppContext();

  const [menuButtonClicked, setMenuButtonClicked] = useState(false);

  const navbarData = {
    logo: "https://tf-frontend.netlify.app/images/v1/logo.svg",
    menu: {
      menu_item_1: "Store",
      menu_item_2: "Our Story",
      menu_item_3: "Journal",
    },
  };

  return (
    <div>
      {navbarData && (
        <nav>
          <img className={styles.logo} src={navbarData.logo} alt="" />
          <div
            className={styles.mobileIcon}
            onClick={() => setMenuButtonClicked(!menuButtonClicked)}
          >
            {menuButtonClicked ? <FaTimes /> : <RxHamburgerMenu />}
          </div>
          <ul
            className={styles.menu}
            style={{ left: menuButtonClicked ? "0" : "-100%" }}
          >
            {Object.keys(navbarData.menu).map((menu) => (
              <li key={navbarData.menu[menu]}>
                <a href={navbarData.menu[menu]}>{navbarData.menu[menu]}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
