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
            <a href="/">ГЛАВНАЯ</a>
          </li>
          <li className="main-nav__item">
            <a href="/">ГАЛЕРЕЯ</a>
          </li>
          <li className="main-nav__item">
            <a href="/">ПРОЕКТЫ</a>
          </li>
          <li className="main-nav__item">
            <a href="/">СЕРТИФИКАТЫ</a>
          </li>
          <li className="main-nav__item">
            <a href="/">КОНТАКТЫ</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
