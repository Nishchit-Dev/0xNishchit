import { useEffect, useState } from "react";
import { TextIntroTypewriter } from "../_components/Typing-Effect";

export const useScrollText = () => {
  const [posY, setPosY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      console.log("scroll");
      let tempY = window.pageYOffset;
      console.log(tempY);
      setPosY(tempY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { posY };
};
