import React from "react";

const Intro = () => {
  return (
    <header className="header">
      <h1 className="header__title">Hey, I'm Jasper 👋🏼</h1>
      <p className="header__subtitle">I’m a Digital Designer and Developer based in Bruges. Currently I am studying Digital Design and Development, a 3-year bachelor's degree part of The Royal Academy of Fine Arts (KASK) and the Royal Conservatory.</p>
      <div className="header__buttons">
        <a className="header__buttons--button" href="mailto:jaspervermeulen@icloud.com" target="_blank" rel="noreferrer">jaspervermeulen@icloud.com</a>
        <a className="header__buttons--button header__buttons--button-margin" href="https://www.linkedin.com/in/jasper-vermeulen-%F0%9F%91%8B%F0%9F%8F%BC-739b88180/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </header>
  )
}

export default Intro;