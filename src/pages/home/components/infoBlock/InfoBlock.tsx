import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import cn from "classnames";
import * as React from "react";

interface IInfoBlockProps {
  img: string;
  text: string;
  orientation: string;
}

function InfoBlock({ img, text, orientation }: IInfoBlockProps) {
  const [isVisible, setIsVisible] = useState(false);
  const blockRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentBlock = blockRef.current;

    if (currentBlock) {
      observer.observe(currentBlock);
    }

    return () => {
      if (currentBlock) {
        observer.unobserve(currentBlock);
      }
    };
  }, []);

  const isReversrseOrientation = orientation === "normal";

  const orientationBlockOrientationClass = cn(style.info__block__orientation, {
    [style.orientation__reverse]: !isReversrseOrientation,
  });

  const imgOrientationClass = cn(style.info__block__img, {
    [style.img__reverse]: !isReversrseOrientation,
  });

  const mainBlockOrientationClass = cn(style.info__block, {
    [style.block__reverse]: !isReversrseOrientation,
    [style.block__visible__from__left]: isReversrseOrientation && isVisible,
    [style.block__visible__from__rigth]: !isReversrseOrientation && isVisible,
  });

  return (
    <div className={mainBlockOrientationClass} ref={blockRef}>
      <Link to={"/allvideo"} className={orientationBlockOrientationClass}>
        <img className={imgOrientationClass} src={img} alt="photo_ekb_City1" />
        <p className={style.info__block__text}>{text}</p>
      </Link>
    </div>
  );
}

export default InfoBlock;
