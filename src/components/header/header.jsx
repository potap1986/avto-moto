import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <a href="avto-moto.com" className="header__logo">
          <svg width="55" height="55">
            <use xlinkHref="#logo"/>
          </svg>
          <div className="header__logo-text">
            <p>AVTO</p>
            <span>MOTO</span>
          </div>
        </a>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="avto-moto.com" className="header__nav-link">
                  Автомобили
              </a>
            </li>
            <li className="header__nav-item">
              <a href="avto-moto.com" className="header__nav-link">
                  Контакты
              </a>
            </li>
            <li className="header__nav-item">
              <a href="avto-moto.com" className="header__nav-link">
                  Услуги
              </a>
            </li>
            <li className="header__nav-item">
              <a href="avto-moto.com" className="header__nav-link">
                  Вакансии
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;