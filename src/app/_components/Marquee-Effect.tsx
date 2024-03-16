import Marquee from "react-fast-marquee";

const MarqueeEffect = () => {
  const MarqueeText = ({ text }: { text: string }) => {
    return (
      <div className=" font-extrabold text-3xl">
        <p>{text}</p>
      </div>
    );
  };
  return (
    <>
      <div className="w-screen h-[140px]">
        <Marquee>
          <div className="flex flex-1 gap-[120px] p-4 bg-white">
           <MarqueeText text="UI/UX"/>
           <MarqueeText text="React"/>
           <MarqueeText text="Next.js"/>
           <MarqueeText text="Solidity"/>
           <MarqueeText text="Figma"/>
           <MarqueeText text="Node"/>
           <MarqueeText text="SmartContract"/>
           <MarqueeText text="TypeScript"/>
           <MarqueeText text="JavaScript"/>
           </div>
        </Marquee>
      </div>
    </>
  );
};

export default MarqueeEffect;
