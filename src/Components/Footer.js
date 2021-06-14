import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer__title">Let's talk!</h2>
      <p className="footer__subtitle">Have an opportunity or just a cool idea? Just send me an email or connect with me on LinkedIn!</p>
      <div className="footer__buttons">
        <a className="footer__buttons--button" href="mailto:jaspervermeulen@icloud.com" rel="noreferrer" target="_blank">jaspervermeulen@icloud.com</a>
        <a className="footer__buttons--button footer__buttons--button-margin" href="https://www.linkedin.com/in/jasper-vermeulen-%F0%9F%91%8B%F0%9F%8F%BC-739b88180/" rel="noreferrer" target="_blank">LinkedIn</a>
      </div>
    </footer>
  )
}

export default Footer;