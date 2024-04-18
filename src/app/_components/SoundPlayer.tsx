import { MutableRefObject, useEffect, useRef } from "react";
import { useScrollText } from "../_Hooks/Text-Scrool-Effect";

export const SoundPlayer = () => {
  const { posY } = useScrollText();
  const audioRef = useRef<HTMLAudioElement>(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  useEffect(() => {
    playSound()
  }, [posY]);
  return (
    <>
      <button onClick={playSound}>Play Sound</button>
      <audio ref={audioRef}>
        <source src="/sound/bubblepop.mp3" type="audio/mpeg"></source>
      </audio>
    </>
  );
};
