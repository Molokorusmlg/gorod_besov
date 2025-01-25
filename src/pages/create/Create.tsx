import style from "./style.module.scss";
import Header from "../../componets/header/Header";
import Footer from "../../componets/footer/Footer";
import CreateForm from "./createForm/CreateForm";
import * as React from "react";

function Create() {
  return (
    <main>
      <Header />
      <section className={style.create}>
        <CreateForm />
      </section>
      <Footer />
    </main>
  );
}

export default Create;
