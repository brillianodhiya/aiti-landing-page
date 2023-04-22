import React from "react";

const ThemeSwitcher = () => {
  return (
    <div className="my_switcher d-none d-lg-block">
      <ul>
        <li title="Light Mode">
          <a
            style={{ cursor: "pointer" }}
            className="setColor light"
            data-theme="light"
          >
            <i className="fal fa-lightbulb-on" />
          </a>
        </li>
        <li title="Dark Mode">
          <a
            style={{ cursor: "pointer" }}
            className="setColor dark"
            data-theme="dark"
          >
            <i className="fas fa-moon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ThemeSwitcher;
