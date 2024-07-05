/*import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

export default function Home() {
  const prevBtn = document.querySelector("#prev-btn");
  const nextBtn = document.querySelector("#next-btn");
  const book = document.querySelector("#book");

  const paper1 = document.querySelector("#p1");
  const paper2 = document.querySelector("#p2");
  const paper3 = document.querySelector("#p3");

  prevBtn?.addEventListener("click", goPrevPage);
  nextBtn?.addEventListener("click", goNextPage);

  let currentLocaion = 1;
  let numofPapers = 3;
  let maxLocation = numofPapers + 1;

  function openBook() {
    book.style.transform = "translateX(50%)"
  prevBtn.style.transform ="translateX(-180px)"
  nextBtn.style.transform ="translateX(180px)"
  }

  function closeBook(isAtBeginning) {
    if(isAtBeginning){
      book.style.transform = "translateX(0%)"
    }else{
      book.style.transform = "translateX(100%)"
    }
   
    prevBtn.style.transform ="translateX(0px)"
  nextBtn.style.transform ="translateX(0px)"
  }

  function goNextPage() {
    if (currentLocaion < maxLocation) {
      switch (currentLocaion) {
        case 1:
          openBook();
          paper1.classList.add("flipped");
          paper1.style.zIndex = 1
          break
        case 2:
          paper2.classList.add("flipped");
          paper2.style.zIndex = 2
          break
        case 3:
          paper3.classList.add("flipped");
          paper3.style.zIndex = 3
          closeBook();
          break;
        default:
          throw new Error("unknow state");
      }
      currentLocaion++;
    }
  }

  function goPrevPage() {
    if(currentLocaion > 1){
      switch(currentLocaion){
        case 2: closeBook()
        paper1.classList.remove("fliped")
        paper1.style.zIndex = 3
        break
        case 3: 
        paper2.classList.remove("fliped")
        paper2.style.zIndex = 2
        break
        case 4: 
        openBook()
        paper3.classList.remove("fliped")
        paper3.style.zIndex = 1
        default
        throw new Error("uknow ")
      }
      currentLocaion--
    }
  }

  

  return (
    <div className="container">
      <button id="prev-btn">
        <FaArrowCircleLeft size={28} fill="#636363" />
      </button>
      <div id="book" className="book">
        <div id="p1" className="paper flipped ">
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

        {/* Paper 2 *//*

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

        {/* Paper 2 *//*

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

      <div style={{ width: "50px", height: "50px", background: "red" }}>qr</div>
    </div>
  );
}*//*

"use client"
import { useEffect, useRef } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function Home() {
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);
  const paper1Ref = useRef<HTMLDivElement>(null);
  const paper2Ref = useRef<HTMLDivElement>(null);
  const paper3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;
    const book = bookRef.current;
    const paper1 = paper1Ref.current;
    const paper2 = paper2Ref.current;
    const paper3 = paper3Ref.current;

    let currentLocation = 1;
    const numofPapers = 3;
    const maxLocation = numofPapers + 1;

    const goNextPage = () => {
      if (currentLocation < maxLocation) {
        switch (currentLocation) {
          case 1:
            openBook();
            paper1!.classList.add("flipped");
            paper1!.style.zIndex = "1";
            break;
          case 2:
            paper2!.classList.add("flipped");
            paper2!.style.zIndex = "2";
            break;
          case 3:
            paper3!.classList.add("flipped");
            paper3!.style.zIndex = "3";
            closeBook();
            break;
          default:
            throw new Error("unknown state");
        }
        currentLocation++;
      }
    };

    const goPrevPage = () => {
      if (currentLocation > 1) {
        switch (currentLocation) {
          case 2:
            closeBook(true);
            paper1!.classList.remove("flipped");
            paper1!.style.zIndex = "3";
            break;
          case 3:
            paper2!.classList.remove("flipped");
            paper2!.style.zIndex = "2";
            break;
          case 4:
            openBook();
            paper3!.classList.remove("flipped");
            paper3!.style.zIndex = "1";
            break;
          default:
            throw new Error("unknown state");
        }
        currentLocation--;
      }
    };

    prevBtn?.addEventListener("click", goPrevPage);
    nextBtn?.addEventListener("click", goNextPage);

    return () => {
      prevBtn?.removeEventListener("click", goPrevPage);
      nextBtn?.removeEventListener("click", goNextPage);
    };
  }, []);

  const openBook = () => {
    const book = bookRef.current;
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;

    if (book && prevBtn && nextBtn) {
      book.style.transform = "translateX(50%)";
      prevBtn.style.transform = "translateX(-180px)";
      nextBtn.style.transform = "translateX(180px)";
    }
  };

  const closeBook = (isAtBeginning?: boolean) => {
    const book = bookRef.current;
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;

    if (book && prevBtn && nextBtn) {
      if (isAtBeginning) {
        book.style.transform = "translateX(0%)";
      } else {
        book.style.transform = "translateX(100%)";
      }
      prevBtn.style.transform = "translateX(0px)";
      nextBtn.style.transform = "translateX(0px)";
    }
  };

  return (
    <div className="container">
      <button ref={prevBtnRef} id="prev-btn">
        <FaArrowCircleLeft size={28} fill="#636363" />
      </button>
      <div ref={bookRef} id="book" className="book">
        <div ref={paper1Ref} id="p1" className="paper flipped">
          <div className="front">
            <div className="front-content">
              <h1>Front 1</h1>
            </div>
          </div>
          <div className="back">
            <div className="back-content">
              <h1>Back 1</h1>
            </div>
          </div>
        </div>

        <div ref={paper2Ref} id="p2" className="paper">
          <div className="front">
            <div className="front-content">
              <h1>Front 2</h1>
            </div>
          </div>
          <div className="back">
            <div className="back-content">
              <h1>Back 2</h1>
            </div>
          </div>
        </div>

        <div ref={paper3Ref} id="p3" className="paper">
          <div className="front">
            <div className="front-content">
              <h1>Front 3</h1>
            </div>
          </div>
          <div className="back">
            <div className="back-content">
              <h1>Back 3</h1>
            </div>
          </div>
        </div>
      </div>
      <button ref={nextBtnRef} id="next-btn">
        <FaArrowCircleRight size={28} fill="#636363" />
      </button>

      <div style={{ width: "50px", height: "50px", background: "red" }}>qr</div>
    </div>
  );
}
*/

