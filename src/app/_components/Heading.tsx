import { useEffect, useState } from "react";
import { useScrollText } from "../_Hooks/Text-Scrool-Effect";

const Heading = ({
  title,
  initialPoint,
  initialMarkup,
}: {
  title: string;
  initialMarkup: number;
  initialPoint: number;
}) => {
  const { posY } = useScrollText();
  const [width, setWidth] = useState("0%");
  useEffect(() => {
    const handleScroll = () => {
      const IconStar = document.querySelectorAll(".starIcon");

      const scrollY = posY || 0;
      IconStar.forEach((e: any) => {
        let scrollValue = scrollY * 0.3;
        e.style.transition = "transform 0s ease";
        e.style.transform = `rotateZ(${scrollValue}deg)`;
        if (scrollValue < initialPoint) {
          let divider = initialPoint/(10 - initialMarkup);
          
          if (scrollValue / divider < 40) {
            setWidth((scrollValue*initialMarkup / divider).toFixed(2).toString() + "%");
          }
        }
      });
    };
    handleScroll();
  }, [posY]);
  return (
    <div
      className={`flex flex-row flex-1  items-center w-[100%] justify-center gap-2`}
    >
      <div style={{ width: width }} className={`h-[1px] bg-white`}></div>
      <div className="flex flex-row items-center gap-2  bg-black  rounded-full  px-2 py-2">
        <img
          src="/star.svg"
          color="white"
          className="starIcon"
          width={"27px"}
        />
        <h1 className=" font-semibold text-2xl text-white">{title}</h1>
      </div>

      <div style={{ width: width }} className={` h-[1px] bg-white`}></div>
    </div>
  );
};

export default Heading;
