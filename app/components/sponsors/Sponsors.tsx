import React from "react";
import styles from "./Sponsors.module.css";
import img1 from "../../../public/images/gore.png";
import img2 from "../../../public/images/mevelin.png";
import img3 from "../../../public/images/Newmont.png";
import img4 from "../../../public/images/newalac.jpg";
import img5 from "../../../public/images/gore.png";
import img6 from "../../../public/images/mevelin.png";
import img7 from "../../../public/images/Newmont.png";
import img8 from "../../../public/images/newalac.jpg";
import img9 from "../../../public/images/gore.png";
import img10 from "../../../public/images/mevelin.png";
import img11 from "../../../public/images/Newmont.png";
import img12 from "../../../public/images/newalac.jpg";
import { StaticImageData } from "next/image";

export const Sponsors: React.FC = () => {
  const images: StaticImageData[] = [img1, img2, img3, img4,img5,img6,img7,img8,img9,img10,img11,img12];

  return (
    <div className={styles["container-sponsors"]}>
      <h1 className={styles["text-title"]}>LLEGAMOS GRACIAS A:</h1>
      <div className={styles.slider}>
        <div className={styles["slide-track"]}>
          {images.map((image, index) => (
            <div className={styles.slide} key={index}>
              <img
                className={styles.image}
                src={image.src}
                alt={`sponsors${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sponsors;
