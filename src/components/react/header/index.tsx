import React from "react";
import nav_items from "./navigation.json";

// import ModeToggle from "../mode-toggle";

interface Props {
  logo: {
    src: string;
  };
}

const Header: React.FC<Props> = ({ logo: { src } }) => {
  return (
    <header className="header">
      <a href="/">
        <h1 className="header__logo">
          <img src={src} alt="The New Yorker" />
        </h1>
      </a>
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
      {/* <ModeToggle /> */}
    </header>
  );
};

export default Header;
