"use client";
import "./input.css";
import { BoxesCore } from "./_components/Background-Boxes";
import Greet from "./_components/IntroBox";


export default function Home() {
  return (
    <>
      <div>
        <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
          <div className="absoulte overflow-hidden w-full h-full inset-0 bg-slate-900">
            <BoxesCore />

            <div className="flex flex-1 h-screen justify-center items-center top-[50%] left-[50%]  ">
              <Greet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
