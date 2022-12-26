import React from "react";
import style from "./style.module.scss";

export function Vision({}) {
  return (
    <article className={style.article} id="mission-vision">
      <aside className={style.aside} id="mission-statement">
        <h2>OUR MISSION</h2>

        <p className="p-small">
          Our mission is to deliver personalized customer attention and
          efficiency while providing top-quality engineering services. We are
          committed to excellence in everything we do and strive to exceed our
          customers' expectations.
        </p>

        <div className={`hero ${style.img}`} id="img">
          <img
            className={` ${style.heroimg}`}
            src="/resized/pexels-kateryna-babaieva-2760241 (Large).jpg"
            alt="hero image"
          />
        </div>
      </aside>

      <aside className={style.aside} id="mission-statement">
        <h2>OUR VISION</h2>

        <p className="p-small">
          We believe that the sustainable growth of our business is directly
          linked to our involvement in local community upliftment and
          empowerment programs, as well as environmentally friendly initiatives.
          We are dedicated to making a positive impact in the world through our
          work.
        </p>

        <div className={`hero ${style.img}`} id="img">
          <img
            className={` ${style.heroimg}`}
            src="/resized/pexels-pixabay-259984 (Large).jpg"
            alt="hero image"
          />
        </div>
      </aside>
    </article>
  );
}
