"use client";
import "./input.css";
import { BoxesCore } from "./_components/Background-Boxes";
import Greet from "./_components/IntroBox";
import { useEffect, useRef, useState } from "react";
import MarqueeEffect from "./_components/Marquee-Effect";
import Blogs from "./_components/Blogs/Blogs";
import Skills from "./_components/Skills/Skills";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

export default function Home() {
  const divRef: any = useRef(null);
  const [scrollValue, setScollValue] = useState(0);
  const [scrollFactor, setScrollFactor] = useState(0.15);
  const [playFlag, setPlayFlag] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (scrollValue > 150 && scrollValue) {
        setScrollFactor(1);
      }
    };
    handleScroll();
    const handlePlay = () => {
      if (!playFlag) {
        setPlayFlag(true);
      }
    };
    window.addEventListener("scroll", handlePlay);
    window.addEventListener("scrollend", () => {
      setPlayFlag(false);
    });
  }, [scrollValue]);

  const style = () => {
    if (scrollValue > 350) {
      return {
        transform: `scale(${1})`,
        transition: "transform 0s ease",
      };
    }
  };

  return (
    <>
      <ReactLenis root>
        <audio loop autoPlay>
          <source src="/sound/bubble-sound.mp3" type="audio/mpeg"></source>
        </audio>
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
          className={` top-[1024px] relative backdrop-blur-xl scale-[${scrollFactor}] ease-linear `}
          // style={style()}
        >
          {/* lvl-1 */}

          <div
            id="lvl2"
            className=" w-full py-9  flex flex-1 h-max  justify-center items-center  top-[50%] left-[50%]"
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
      </ReactLenis>
    </>
  );
}
