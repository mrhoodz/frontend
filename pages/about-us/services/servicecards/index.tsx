import React from "react";
import style from "./style.module.scss";

interface serviceCardsProps {
  id: number;
  p: string;
  image: string;
}

export default function ServiceCards({ data }: any) {
  return (
    <>
      {data.map((item: serviceCardsProps) => (
        <div key={Math.random()} className={style.serviceCard}>
          <img
            className={style.serviceCardImage}
            src={`/resized/${item.image}`}
            alt="services image goes here"
          />
          <p className={style.serviceCardInfo}>{item.p}</p>
        </div>
      ))}
    </>
  );
}
