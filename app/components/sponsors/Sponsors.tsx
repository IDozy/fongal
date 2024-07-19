import React from "react";
import styles from "./Sponsors.module.css";
import img1 from "../../../public/images/AGPSEMILLAS.png";
import img2 from "../../../public/images/AGRORURAL.png";
import img3 from "../../../public/images/AGROVET.png";
import img4 from "../../../public/images/CUSQUEÑA LOGO.png";
import img5 from "../../../public/images/DIRCETUR .png";
import img6 from "../../../public/images/DRAC.png";
import img7 from "../../../public/images/FERREYROS.png";
import img8 from "../../../public/images/Foncreagro.png";
import img9 from "../../../public/images/FONGAL.png";
import img10 from "../../../public/images/FONGALWP.jpeg";
import img11 from "../../../public/images/GLORIA.png";
import img12 from "../../../public/images/gold-fields-logo.png";
import img13 from "../../../public/images/gore.png";
import img14 from "../../../public/images/GRANJAPORCON.png";
import img15 from "../../../public/images/GRUPOLURDIS.png";
import img16 from "../../../public/images/HOTELPEROLITOS.png";
import img17 from "../../../public/images/INIA.png";
import img18 from "../../../public/images/LOGO CLNICA LIMATAMBO.png";
import img19 from "../../../public/images/LOGO FONGAL.png";
import img20 from "../../../public/images/LOGO_HOTEL RUIZ.png";
import img21 from "../../../public/images/LOGO_INMOBILIARIA RUIZ.png";
import img22 from "../../../public/images/LOGO-NUEVO OF2.png";
import img23 from "../../../public/images/MinAgrario.png";
import img24 from "../../../public/images/newalac.png";
import img25 from "../../../public/images/RW.png";
import img26 from "../../../public/images/SEMEX.png";
import img27 from "../../../public/images/SENASA.png";
import img28 from "../../../public/images/Swissgenetics logo.png";
import img29 from "../../../public/images/TOTALVET.png";
import img30 from "../../../public/images/VETEX.png";
import Image, { StaticImageData } from "next/image";

const images: { src: StaticImageData, width: number, height: number }[] = [
  { src: img1, width: 200, height: 200 }, // reemplaza con las dimensiones reales
  { src: img2, width: 200, height: 200 },
  { src: img3, width: 200, height: 200 },
  { src: img4, width: 200, height: 200 },
  { src: img5, width: 200, height: 200 },
  { src: img6, width: 200, height: 200 },
  { src: img7, width: 200, height: 200 },
  { src: img8, width: 200, height: 200 },
  { src: img9, width: 200, height: 200 },
  /* { src: img10, width: 200, height: 200 }, */
  { src: img11, width: 200, height: 200 },
  { src: img12, width: 200, height: 200 },
  { src: img13, width: 200, height: 200 },
  { src: img14, width: 200, height: 200 },
  { src: img15, width: 200, height: 200 },
  { src: img16, width: 200, height: 200 },
  { src: img17, width: 200, height: 200 },
  { src: img18, width: 200, height: 200 },
  { src: img19, width: 200, height: 200 },
  { src: img20, width: 200, height: 200 },
  { src: img21, width: 200, height: 200 },
  { src: img22, width: 200, height: 200 },
  { src: img23, width: 200, height: 200 },
  { src: img24, width: 200, height: 200 },
  { src: img25, width: 200, height: 200 },
  { src: img26, width: 200, height: 200 },
  { src: img27, width: 200, height: 200 },
  { src: img28, width: 200, height: 200 },
  { src: img29, width: 200, height: 200 },
  { src: img30, width: 200, height: 200 }
];


export const Sponsors: React.FC = () => {
  return (
    <div className={styles["container-sponsors"]}>
      <h1 className={styles["text-title"]}> GRACIAS A:</h1>
      <div className={styles.slider}>
        <div className={styles["slide-track"]}>
          {images.map((image, index) => (
            <div className={styles.slide} key={index}>
              <Image
                className={styles.image}
                src={image.src}
                alt={`sponsors${index + 1}`}
                width={image.width}
                height={image.height}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;

/* export const Sponsors: React.FC = () => {
  const images: StaticImageData[] = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12,
    img13, img14, img15, img16, img17, img18, img19, img20, img21, img22,
    img23, img24, img25, img26, img27, img28, img29, img30
  ];

  return (
    <div className={styles["container-sponsors"]}>
      <h1 className={styles["text-title"]}> GRACIAS A:</h1>
      <div className={styles.slider}>
        <div className={styles["slide-track"]}>
          {images.map((image, index) => (
            <div className={styles.slide} key={index}>
              <Image
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
}; */
/*otro code sin error de imagen*/
