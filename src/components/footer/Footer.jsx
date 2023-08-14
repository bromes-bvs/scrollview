import React from 'react';
import LogoWhite from '../../assets/logo/LogoWhite.png';
import { ReactComponent as Place } from '../../assets/logo/place.svg';
import { ReactComponent as Phone } from '../../assets/logo/phone.svg';
import { ReactComponent as Mail } from '../../assets/logo/mail.svg';
import { ReactComponent as Facebook } from '../../assets/logo/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/logo/Twitter-X.svg';
import { ReactComponent as LinkedIn } from '../../assets/logo/Linked In.svg';
import { ReactComponent as Pinterest } from '../../assets/logo/pinterest.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content-wrapper">
        <div className="footer__logo-wrapper">
          <a href="/" className="footer__logo">
            <img src={LogoWhite} alt="Logo White" />
          </a>
        </div>
        <div className="footer__information">
          <h4 className="footer__information__title">Информация</h4>
          <ul className="footer__information__list">
            <li className="footer__information__item">
              <a className="footer__information__link" href="/">
                Главная
              </a>
            </li>
            <li className="footer__information__item">
              <a className="footer__information__link" href="/">
                Галерея
              </a>
            </li>
            <li className="footer__information__item">
              <a className="footer__information__link" href="/">
                Проекты
              </a>
            </li>
            <li className="footer__information__item">
              <a className="footer__information__link" href="/">
                Сертификаты
              </a>
            </li>
            <li className="footer__information__item">
              <a className="footer__information__link" href="/">
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__contacts">
          <h4 className="footer__contacts__title">Контакты</h4>
          <ul className="footer__contacts__list">
            <li className="footer__contacts__item">
              <Place /> 100000, Республика Казахстан, <br /> г. Караганда, ул.
              Телевизионная 10
            </li>
            <li className="footer__contacts__item">
              <Phone />
              +38 (000) 000 00 00
            </li>
            <li className="footer__contacts__item">
              <Mail />
              mail@gmail.com
            </li>
          </ul>
        </div>
        <div className="footer__social">
          <h4 className="footer__social__title">Социальные сети</h4>
          <ul className="footer__social__list">
            <li className="footer__social__item">
              <a
                className="footer__social__link"
                href="https://www.facebook.com/"
              >
                <Facebook />
              </a>
            </li>
            <li className="footer__social__item">
              <a className="footer__social__link" href="https://twitter.com/">
                <Twitter />
              </a>
            </li>
            <li className="footer__social__item">
              <a
                className="footer__social__link"
                href="https://www.linkedin.com/"
              >
                <LinkedIn />
              </a>
            </li>
            <li className="footer__social__item">
              <a
                className="footer__social__link"
                href="https://www.pinterest.com/"
              >
                <Pinterest />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <span className="devider"></span>
      <div className="footer__policy">
        <p className="footer__policy__p">
          © 2019 Digital Project. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
