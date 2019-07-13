import React, { useRef } from "react";

import { ReactComponent as Logo } from "../images/menu.svg";

// aside menu(desktop) and navbar(mobile)
const Menu = () => {
  const menuList = useRef(null);

  const toggleMenu = () => {
    menuList.current.classList.toggle("active");
  };

  return (
    <aside>
      <figure>
        <div id="avatar" />
        <figcaption>User Name</figcaption>
      </figure>

      <Logo id="menuLink" onClick={toggleMenu} />

      <nav>
        <ul ref={menuList}>
          <li>
            <a href="#" onClick={toggleMenu}>
              Todo
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Menu;
