import style from "./style.module.scss";
import * as React from "react";

interface IFooterLinkProps {
  text: string;
  img: string;
}

function FooterLink({ text, img }: IFooterLinkProps) {
  return (
    <div className={style.footer__links}>
      <img className={style.footer__links__img} src={img} alt="icon" />
      <div className={style.footer__links__text}>
        <p className={style.footer__links__text__paragraph}>{text}</p>
        <div className={style.footer__links__text__line}>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default FooterLink;
