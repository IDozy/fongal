/*
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
      prevBtn.style.transform = "translateX(-230px)";
      nextBtn.style.transform = "translateX(230px)";
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
    <div className="box">
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
    </div>
  );
}*/
/*
"use client";
import { useEffect, useRef, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

interface Paper {
  id: number;
  front: string;
  back: string;
  element: HTMLDivElement | null;
}

export default function Home() {
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);
  const [papers, setPapers] = useState<Paper[]>([
    { id: 1, front: "Front 1", back: "Back 1", element: null },
    { id: 2, front: "Front 2", back: "Back 2", element: null },
    { id: 3, front: "Front 3", back: "Back 3", element: null },
    { id: 4, front: "Front 4", back: "Back 4", element: null },
    { id: 5, front: "Front 5", back: "Back 5", element: null },
    { id: 6, front: "Front 6", back: "Back 6", element: null },
    { id: 7, front: "Front 7", back: "Back 7", element: null },
    // Add more papers here...
  ]);

  useEffect(() => {
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;
    const book = bookRef.current;

    let currentLocation = 1;
    const maxLocation = papers.length + 1;

    const goNextPage = () => {
      console.log(currentLocation);
      if (currentLocation < maxLocation) {
        const paper = papers[currentLocation - 1];
        if (paper.id === 1) {
          openBook();
        }
        if (paper && paper.element) {
          paper.element.classList.add("flipped");
          paper.element.style.zIndex = `${paper.id}`;
        }
        if (paper.id === papers.length) {
          closeBook(false);
        }
        currentLocation++;
      }
    };

    const goPrevPage = () => {
      if (currentLocation > 1) {
        const paper = papers[currentLocation - 2];
        if (paper.id === 1) {
          closeBook(true);
        }
        if (paper && paper.element) {
          paper.element.classList.remove("flipped");
          paper.element.style.zIndex = `${papers.length - paper.id}`;
        }
        if (paper.id === papers.length) {
          openBook();
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
  }, [papers]);

  const openBook = () => {
    const book = bookRef.current;
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;

    if (book && prevBtn && nextBtn) {
      book.style.transform = "translateX(50%)";
      prevBtn.style.transform = "translateX(-230px)";
      nextBtn.style.transform = "translateX(230px)";
    }
  };

  const closeBook = (isAtBeginning?: boolean) => {
    console.log("hola");
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
    <div className="box">
      <div className="container">
        <button ref={prevBtnRef} id="prev-btn">
          <FaArrowCircleLeft size={28} fill="#636363" />
        </button>
        <div ref={bookRef} id="book" className="book">
          {papers.map((paper, index) => (
            <div
              key={paper.id}
              ref={(element) => {
                if (element) {
                  paper.element = element;
                }
              }}
              id={`p${paper.id}`}
              style={{ zIndex: `${papers.length - paper.id}` }}
              className="paper"
            >
              <div className="front">
                <div className="front-content">
                  <h1>{paper.front}</h1>
                </div>
              </div>
              <div className="back">
                <div className="back-content">
                  <h1>{paper.back}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button ref={nextBtnRef} id="next-btn">
          <FaArrowCircleRight size={28} fill="#636363" />
        </button>
      </div>
    </div>
  );
}
*/
"use client";
import { useEffect, useRef, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

interface Paper {
  id: number;
  front: string;
  back: string;
}

export default function Home() {
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);
  const [currentLocation, setCurrentLocation] = useState(1);

  const papers: Paper[] = [
    { id: 1, front: "QR", back: "1" },
    { id: 2, front: "1", back: "2" },
    { id: 3, front: "2", back: "3" },
    { id: 4, front: "3", back: "4" },
    { id: 5, front: "4", back: "5" },
    { id: 6, front: "5", back: "6" },
    { id: 7, front: "6", back: "7" },
    { id: 8, front: "7", back: "8" },
    { id: 9, front: "8", back: "Fin" },
  ];

  const paperRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;
    const book = bookRef.current;
    const maxLocation = papers.length + 1;

    const goNextPage = () => {
      if (currentLocation < maxLocation) {
        const paper = paperRefs.current[currentLocation - 1];
        if (paper) {
          if (currentLocation === 1) openBook();
          paper.classList.add("flipped");
          paper.style.zIndex = `${currentLocation}`;
          if (currentLocation === papers.length) closeBook(false);
          setCurrentLocation(currentLocation + 1);
        }
      }
    };

    const goPrevPage = () => {
      if (currentLocation > 1) {
        const paper = paperRefs.current[currentLocation - 2];
        if (paper) {
          if (currentLocation === 2) closeBook(true);
          paper.classList.remove("flipped");
          paper.style.zIndex = `${papers.length - (currentLocation - 1)}`;
          if (currentLocation === papers.length + 1) openBook();
          setCurrentLocation(currentLocation - 1);
        }
      }
    };

    prevBtn?.addEventListener("click", goPrevPage);
    nextBtn?.addEventListener("click", goNextPage);

    return () => {
      prevBtn?.removeEventListener("click", goPrevPage);
      nextBtn?.removeEventListener("click", goNextPage);
    };
  }, [currentLocation, papers]);

  const openBook = () => {
    const book = bookRef.current;
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;

    if (book && prevBtn && nextBtn) {
      book.style.transform = "translateX(50%)";
      prevBtn.style.transform = "translateX(-230px)";
      nextBtn.style.transform = "translateX(230px)";
    }
  };

  const closeBook = (isAtBeginning?: boolean) => {
    const book = bookRef.current;
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;

    if (book && prevBtn && nextBtn) {
      book.style.transform = isAtBeginning ? "translateX(0%)" : "translateX(100%)";
      prevBtn.style.transform = "translateX(0px)";
      nextBtn.style.transform = "translateX(0px)";
    }
  };

  return (
    <div className="box">
      <div className="container">
        <button ref={prevBtnRef} id="prev-btn">
          <FaArrowCircleLeft size={28} fill="#636363" />
        </button>
        <div ref={bookRef} id="book" className="book">
          {papers.map((paper, index) => (
            <div
              key={paper.id}
              ref={(element) => {
                paperRefs.current[index] = element;
              }}
              id={`p${paper.id}`}
              style={{ zIndex: `${papers.length - paper.id}` }}
              className="paper"
            >
              <div className="front">
                <div className="front-content">
                  <h1>{paper.front}</h1>
                </div>
              </div>
              <div className="back">
                <div className="back-content">
                  <h1>{paper.back}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button ref={nextBtnRef} id="next-btn">
          <FaArrowCircleRight size={28} fill="#636363" />
        </button>
      </div>
    </div>
  );
}
