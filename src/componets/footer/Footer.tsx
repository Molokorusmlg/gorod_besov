import FooterLink from "./components/footerLink/FooterLink";
import style from "./style.module.scss";
import TG_LOGO from "@assets/img/telegram.png";
import VK_LOGO from "@assets/img/VkIcon.png";
import TickTock from "@assets/img/TickTock.webp";
import { Link } from "react-router-dom";
import * as React from "react";

function Footer() {
  return (
    <div className={style.footer}>
      <a href="#top" className={style.footer__logo}>
        <p className={style.footer__logo__text}>Город бесов</p>
        <div className={style.footer__logo__line}>
          <span></span>
        </div>
      </a>

      <div className={style.footer__links__block}>
        <FooterLink text={"телеграмм"} img={TG_LOGO} />
        <FooterLink text={"вконтакте"} img={VK_LOGO} />
        <FooterLink text={"тик-ток"} img={TickTock} />
      </div>

      <Link to={"/allvideo"} className={style.footer__button}>
        <p className={style.footer__button__text}>Подробнее</p>
      </Link>
    </div>
  );
}

export default Footer;
