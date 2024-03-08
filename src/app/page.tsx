"use client";
import "./input.css";
import { BoxesCore } from "./_components/Background-Boxes";

export default function Home() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div className="absoulte overflow-hidden z-20 w-full h-full inset-0 bg-slate-900">
        <BoxesCore />
      </div>
    </div>
  );
}
