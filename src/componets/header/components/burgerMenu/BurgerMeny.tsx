import style from "./style.module.scss";
import HeaderLink from "../headerLink/headerLink";
import cn from "classnames";
import * as React from "react";

interface IBurgerMeny {
  isBurgerOpen: boolean;
}

function BurgerMeny({ isBurgerOpen }: IBurgerMeny) {
  return (
    <div
      className={cn(style.header__burger__menu__shadow, {
        [style.shadow__close]: isBurgerOpen,
      })}
    >
      <div
        className={cn(style.header__burger__menu, {
          [style.burger__close]: isBurgerOpen,
        })}
      >
        <HeaderLink namePath="/main" text="Главная" />
        <HeaderLink namePath="/allvideo" text="Достопремечатеьности" />
      </div>
    </div>
  );
}

export default BurgerMeny;
