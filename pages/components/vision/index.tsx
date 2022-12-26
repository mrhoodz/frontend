import React from "react";
import style from "./style.module.scss"


export default function Vision({}) {
  return (
    <article className={style.vision} id="vision">

<img className={style.img} src="/resized/pexels-pixabay-259984 (Large).jpg" alt="vision image goes here" />

<div className={style.overlay}>over</div>



      <h2 className={style.h2}>"PROFIT, FOR A BETTER FUTURE"</h2>
      <p className={style.p}>Lot Mucavele/ Director</p>
    </article>
  );
}
