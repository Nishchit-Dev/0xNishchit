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

const Skills = () => {
  useEffect(() => {
    const ApeFestRound = document.querySelectorAll(".cryptoCircle");

    const handleScroll = () => {
      const scrollY = window.scrollY;
      ApeFestRound.forEach((e:any) => {
        e.style.transform = `rotateZ(${scrollY*0.25 }deg)`;
      });
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className=" h-auto  flex flex-col overflow-hidden justify-center items-center">
        <div className="flex flex-row items-center gap-2 bg-white rounded-full w-fit px-2 py-2">
          <img src="/star.svg" color="white" width={"27px"} />
          <h1 className=" font-semibold text-2xl">Skills</h1>
        </div>
        <SkillsMarquee />
        <div className=" bg-white p-8 rounded-xl w-full ">
          <div className="flex flex-1 flex-row items-center ">
            <div>
              <img
                src="/mockup/mockup1.svg"
                width="900px"
                className="relative object-contain scale-150 z-10"
              />
              <div className="relative top-[-450px] left-[120px] z-0">
                <img
                  src="/mockup/CryptoIcons/cryptoCircle.svg"
                  width={"600px"}
                  className="cryptoCircle"
                />
              </div>
            </div>

            <div>
              <h1 className=" font-bold text-2xl">Crypto-Wallet</h1>
              <div>
                {/* <img src="/mockup/CryptoIcons/cryptoCircle.svg" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