"use client";
import { useEffect, useRef } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function Home() {
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);
  const paper1Ref = useRef<HTMLDivElement>(null);
  const paper2Ref = useRef<HTMLDivElement>(null);
  const paper3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;
    const book = bookRef.current;
    const paper1 = paper1Ref.current;
    const paper2 = paper2Ref.current;
    const paper3 = paper3Ref.current;

    let currentLocation = 1;
    const numOfPapers = 3;
    const maxLocation = numOfPapers + 1;

    const goNextPage = () => {
      if (currentLocation < maxLocation) {
        switch (currentLocation) {
          case 1:
            openBook();
            if (paper1) {
              paper1.classList.add("flipped");
              paper1.style.zIndex = "1";
            }
            break;
          case 2:
            if (paper2) {
              paper2.classList.add("flipped");
              paper2.style.zIndex = "2";
            }
            break;
          case 3:
            if (paper3) {
              paper3.classList.add("flipped");
              paper3.style.zIndex = "3";
              closeBook(false);
            }
            break;
          default:
            throw new Error("unknown state");
        }
        currentLocation++;
      }
    };

    const goPrevPage = () => {
      if (currentLocation > 1) {
        switch (currentLocation) {
          case 2:
            closeBook(true);
            if (paper1) {
              paper1.classList.remove("flipped");
              paper1.style.zIndex = "3";
            }
            break;
          case 3:
            if (paper2) {
              paper2.classList.remove("flipped");
              paper2.style.zIndex = "2";
            }
            break;
          case 4:
            openBook();
            if (paper3) {
              paper3.classList.remove("flipped");
              paper3.style.zIndex = "1";
            }
            break;
          default:
            throw new Error("unknown state");
        }
        currentLocation--;
      }
    };

    prevBtn?.addEventListener("click", goPrevPage);
    nextBtn?.addEventListener("click", goNextPage);

    return () => {
      prevBtn?.removeEventListener("click", goPrevPage);
      nextBtn?.removeEventListener("click", goNextPage);
    };
  }, []);

  const openBook = () => {
    const book = bookRef.current;
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;

    if (book && prevBtn && nextBtn) {
      book.style.transform = "translateX(50%)";
      prevBtn.style.transform = "translateX(-180px)";
      nextBtn.style.transform = "translateX(180px)";
    }
  };

  const closeBook = (isAtBeginning?: boolean) => {
    const book = bookRef.current;
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;

    if (book && prevBtn && nextBtn) {
      if (isAtBeginning) {
        book.style.transform = "translateX(0%)";
      } else {
        book.style.transform = "translateX(100%)";
      }
      prevBtn.style.transform = "translateX(0px)";
      nextBtn.style.transform = "translateX(0px)";
    }
  };

  return (
    <div className="container">
      <button ref={prevBtnRef} id="prev-btn">
        <FaArrowCircleLeft size={28} fill="#636363" />
      </button>
      <div ref={bookRef} id="book" className="book">
        <div ref={paper1Ref} id="p1" className="paper">
          <div className="front">
            <div className="front-content">
              <h1>Front 1</h1>
            </div>
          </div>
          <div className="back">
            <div className="back-content">
              <h1>Back 1</h1>
            </div>
          </div>
        </div>

        <div ref={paper2Ref} id="p2" className="paper">
          <div className="front">
            <div className="front-content">
              <h1>Front 2</h1>
            </div>
          </div>
          <div className="back">
            <div className="back-content">
              <h1>Back 2</h1>
            </div>
          </div>
        </div>

        <div ref={paper3Ref} id="p3" className="paper">
          <div className="front">
            <div className="front-content">
              <h1>Front 3</h1>
            </div>
          </div>
          <div className="back">
            <div className="back-content">
              <h1>Back 3</h1>
            </div>
          </div>
        </div>
      </div>
      <button ref={nextBtnRef} id="next-btn">
        <FaArrowCircleRight size={28} fill="#636363" />
      </button>
    </div>
  );
}
