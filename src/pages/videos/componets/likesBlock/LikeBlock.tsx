import { useState, useCallback } from "react";
import style from "./style.module.scss";
import LikeSVG from "../../../../assets/img/Like.svg";
import LikeClickedSVG from "../../../../assets/img/LikeClicked.svg";
import cn from "classnames";
import { API_URL } from "../../../../constants";
import * as React from "react";

interface ILikeBlock {
  likes: number;
  id: number;
}

function LikeBlock({ likes, id }: ILikeBlock) {
  const [isLikedLike, setIsLikedLike] = useState(false);
  const [isLikedDisLike, setIsLikedDisLike] = useState(false);

  const updateLikes = useCallback(async () => {
    const response = await fetch(`${API_URL}${id}/comments`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: isLikedLike ? likes - 1 : likes + 1,
      }),
    });
    const data = await response.json();
    console.log(data);
  }, [isLikedLike, isLikedDisLike]);

  const changeLikeImg = useCallback(() => {
    if (isLikedDisLike) {
      setIsLikedDisLike((prev) => !prev);
      setIsLikedLike((prev) => !prev);
    } else {
      setIsLikedLike((prev) => !prev);
    }
  }, [isLikedDisLike, isLikedLike]);

  const changeDisLikeImg = useCallback(() => {
    if (isLikedLike) {
      setIsLikedDisLike((prev) => !prev);
      setIsLikedLike((prev) => !prev);
    } else {
      setIsLikedDisLike((prev) => !prev);
    }
    updateLikes();
  }, [updateLikes]);

  return (
    <div className={style.info__likes}>
      <div className={style.info__likes__grade} onClick={changeLikeImg}>
        <img
          className={style.info__likes__img}
          src={isLikedLike ? LikeClickedSVG : LikeSVG}
          alt="like this video"
        />
        <p className={style.info__likes__couter}>{likes || "0"}</p>
      </div>
      <div className={style.info__dislike} onClick={changeDisLikeImg}>
        <img
          className={cn(style.info__likes__img, {
            [style.reverse]: true,
          })}
          src={isLikedDisLike ? LikeClickedSVG : LikeSVG}
          alt="like this video"
        />
      </div>
    </div>
  );
}

export default LikeBlock;
