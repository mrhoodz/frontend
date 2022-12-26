import React from "react";
import style from "./style.module.scss";

export default function ImageItem({ data }: any) {
  interface imageDataProps {
    id: number;
    src: string;
  }

// console.log(data)

  return (
    <>
      {data.map((item: any, index: any) => (
          <img
            key={index}
            className={style.img}
            src={`http://localhost:1337${item.attributes.url}`}
            alt="image goes here"
          />
      ))}
    </>
  );
}
