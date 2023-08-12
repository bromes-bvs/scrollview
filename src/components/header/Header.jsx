import React from 'react';

const Header = () => {
  return (
    <header class="page-header">
      <div class="container">
        <nav class="main-nav">
          <a class="logo link logo--main-nav" href="./index.html">
            <span class="logo__accent">Web</span>Studio
          </a>
          <ul class="list main-nav__list">
            <li class="main-nav__item">
              <a
                class="link main-nav__link main-nav__link--current"
                href="./index.html"
              >
                Студія
              </a>
            </li>
            <li class="main-nav__item">
              <a class="link main-nav__link" href="./portfolio.html">
                Портфоліо
              </a>
            </li>
            <li class="main-nav__item">
              <a class="link main-nav__link" href="#">
                Контакти
              </a>
            </li>
          </ul>
        </nav>
        <ul class="list header-conacts">
          <li class="header-conacts__item">
            <a
              class="header-conacts__link link"
              href="mailto:info@devstudio.com"
            >
              {/* <svg class="header-conacts__icon" width="16" height="12">
                <use href="./images/icons.svg#icon-svgenvelope"></use>
              </svg> */}
              info@devstudio.com
            </a>
          </li>
          <li class="header-conacts__item">
            <a class="header-conacts__link link" href="tel:+380961111111">
              {/* <svg class="header-conacts__icon" width="10" height="16">
                <use href="./images/icons.svg#icon-svgsmartphone"></use>
              </svg> */}
              +38 096 111 11 11
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
