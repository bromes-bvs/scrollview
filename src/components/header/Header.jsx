import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo/logo.svg';

const Header = () => {
  return (
    <header className="page-header">
      <nav className="main-nav">
        <a className="logo link logo--main-nav" href="./index.html">
          <Logo />
        </a>
        <ul className="list main-nav__list">
          <li className="main-nav__item main-nav__item--current">
            <a
              // className="link main-nav__link main-nav__link--current"
              href="/"
            >
              ГЛАВНАЯ
            </a>
          </li>
          <li className="main-nav__item">
            <a
              // className="link main-nav__link"
              href="/"
            >
              ГАЛЕРЕЯ
            </a>
          </li>
          <li className="main-nav__item">
            <a
              // className="link main-nav__link"
              href="/"
            >
              ПРОЕКТЫ
            </a>
          </li>
          <li className="main-nav__item">
            <a
              // className="link main-nav__link"
              href="/"
            >
              СЕРТИФИКАТЫ
            </a>
          </li>
          <li className="main-nav__item">
            <a
              // className="link main-nav__link"
              href="/"
            >
              КОНТАКТЫ
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
