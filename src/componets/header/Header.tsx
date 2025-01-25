import DefaultUserIcon from "../../assets/img/userDefault.svg";
import BurgerImg from "../../assets/img/Menu.svg";
import style from "./style.module.scss";
import HeaderLink from "./components/headerLink/headerLink.jsx";
import BurgerMeny from "./components/burgerMenu/BurgerMeny.js";
import cn from "classnames";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import * as React from "react";

function Header() {
  const user = useSelector((state: RootState) => state.user);

  const [isBurgerOpen, setIsBurgerOpen] = useState(true);

  const location = useLocation();
  const isLocationVideo =
    location.pathname.match(/^\/videos\/\d+$/) ||
    location.pathname === "/allvideo";

  const handleBurger = () => {
    setIsBurgerOpen((prev) => !prev);
  };

  return (
    <div
      className={cn(style.main__header, {
        [style.main__header__static]: isLocationVideo,
      })}
    >
      <Link to={"/allvideo"} className={style.main__header__title}>
        Город бесов
      </Link>

      <nav className={style.main__header__nav}>
        <HeaderLink namePath={"/main"} text="Главная" />
        <HeaderLink namePath={"/allvideo"} text="Достопримечательности" />
      </nav>

      <div className={style.main__header__burger} onClick={handleBurger}>
        <img
          className={style.main__header__burger__img}
          src={BurgerImg}
          alt="burger img"
        />
      </div>

      <Link to={"/profile"} className={style.main__header__profile}>
        <img
          src={user.avatar ? user.avatar : DefaultUserIcon}
          alt="user avatar"
          className={style.main__header__profile__img}
        />
        <p className={style.main__header__profile__user}>
          {user.firstName ? user.firstName : "Профиль"}
        </p>
      </Link>
      <BurgerMeny isBurgerOpen={isBurgerOpen} />
    </div>
  );
}

export default Header;
