import React from 'react';
import './header.scss';

const Header = () => {
  const headerLinks = [
    {
      name: "Автомобили",
      href: "avto-moto.com"
    },
    {
      name: "Контакты",
      href: "avto-moto.com"
    },
    {
      name: "Услуги",
      href: "avto-moto.com"
    },
    {
      name: "Вакансии",
      href: "avto-moto.com"
    }
  ]

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
            {headerLinks.map((link, index) => (
              <li 
                key={link.name + index}
                className="header__nav-item"
              >
                <a href={link.href} className="header__nav-link">
                    {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;