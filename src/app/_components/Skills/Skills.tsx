import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Icon_1 = [
  "/icons/Eth.svg",
  "/icons/git.svg",
  "/icons/hardhat.svg",
  "/icons/js.svg",
  "/icons/metamask.svg",
  "/icons/Next.svg",
];
const Icons_2 = [
  "/icons/polygon.svg",
  "/icons/Sol.svg",
  "/icons/typescript.svg",
  "/icons/Visual Studio.svg",
  "/icons/VSCode.svg",
  "/icons/db.svg",
];
const Img = ({ _src }: { _src: string }) => {
  return (
    <div>
      <img src={_src} className=" w-[64px] h-[64px] p-1" />
    </div>
  );
};

const SkillsMarquee = () => {
  return (
    <>
      <Marquee>
        <div className="flex flex-1 gap-20 ">
          {Icon_1.map((data, i) => {
            return <Img _src={data} key={i} />;
          })}
          {Icons_2.map((data, i) => {
            return <Img _src={data} key={i} />;
          })}
        </div>
      </Marquee>
    </>
  );
};

const crypto = [
  "1inch.svg",
  "ApeSwap.svg",
  "AvalancheAVAX.svg",
  "Bitcoin.svg",
  "CardanoADA.svg",
  "Coinbase.svg",
  "Cronos.svg",
  "Dogecoin.svg",
  "ETH.svg",
  "Fantom.svg",
  "Glow.svg",
  "Huobi.svg",
  "LitecoinLTC.svg",
  "Magic Eden.svg",
  "Metamask.svg",
  "OpenSea.svg",
  "PancakeSwapCAKE.svg",
  "Phantom.svg",
  "Polygon.svg",
  "RippleXRP.svg",
  "Shiba.svg",
  "Solana.svg",
  "Solanart.svg",
  "Temple.svg",
  "Tether.svg",
];

const CryptoAppMockups = () => {
  useEffect(() => {
    const ApeFestRound = document.querySelectorAll(".cryptoCircle");

    const handleScroll = () => {
      const scrollY = window.scrollY;
      ApeFestRound.forEach((e: any) => {
        let temp = scrollY * 0.3;
        e.style.transition = "transform 2s ease";
        e.style.transform = `rotateZ(${temp}deg)`;
      });
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className=" bg-white rounded-xl w-full">
        <div className="relative  flex flex-row items-center  justify-center ">
          <div className="relative ">
            <div className="z-10">
              <img
                src="/mockup/mockup1.svg"
                width={"50%"}
                style={{ zIndex: 10 }}
                className="relative z-10 object-contain sm: w-[800px]"
              />
            </div>
            <div className="relative sm: top-[-264px] left-[34px] md: top-[-350px] left-[100px] lg: top-[-370px] left-[120px]   z-0 ">
              <img
                src="/mockup/CryptoIcons/cryptoCircle.svg"
                width={"40%"}
                style={{ zIndex: "0" }}
                className="cryptoCircle z-[-1] relative sm: w-80 md:w-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Skills = () => {
  return (
    <>
      <div className=" h-auto  flex flex-col overflow-hidden justify-center items-center ">
        <div className="flex flex-row items-center gap-2  rounded-full w-fit px-2 py-2">
          <img src="/star.svg" color="white" width={"27px"} />
          <h1 className=" font-semibold text-2xl">Projects</h1>
        </div>
        <SkillsMarquee />
        <div className="flex flex-row bg-white w-full justify-center items-center">
          <CryptoAppMockups />
          <div>
            <h1 className="font-bold text-2xl lg: inline visible  md: inline sm: hidden ">Crypto-Wallet</h1>
            <div>
              {/* <img src="/mockup/CryptoIcons/cryptoCircle.svg" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
