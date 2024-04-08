import { useScrollText } from "../_Hooks/Text-Scrool-Effect";
import { colors } from "../utils/RandomColor";

export const TextScrollingAnimation = () => {
    const { posY } = useScrollText();
  
    return (
      <>
        <div className="bg-white w-max overflow-hidden">
          <div>
            <h1
              className="  text-6xl font-bold"
              style={{
                transform: `translateX(${(posY - 2500) * 0.3}px)`,
                transition: "transform 200ms linear",
              }}
            >
              {/* decentralized applications (dApps) that utilize smart contracts */}
              written in languages like Solidity. They also craft user interfaces
              with blockchain networks. Additionally, Web3 development encompasses
              areas like decentralized finance{" "}
              <span className={`${colors[7]}`}>(DeFi)</span>, non-fungible tokens
              (NFTs), like <span className={`${colors[2]}`}>React.js</span> or{" "}
              <span className={`${colors[3]}`}>Next.js</span>, they streamline
              development and the broader ecosystem of decentralized applications
              that are reshaping various industries.
            </h1>
          </div>
          <div>
            <h1
              className="  text-6xl font-bold"
              style={{
                transform: `translateX(-${posY * 0.3}px)`,
                transition: "transform 200ms linear",
              }}
            >
              devs ensure cross-browser compatibility, responsive design, and devs
              ensure cross-browser compatibility, responsive design, and dynamic
              interactions on the client side. Proficient in frameworks like{" "}
              <span className={`${colors[4]}`}>React.js</span> or{" "}
              <span className={`${colors[8]}`}>Next.js</span>, they streamline
              development and enhance code reusability. Additionally, front-end
            </h1>
          </div>
          <div>
            <h1
              className="  text-6xl font-bold "
              style={{
                transform: `translateX(${posY * 0.3}px)`,
                transition: "transform 200ms linear",
              }}
            >
              A cryptocurrency wallet, often referred to as a crypto wallet, is a
              digital tool that enables users to securely store, manage, and
              interact with their
              <span className={`${colors[2]}`}> cryptocurrencies</span>. Unlike traditional wallets that hold physical cash
              or cards, crypto wallets store cryptographic keys that grant access
              to the user's cryptocurrency holdings on a
            </h1>
          </div>
        </div>
      </>
    );
  };
  