import { useEffect, useState } from "react";
import { TextIntroTypewriter } from "../_components/Typing-Effect";
import { useLenis } from "@studio-freight/react-lenis";

export const useScrollText = () => {
  const [posY, setScollValue] = useState(0);
  const lenis = useLenis(({ scroll }) => {
    setScollValue(scroll);
  });

  return { posY };
};
