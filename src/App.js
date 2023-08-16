import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/all';
import { useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useLayoutEffect(() => {
    ScrollSmoother.create({
      wrapper: '.wrapper',
      content: '.content',
      smooth: 1.5,
      effects: true,
    });

    gsap.fromTo(
      '.hero',
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: '.hero',
          start: 'center',
          end: 'bottom',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.about__img-wrapper',
      { x: -150, opacity: 0 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: '.about__img-wrapper',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.trigger_1',
      { x: 150, opacity: 0 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: '.tasks',
          end: 'top 150px',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.contactUs__form',
      { x: -100, opacity: 0 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: '.contactUs',
          end: 'top -100px',
          scrub: true,
        },
      }
    );

    let leftImage = gsap.utils.toArray('.scroll-left');
    leftImage.forEach(img => {
      gsap.fromTo(
        img,
        { x: -120, opacity: 0 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: img,
            end: 'top center',
            scrub: true,
          },
        }
      );
    });

    let rightImage = gsap.utils.toArray('.scroll-right');
    rightImage.forEach(img => {
      gsap.fromTo(
        img,
        { x: 50, opacity: 0 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: img,
            end: 'top center',
            scrub: true,
          },
        }
      );
    });

    gsap.fromTo(
      '.scroll-center',
      { y: 100, opacity: 0 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: '.scroll-center',
          end: 'top 430px',
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
