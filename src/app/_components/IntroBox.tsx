import { useState } from "react";
import { useScrollText } from "../Hooks/Text-Scrool-Effect";

export default function Greet() {
  const { posY } = useScrollText();
  return (
    <>
      <div
        className="greet-text-wrapper z-20 flex items-center "
        style={{ transform: `translateY(-${posY}px)` }}
      >
        <h1 className="greet-text text-white font-bold text-7xl"> Hey👋!!</h1>

        <h1 className="greet-text text-white font-bold text-6xl">
          I&apos;m Nishchit
        </h1>
      </div>
    </>
  );
}
