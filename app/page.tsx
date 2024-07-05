import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="container">
   
      <button id="prev-btn">
        <FaArrowCircleLeft size={28} fill="#636363" />
      </button>
      <div id="book" className="book">
        <div id="p1" className="paper">
          <div className="front">
            <div id="f1" className="front-content">
              <h1>Front 1</h1>
            </div>
          </div>
          <div className="back">
            <div id="b1" className="back-content">
              <h1>Back 1</h1>
            </div>
          </div>
        </div>

        {/* Paper 2 */}

        <div id="p1" className="paper">
          <div className="front">
            <div id="f1" className="front-content">
              <h1>Front 2</h1>
            </div>
          </div>
          <div className="back">
            <div id="b1" className="back-content">
              <h1>Back 2</h1>
            </div>
          </div>
        </div>

        {/* Paper 2 */}

        <div id="p1" className="paper">
          <div className="front">
            <div id="f1" className="front-content">
              <h1>Front 3</h1>
            </div>
          </div>
          <div className="back">
            <div id="b1" className="back-content">
              <h1>Back 3</h1>
            </div>
          </div>
        </div>
        
      </div>

      <button id="next-btn">
        <FaArrowCircleRight size={28} fill="#636363" />
      </button>

      <div style={{width:"50px", height:"50px", background:"red"}}>qr</div>
    </div>
  );
}
