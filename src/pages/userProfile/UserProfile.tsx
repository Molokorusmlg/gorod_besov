import style from "./style.module.scss";
import Header from "../../componets/header/Header";
import Footer from "../../componets/footer/Footer";
import UserInfoBlock from "./components/userInfoBlock/UserInfoBlock";
import Loading from "../../componets/loading/Loading";
import { useState } from "react";
import * as React from "react";

function UserProfile() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <main className={style.user__main}>
      <Header />
      <section className={style.user}>
        <UserInfoBlock setIsLoading={setIsLoading} />
      </section>
      <Footer />
      <Loading isLoading={isLoading} />
    </main>
  );
}

export default UserProfile;
