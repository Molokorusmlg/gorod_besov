import Header from "../../componets/header/Header";
import HomeBackground from "./components/homeBackground/HomeBackground";
import CityTitle from "./components/cityTitle/CityTitle";
import InfoAboutCity from "./components/infoAboutCity/InfoAboutCity";
import CityMap from "./components/cityMap/CityMap";
import Footer from "../../componets/footer/Footer";
import style from "./style.module.scss";
import * as React from "react";

function HomePage() {
  return (
    <main id="top">
      <Header />
      <section className={style.section__title}>
        <HomeBackground />
        <CityTitle />
      </section>
      <section id="infoSection" className={style.section__info}>
        <InfoAboutCity />
      </section>
      <section className={style.section__map}>
        <CityMap />
      </section>
      <Footer />
    </main>
  );
}

export default HomePage;
