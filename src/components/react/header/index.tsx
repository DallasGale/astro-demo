import React, { useState } from "react";
import nav_items from "./navigation.json";

const Header = (logo) => {
  const [navState, setNavState] = useState("default");

  return (
    <header className="header">
      <h1 className="header__logo">
        <img src={logo.logo} alt="The New Yorker" />
      </h1>
      <nav className="nav" data-state={`default`}>
        <ul className="nav__ul">
          {nav_items.map((data) => {
            return (
              <li key={data.label} className="nav__li" data-color={data.color}>
                <a className="nav__link" href={data.slug}>
                  {data.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
