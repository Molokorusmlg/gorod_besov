import style from "./style.module.scss";

function NotFoundBlock() {
  return (
    <div className={style.not__found}>
      <h1 className={style.not__found__title}>Not found</h1>
    </div>
  );
}

export default NotFoundBlock;
