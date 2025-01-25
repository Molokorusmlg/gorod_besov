import style from "./style.module.scss";
import cn from "classnames";
import * as React from "react";

interface ILoadingProps {
  isLoading: boolean;
}

function Loading({ isLoading }: ILoadingProps) {
  return (
    <div
      className={cn(style.loading, {
        [style.active__loading]: isLoading,
        [style.loading__complete]: !isLoading,
      })}
    >
      <div className={style.loading__circle}>
        <div className={cn(style.cube, style.first)}>
          <span></span>
        </div>
        <div className={cn(style.cube, style.second)}>
          <span></span>
        </div>
        <div className={cn(style.cube, style.third)}>
          <span></span>
        </div>
        <div className={cn(style.cube, style.four)}>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Loading;
