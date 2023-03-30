import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  const menus = ["Store", "Our Story", "Journal"];
  const logo = "https://tf-frontend.netlify.app/images/v1/logo.svg";

  const [menuButtonClicked, setMenuButtonClicked] = useState(false);

  return (
    <nav>
      <img src={logo} alt="" className="navbar-logo" />
      <div onClick={() => setMenuButtonClicked(!menuButtonClicked)}>
        {menuButtonClicked ? <FaTimes /> : <RxHamburgerMenu />}
      </div>
      <ul className="navbar-menu">
        {menus.map((menu) => (
          <li key="">
            <a href="">{menu}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
