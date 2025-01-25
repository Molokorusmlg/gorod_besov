import InfoBlock from "../infoBlock/InfoBlock";
import style from "./style.module.scss";
import City1 from "../../../../assets/img/City1.jpg";
import City2 from "../../../../assets/img/City2.jpg";
import City3 from "../../../../assets/img/City3.jpg";
import * as React from "react";

function InfoAboutCity() {
  return (
    <div className={style.info__container}>
      <div className={style.info__wrapper}>
        <div className={style.info__title__block}>
          <h1 className={style.info__title}>Изучите наш город!</h1>
          <div className={style.info__title__line}>
            <span></span>
          </div>
        </div>
      </div>

      <div className={style.info__blocks}>
        <InfoBlock
          text={
            "Третий по площади и четвёртый по численности населения город-миллионер в России, административный центр Уральского федерального округа и Свердловской области. Образует муниципальное образование город Екатеринбург со статусом городского округа. Один из крупнейших экономических, научных, образовательных, религиозных, культурных и спортивных центров России."
          }
          img={City1}
          orientation="normal"
        />
        <InfoBlock
          text={
            "В Екатеринбурге насчитывается более 50 торговых центров, которые предлагают разнообразные услуги и товары. Среди них можно выделить крупные комплексы, такие как Гринвич, Мега, Алатырь и Космос"
          }
          img={City2}
          orientation="reverse"
        />
        <InfoBlock
          text={
            "Екатеринбург расположен в центре России, на восточном склоне Урала, в пределах Свердловской области. Город находится на границе Европы и Азии, что делает его важным транспортным узлом. Он расположен примерно в 1660 километрах к востоку от Москвы и в 1300 километрах к западу от Владивостока. Екатеринбург является административным центром Уральского федерального округа"
          }
          img={City3}
          orientation="normal"
        />
      </div>
    </div>
  );
}

export default InfoAboutCity;
