import React from 'react'
import { Roboto } from 'next/font/google'
import { useEffect } from 'react'

interface IProps {
    title: string,
    description: string
}

const robotoRegular = Roboto({
    weight: "400",
    subsets: ["latin"]
})

const robotoItalic = Roboto({
    weight: "300",
    style: ["italic"],
    subsets: ["latin"]
})

export default function Heading(props: IProps){
    // locomotive smooth scroll init
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
    <div className="flex justify-center w-full lg:py-16 lg:px-52 text-neutral-300">
        <div data-scroll data-scroll-speed="0.2" className="w-3/5">
            <h2 className={`${robotoItalic.className}`}>Practice problems for</h2>
            <h1 className={`${robotoRegular.className} text-6xl leading-loose`}>{props.title}</h1>
        </div>
        <div className='items-center flex font-medium'>
            <p>{props.description}</p>
        </div> 
    </div>
  )
}