import React from 'react';
import './footer.scss';

const Footer = () => {
  const footer_links = [
    {
      name: "Корпоративным клиентам",
      href: "avto-moto.com"
    },
    {
      name: "Клиентам",
      href: "avto-moto.com"
    },
    {
      name: "Аренда авто",
      href: "avto-moto.com"
    },
    {
      name: "Каршеринг",
      href: "avto-moto.com"
    },
    {
      name: "Как продать авто",
      href: "avto-moto.com"
    },
    {
      name: "Trade-in",
      href: "avto-moto.com"
    },
    {
      name: "Test drive",
      href: "avto-moto.com"
    }
  ]
  
  return (
    <footer className="footer">
      <div className="footer__container container">
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            {footer_links.map((link, index) => (
              <li 
                key={link.name + index}
                className="footer__nav-item"
              >
                <a href={link.href} className="footer__nav-link">
                    {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>       
      </div>
    </footer>
  );
};

export default Footer;