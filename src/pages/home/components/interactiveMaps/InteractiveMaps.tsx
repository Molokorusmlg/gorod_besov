import style from "./style.module.scss";
import cn from "classnames";
import * as React from "react";

interface IInteractiveMaps {
  selectedValue: string;
}

function InteractiveMaps({ selectedValue }: IInteractiveMaps) {
  const squareClass = cn(style.map__block, {
    [style.map__block__visible]: selectedValue === "value-1",
  });

  const ekbCityClass = cn(style.map__block, {
    [style.map__block__visible]: selectedValue === "value-2",
  });

  const GrinvichClass = cn(style.map__block, {
    [style.map__block__visible]: selectedValue === "value-3",
  });

  const PassageClass = cn(style.map__block, {
    [style.map__block__visible]: selectedValue === "value-4",
  });

  const ChurchOnBloodClass = cn(style.map__block, {
    [style.map__block__visible]: selectedValue === "value-5",
  });

  return (
    <div className={style.interactive}>
      <div className={style.interactive__map__bg}>
        <div className={squareClass}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.449109362191!2d60.59446207744229!3d56.83823997350531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e8ab92d9b9f%3A0xa9573fbeb44831e9!2z0L_Quy4gMTkwNSDQs9C-0LTQsCwg0JXQutCw0YLQtdGA0LjQvdCx0YPRgNCzLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC7LiwgNjIwMDE0!5e0!3m2!1sru!2sru!4v1736639475341!5m2!1sru!2sru"
            className={style.map__iframe}
            referrerPolicy="no-referrer-when-downgrade"
            title="Square Map"
          ></iframe>
        </div>
        <div className={ekbCityClass}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=60.590825%2C56.842298&mode=whatshere&whatshere%5Bpoint%5D=60.589599%2C56.843627&whatshere%5Bzoom%5D=17&z=17.13"
            className={style.map__iframe}
            title="Ekaterinburg City Map"
          ></iframe>
        </div>
        <div className={GrinvichClass}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=60.598948%2C56.829104&mode=search&oid=1196007194&ol=biz&z=17.06"
            className={style.map__iframe}
            title="Grinvich Map"
          ></iframe>
        </div>
        <div className={PassageClass}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=60.595803%2C56.836397&mode=search&oid=176334381810&ol=biz&z=17.06"
            className={style.map__iframe}
            title="Passage Map"
          ></iframe>
        </div>
        <div className={ChurchOnBloodClass}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?display-text=%D1%85%D1%80%D0%B0%D0%BC%20%D0%BD%D0%B0%20%D0%BA%D1%80%D0%BE%D0%B2%D0%B8&ll=60.616148%2C56.846029&mode=search&oid=1063218042&ol=biz&sctx=ZAAAAAgBEAAaKAoSCentz0VDTE5AEXu8kA4Pa0xAEhIJxT2WPnRBjT8RQndJnBVRcz8iBgABAgMEBSgKOABA15wGSAFqAnJ1nQHNzMw9oAEAqAEAvQGf9LWRggIY0YXRgNCw0Lwg0L3QsCDQutGA0L7QstC4igIAkgIAmgIMZGVza3RvcC1tYXBz&sll=60.616148%2C56.846029&sspn=0.023530%2C0.007766&text=%D1%85%D1%80%D0%B0%D0%BC%20%D0%BD%D0%B0%20%D0%BA%D1%80%D0%BE%D0%B2%D0%B8&z=16.34"
            className={style.map__iframe}
            title="Church on Blood Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
export default InteractiveMaps;
