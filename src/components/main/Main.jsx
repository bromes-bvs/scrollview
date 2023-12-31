import React, { useRef, useState } from 'react';

import heroImg from '../../assets/images/Rectangle 1.png';
import heroImgSecond from '../../assets/images/achitecture-wallpaper.jpg';
import aboutImg1 from '../../assets/images/Rectangle 2.png';
import aboutImg2 from '../../assets/images/Rectangle 3.png';
import aboutImg3 from '../../assets/images/Rectangle 4.png';
import numberOne from '../../assets/images/number_1.png';
import numberTwo from '../../assets/images/number_2.png';
import projectImg1 from '../../assets/images/image 1.png';
import projectImg2 from '../../assets/images/image 2.png';
import projectImg3 from '../../assets/images/image 3.png';
import projectImg4 from '../../assets/images/image 4.png';
import contsctImg from '../../assets/images/ContactUs.png';

import { ReactComponent as ArrowLeft } from '../../assets/logo/arrow-2-left-long.svg';
import { ReactComponent as ArrowRight } from '../../assets/logo/arrow-2-right-long.svg';
import { ReactComponent as Line } from '../../assets/logo/Line 3.svg';

const Main = () => {
  const [index, setIndex] = useState('01');
  const first = useRef();
  const second = useRef();

  const toggleImage = i => {
    setIndex(i);

    first.current.classList.toggle('translate');
    second.current.classList.toggle('translate');
  };

  return (
    <main>
      <section className="hero section">
        <div className="hero__titel-wrapper">
          <h1 data-speed="1.2" className="hero__title">
            PROJECT <span className="hero__title--view">HOME</span>
          </h1>
          <div className="hero__arrow-wrapper">
            <button
              type="button"
              disabled={index === '01'}
              className="hero__arrow-button"
              onClick={() => toggleImage('01')}
            >
              <ArrowLeft />
            </button>
            <button
              type="button"
              disabled={index === '02'}
              className="hero__arrow-button"
              onClick={() => toggleImage('02')}
            >
              <ArrowRight />
            </button>
          </div>
          <div className="hero__counter-wrapper">
            <p style={{ width: '30px' }} className="hero__counter">
              {index}
            </p>
            <Line />
            <p className="hero__counter">02</p>
          </div>
        </div>
        <div data-speed="0.9" className="hero__img-wrapper">
          <img ref={first} className="hero__img" src={heroImg} alt="Build" />
          <img
            ref={second}
            className="hero__img"
            src={heroImgSecond}
            alt="Build"
          />
          <button type="button">
            ВЗГЛЯНУТЬ <ArrowRight />
          </button>
        </div>
      </section>
      <section className="about section">
        <div className="about__img-wrapper">
          <div>
            <img src={aboutImg1} alt="Build aestetic" className="about__img" />
            <img
              src={aboutImg3}
              alt="Build aestetic"
              className="about__img view"
            />
          </div>
          <img src={aboutImg2} alt="Build aestetic" className="about__img " />
        </div>
        <div data-speed="1.2" className="about__title-wrapper">
          <h2 className="about__title">О компании</h2>
          <p className="about__p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button type="button">
            ЧИТАТЬ <ArrowRight />
          </button>
        </div>
      </section>
      <section className="tasks section">
        <h2 className="tasks__title">Основные задачи</h2>
        <div className="tasks__numbers-wrapper">
          <div className="smooth" data-speed="1.1">
            <img className="tasks__img" src={numberOne} alt="Number" />
            <p className="tasks__p">
              Создание комфортных условий и повышение качества обслуживания
              клиентов
            </p>
          </div>
          <div className="trigger_1">
            <img className="tasks__img" src={numberTwo} alt="Number" />
            <p className="tasks__p second">
              Постоянно совершенствовать качество предоставляемых услуг путем
              обучения персонала, закупки нового оборудования и усиленной
              рекламы на рынке
            </p>
          </div>
        </div>
      </section>
      <section className="projects section">
        <h2 className="projects__title">Наши проекты</h2>
        <div className="projects__img-wrapper">
          <div>
            <div className="projects__name-wrapper scroll-left">
              <h3 className="projects__secondary-title">ДОСУГОВЫЙ ЦЕНТР</h3>
              <button>
                ПОДРОБНЕЕ
                <ArrowRight />
              </button>
            </div>
            <img
              className="projects__img scroll-right"
              src={projectImg1}
              alt="Leisure center"
            />
          </div>
          <div>
            <img
              className="projects__img scroll-left"
              src={projectImg2}
              alt="Leisure center"
            />
            <img
              className="projects__img scroll-center"
              src={projectImg3}
              alt="Leisure center"
            />
            <img
              className="projects__img scroll-right"
              src={projectImg4}
              alt="Leisure center"
            />
          </div>
        </div>
        <button type="button">
          ВСЕ ПРОЕКТЫ <ArrowRight />
        </button>
      </section>
      <section className="contactUs section">
        <h2 className="contactUs__title">Связаться с нами</h2>
        <div className="contactUs__content-wrapper">
          <form className="contactUs__form">
            <input type="text" className="contactUs__input" placeholder="Имя" />
            <label className="contactUs__placeinput">
              <input type="number" required className="contactUs__input" />
              <div className="contactUs__input-placeholder">
                Номер телефона<span>*</span>
              </div>
            </label>
            <label className="contactUs__placeinput">
              <input type="text" required className="contactUs__input" />
              <div className="contactUs__input-placeholder">
                E-mail<span>*</span>
              </div>
            </label>

            <input
              type="text"
              className="contactUs__input"
              placeholder="Интересующий товар/услуга"
            />
            <label className="contactUs__placeinput">
              <textarea
                className="contactUs__input"
                cols="30"
                rows="6"
                required
              ></textarea>
              <div className="contactUs__input-placeholder">
                Сообщение<span>*</span>
              </div>
            </label>
            <label htmlFor="policy" className="contactUs__checkbox-label view">
              <input
                className="contactUs__checkbox"
                type="checkbox"
                name="policy"
                id="policy"
              />
              <span className="contactUs__custom-checkbox"></span>
              Отправляя заявку Вы соглашаетесь с политикой конфиденциальности
            </label>
            <button type="submit">
              ОТПРАВИТЬ <ArrowRight />
            </button>
          </form>
          <img
            data-speed="1.2"
            className="contactUs__img"
            src={contsctImg}
            alt="Men call"
          />
        </div>
      </section>
    </main>
  );
};

export default Main;
