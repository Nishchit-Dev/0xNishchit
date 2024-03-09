import { useEffect, useState } from "react";

export const TextIntroTypewriter = () => {
  const texts = [
    "Welcome",
    "I'm Nishchit",
    "I'm a frontend developer",
    "I'm good at Desigining too.",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDeleting && currentCharIndex <= texts[currentTextIndex].length) {
        setCurrentCharIndex((prev) => prev + 1);
      } else if (isDeleting && currentCharIndex >= 0) {
        setCurrentCharIndex((prev) => prev - 1);
      } else if (
        !isDeleting &&
        currentCharIndex > texts[currentTextIndex].length
      ) {
        setIsDeleting(true);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setCurrentCharIndex(0);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [currentCharIndex, currentTextIndex, isDeleting]);

  return (
    <div className="h-[36px] center typewriter greet-text text-white font-bold text-3xl">
      {texts[currentTextIndex].substring(0, currentCharIndex)}
    </div>
  );
};

export const HeadingIntroTypewriter = () => {
  const hellosInIndianLanguages = [
    "नमस्ते", // Hindi (Namaste)
    "নমস্কার", // Bengali (Nomoshkar)
    // Telugu (Halo)
    // Marathi (Namaskar)
    "வணக்கம்", // Tamil (Vanakkam)
    "ಹಲೋ", // Kannada (Halo)
    // Gujarati (Hello)
    "ഹലോ", // Malayalam (Halo)
    "ହେଲ୍ଲୋ", // Odia (Hello)
  ];
  const texts = [
    "Hey👋!!",
    "नमस्ते",
    "Bonjour",
    "હેલો",
    "Ciao",
    "こんにちは",
    "नमस्कार",
    "Hallo",
    "హలో",
    "Olá",
    "Привет",
    "নমস্কার",
    "안녕하세요",
    "你好",
    "Hallo",
    "Hej",
    "안녕하세요",
    "Hei",
    "Γεια σας",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDeleting && currentCharIndex <= texts[currentTextIndex].length) {
        setCurrentCharIndex((prev) => prev + 1);
      } else if (isDeleting && currentCharIndex >= 0) {
        setCurrentCharIndex((prev) => prev - 1);
      } else if (
        !isDeleting &&
        currentCharIndex > texts[currentTextIndex].length
      ) {
        setIsDeleting(true);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setCurrentCharIndex(0);
      }
    }, 180);

    return () => clearInterval(interval);
  }, [currentCharIndex, currentTextIndex, isDeleting]);

  return (
    <div className="greet-text text-white font-bold text-7xl h-[72px] mb-5">
      {texts[currentTextIndex].substring(0, currentCharIndex)}
    </div>
  );
};
