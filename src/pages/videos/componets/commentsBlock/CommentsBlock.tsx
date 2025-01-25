import style from "./style.module.scss";
import Comment from "../comment/Comment";
import { useState, useEffect, useCallback } from "react";
import { API_URL } from "../../../../constants";
import * as React from "react";
import { IComment } from "../comment/Comment";

interface ICommentBlock {
  id: number;
}

function CommentsBlock({ id }: ICommentBlock) {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(false);

  const fetchComments = useCallback(async () => {
    setError(false);
    try {
      const response = await fetch(`${API_URL}${id}/comments`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }, [id]);

  const createComment = useCallback(async () => {
    const usernameElement = document.getElementById(
      "username"
    ) as HTMLInputElement;
    const textElement = document.getElementById(
      "comment"
    ) as HTMLTextAreaElement;
    const avatarElement = document.getElementById("avatar") as HTMLInputElement;

    if (!usernameElement || !textElement || !avatarElement) return;

    const username = usernameElement.value;
    const text = textElement.value;
    const avatar = avatarElement.value;

    if (username === "" || text === "" || avatar === "") return;

    try {
      const response = await fetch(`${API_URL}${id}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          text: text,
          avatar: avatar,
          videoId: id,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      fetchComments();
    } catch (error) {
      console.error("Error:", error);
    }
  }, [id, fetchComments]);
  useEffect(() => {
    fetchComments();
  }, [id]);

  return (
    <div className={style.comments}>
      <div className={style.comments__write}>
        <form className={style.comments__write__form}>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            className={style.comments__write__form__input}
            required
          />
          <label htmlFor="avatar">Avatar:</label>
          <input
            type="text"
            id="avatar"
            placeholder="Enter avatar URL"
            className={style.comments__write__form__input}
            required
          />
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            className={style.comments__write__form__textarea}
            placeholder="Enter your comment"
            required
          />
          <button type="button" onClick={createComment}>
            send
          </button>
        </form>
      </div>

      {error ? (
        <p>No comments</p>
      ) : (
        comments.map((comment: IComment) => (
          <Comment
            key={comment.id}
            text={comment.text}
            username={comment.username}
            avatar={comment.avatar}
            id={comment.id}
            videoId={id}
          />
        ))
      )}
    </div>
  );
}
export default CommentsBlock;
