import React from "react";

const Menu = () => {
  return (
    <aside>
      <figure>
        <div id="avatar" />
        <figcaption>User Name</figcaption>
      </figure>
      <img id="menulink" />
      <nav>
        <ul id="menu">
          <li>
            <a href="#">Todo</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Menu;
