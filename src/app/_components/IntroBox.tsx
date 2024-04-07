import { useState } from "react";
import { useScrollText } from "../_Hooks/Text-Scrool-Effect";
import { HeadingIntroTypewriter, TextIntroTypewriter } from "./Typing-Effect";

export default function Greet() {
  const { posY } = useScrollText();

  return (
    <>
      <div
        className="flex flex-col greet-text-wrapper z-20 flex items-center "
        style={{ transform: `translateY(-${posY}px)` }}
      >
        <div className="flex flex-col">
          {/* <h1 className="greet-text text-white font-bold text-7xl"> Hey👋!!</h1> */}
          <HeadingIntroTypewriter />
          <h1 className="greet-text text-white font-bold text-6xl">
            I'&apos;'m Nishchit
          </h1>
        </div>

        {/* <span className="typewriter greet-text text-white font-bold text-3xl"></span> */}
        <TextIntroTypewriter />
      </div>
    </>
  );
}
