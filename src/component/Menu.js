import React, { useRef } from "react";

import PropTypes from "prop-types";
import { ReactComponent as Logo } from "../images/menu.svg";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

// use Swal to get todo message
async function getUsername() {
  const { value: name } = await MySwal.fire({
    title: "Please enter your username",
    input: "text",
    showCancelButton: true,
    inputPlaceholder: "type your name!"
  });
  if (name !== undefined) {
    return name;
  }
}

// side-menu(desktop) and navbar(mobile)
const Menu = props => {
  const menuList = useRef(null);

  const toggleMenu = () => {
    menuList.current.classList.toggle("active");
  };

  const changeUsername = () => {
    getUsername().then(name => {
      if (name) {
        props.setUsername(name);
        props.successAlert();
      }
    });
  };
  return (
    <aside>
      <figure>
        <div id="avatar" />
        <figcaption onClick={() => changeUsername()}>
          {props.username}
        </figcaption>
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

Menu.propTypes = {
  username: PropTypes.string,
  successAlert: PropTypes.func,
  setUsername: PropTypes.func
};
export default Menu;
