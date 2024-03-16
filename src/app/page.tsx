"use client";
import "./input.css";
import { BoxesCore } from "./_components/Background-Boxes";
import Greet from "./_components/IntroBox";

import { useEffect, useRef, useState } from "react";
import { useScrollText } from "./_Hooks/Text-Scrool-Effect";
import { clsx } from "clsx";

import MarqueeEffect from "./_components/Marquee-Effect";
import Blogs from "./_components/Blogs/Blogs";
import Skills from "./_components/Skills/Skills";

export default function Home() {
  const { posY } = useScrollText();
  const divRef: any = useRef(null);
  const [lvl2, setLvl2] = useState(0);
  const [scrollFactor, setScrollFactor] = useState(0.75);

  useEffect(() => {
    if (posY > screen.height - 100) {
      divRef.current.focus();
      console.log("auto focused");
      // divRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (posY > screen.height * 2 - 100) {
      divRef.current.focus();
      console.log("auto focused");
      // divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [posY]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollMax = 1000;
      const scrollMin = 100;
      const scroll = window.pageYOffset;
      const thresholdMax = scroll / scrollMax;

      console.log(thresholdMax);
      if (thresholdMax >= 0 && thresholdMax <= 0.3) {
        setScrollFactor(thresholdMax);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* lvl-0 */}
      <div className="fixed w-screen h-screen">
        <div
          className={` h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center `}
        >
          <div className="absoulte overflow-hidden w-full h-full inset-0 bg-slate-900">
            <BoxesCore />

            <div className="flex flex-1 h-screen justify-center items-center top-[50%] left-[50%]  ">
              <Greet />
            </div>
          </div>
          <MarqueeEffect />
        </div>
      </div>
      {/* <div className="bg-slate-900"></div> */}

      <div
        id="lvl2Wrapper"
        className={`top-[1024px] relative backdrop-blur-xl `}
        style={{
          transform: `scale(${scrollFactor + 0.65})`,
          transition: "transform 0.3s ease",
        }}
      >
        {/* lvl-1 */}

        <div
          id="lvl2"
          className=" py-9  flex flex-1 h-max  justify-center items-center  top-[50%] left-[50%]"
          ref={divRef}
        >
          <Blogs />
        </div>
        {/* lvl-2 */}
        <div className={` relative w-full backdrop-blur-xl `}>
          {/* <div className="flex flex-1 justify-center"></div> */}

          <div
            className="flex  items-center top-[50%] left-[50%] justify-center"
            ref={divRef}
          >
            <Skills />
            {/* <h1 className=" text-white">Hello Lvl 2</h1> */}
          </div>
        </div>
      </div>
    </>
  );
}
