import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a href="avto-moto.com" className="footer__nav-link">
                Корпоративным клиентам
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="avto-moto.com" className="footer__nav-link">
                Клиентам
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="avto-moto.com" className="footer__nav-link">
                Аренда авто
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="avto-moto.com" className="footer__nav-link">
                Каршеринг
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="avto-moto.com" className="footer__nav-link">
                Как продать авто
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="avto-moto.com" className="footer__nav-link">
                Trade-in
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="avto-moto.com" className="footer__nav-link">
                Test drive
              </a>
            </li>
          </ul>
        </nav>       
      </div>
    </footer>
  );
};

export default Footer;