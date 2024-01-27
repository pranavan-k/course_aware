'use client'
import Image from "next/image";
import { useEffect } from "react";
import Toolbar from "@/app/components/toolbar";

export default function Home() {
  useEffect(() => {
    let scroll: import("locomotive-scroll");
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default();
    });

   // cleanup phase
    return () => {
      if (scroll) scroll.destroy();
    };
  });

  return (
    <main className="h-screen w-full m-0 p-0">
      <Toolbar />
      <div className="w-full h-full gap-8 bg-neutral-900 flex flex-col">
        <div className="lg:w-1/2 h-full flex w-full">
          <div className="w-full flex justify-center flex-col lg:p-6 items-center gap-5 lg:gap-0">
            <p data-scroll data-scroll-speed="0.6" className="lg:w-1/2 w-full text-sm lg:text-left text-center p-6 font-medium">Course Aware is a free and open source study tool for exam prep. Get practice problems, text examples, and full explinations on answers all in one place.</p>
            <div className="lg:pl-24 flex justify-center w-full">
              <button data-scroll data-scroll-speed="0.4" className="lg:bg-transparent lg:text-white p-2 w-36 lg:hover:bg-white bg-white lg:hover:text-slate-900 text-slate-900 transition-colors ease-in">Start Now -{">"}</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-neutral-900">

      </div>
    </main>
  );
}
