import React from "react";
import "../scss/components/_header.scss";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <a href="/">
            <img width={100} height={100} src="/src/assets/logo.JPG" alt="" />
          </a>
          <div>
            <h1>Minimal Todo</h1>
            <p>Ничего лишнего и со вкусом</p>
          </div>
        </div>
        <div className="header__button">
          <a href="">
            <img width={60} height={60} src="/src/assets/menu.png" alt="menu" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
