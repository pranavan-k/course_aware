'use client'
import Image from "next/image";
import { Urbanist } from "next/font/google";
import { useEffect } from "react";

const urbanist = Urbanist({
  weight: "500",
  subsets: ["latin"]
})

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
      <div className="w-full h-full bg-slate-900 flex justify-center flex-col gap-8">
        <div className="w-full flex justify-center flex-col lg:p-6 lg:items-start items-center">
          <h1 data-scroll data-scroll-speed="0.7" className={`lg:text-9xl text-6xl lg:w-full w-full lg:text-left text-center m-4 ${urbanist.className}`}>Course Aware</h1>
          <p data-scroll data-scroll-speed="0.6" className="lg:w-1/2 w-11/12 lg:text-base text-sm lg:text-left text-center p-6">Course Aware is a free and open source study tool for exam prep. View previous tests and homework sheets from different topics in math. Get practice problems, text examples, and full explinations on answers all in one place. Create an account now to upload your own tests and homework problems</p>
        </div>
        <div className="container lg:pl-24 flex justify-center lg:justify-start">
          <button data-scroll data-scroll-speed="0.6" className="border-white border-2 p-2 w-36 rounded-3xl hover:bg-white hover:text-slate-900">Start Now</button>
        </div>
      </div>
      <div className="w-full h-full bg-black">

      </div>
    </main>
  );
}
