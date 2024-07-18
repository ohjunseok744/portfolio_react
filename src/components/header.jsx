import React from 'react';


const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <div className="header__logo-main">PORTFOLIO</div>
        <div className="header__logo-sub">VITE</div>
      </div>
      <nav className="header__nav">
        <a className="header__nav-item" href="#intro">INTRO</a>
        <a className="header__nav-item" href="#skill">SKILL</a>
        <a className="header__nav-item" href="#site">SITE</a>
        <a className="header__nav-item" href="#portfolio">PORTFOLIO</a>
        <a className="header__nav-item" href="#contact">CONTACT</a>
      </nav>
    </header>
  );
};

export default Header;
