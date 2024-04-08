import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { TextGenerateEffect } from "../Text-GenerationEffect";
import { useLenis } from "@studio-freight/react-lenis";
import { useScrollText } from "@/app/_Hooks/Text-Scrool-Effect";
import Heading from "../Heading";
import { colors, getRandomColor } from "@/app/utils/RandomColor";
import { TextScrollingAnimation } from "../TextScrollingAnimation";

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
  const [scrollValue, setScrollValue] = useState(0);
  const lenis = useLenis(({ scroll }) => {
    // console.log(scroll)
    setScrollValue(scroll);
  });
  useEffect(() => {
    // console.log(scrollValue)
    const handleScroll = () => {
      const ApeFestRound = document.querySelectorAll(".cryptoCircle");

      const scrollY = scrollValue || 0;
      ApeFestRound.forEach((e: any) => {
        let temp = scrollY * 0.3;
        e.style.transition = "transform 0s ease";
        e.style.transform = `rotateZ(${temp}deg)`;
      });
    };
    handleScroll();
  }, [scrollValue]);
  return (
    <>
      <div className=" bg-white rounded-xl flex flex-1 justify-center items-center">
        <div className="relative  flex flex-row  justify-center items-center">
          <div className="relative ">
            <div className="z-10">
              <img
                src="/mockup/mockup1.svg"
                style={{ zIndex: 10 }}
                className="relative z-10 object-contain w-[650px] sm:w-[800px] lg:w-[650px]"
              />
            </div>
            <div className=" z-0 relative top-[-264px] max-[640px]:left-[24px] max-[640px]:top-[-264px] left-[24px] max-[768px]:top-[-350px] left-[100px]  max-[1024px]:top-[-280px] left-[82px]">
              <img
                src="/mockup/CryptoIcons/cryptoCircle.svg"
                style={{ zIndex: "0" }}
                className="cryptoCircle z-[-1] relative w-80 sm: w-80 sm:w-[36300px] lg:w-[350px] "
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
      <div className="skill h-auto  flex flex-col overflow-hidden justify-center items-center ">
        <Heading title="Project" initialPoint={800} initialMarkup={1} />
        <SkillsMarquee />
        <div className="flex pt-8  bg-white w-full justify-center items-start  max-[1024px]:flex-row max-[640px]:flex-col max-[640px]:justify-start max-[640px]:pt-0">
          <CryptoAppMockups />

          <div className="flex gap-1 flex-1 flex-col   items-baseline lg:mt-40 lg:ml-20  max-[640px]:top-[-200px] max-[640px]:relative max-[640px]:p-4">
            <div className="flex flex-row gap-3">
              <h1 className="font-bold text-3xl lg:inline ">Crypto-Wallet</h1>
              <div className=" cursor-pointer">
                <img src={"/icons/github.svg"} width={"32px"} />
              </div>
            </div>
            <TextGenerateEffect
              words="A cryptocurrency wallet, often referred to as a crypto wallet, is
              a digital tool that enables users to securely store, manage, and
              interact with their cryptocurrencies. Unlike traditional wallets
              that hold physical cash or cards, crypto wallets store
              cryptographic keys that grant access to the user's cryptocurrency
              holdings on a blockchain network. These wallets come in various
              forms, ranging from software applications to hardware devices,
              each offering different levels of security, accessibility, and
              functionality."
            />

            <div>
              {/* <img src="/mockup/CryptoIcons/cryptoCircle.svg" /> */}
            </div>
          </div>
        </div>
        <TextScrollingAnimation />

        <div className="flex pt-8 px-20 h-screen  bg-white w-full justify-center items-center  max-[1024px]:flex-row max-[640px]:flex-col max-[640px]:justify-start max-[640px]:pt-0">
          <div className="flex gap-1 flex-1 flex-col   items-baseline  lg:ml-20  max-[640px]:top-[-200px] max-[640px]:relative max-[640px]:p-4">
            <div className="flex flex-row gap-3">
              <h1 className="font-bold text-3xl lg:inline ">Why-Type</h1>
              <div className=" cursor-pointer">
                <img src={"/icons/github.svg"} width={"32px"} />
              </div>
            </div>
            <TextGenerateEffect
              words=" A cryptocurrency wallet, often referred to as a crypto wallet, is
            a digital tool that enables users to securely store, manage, and
            interact with their cryptocurrencies. Unlike traditional wallets
            that hold physical cash or cards, crypto wallets store
            cryptographic keys that grant access to the user's cryptocurrency
            holdings on a blockchain network. These wallets come in various
            forms, ranging from software applications to hardware devices,
            each offering different levels of security, accessibility, and
            functionality."
            />
          </div>
          <div className="flex flex-1 justify-center items-center ">
            <img src="/gif/why-type.gif" width={"700px"} height={"350px"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
