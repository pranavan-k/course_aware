import React from 'react'
import { Roboto } from 'next/font/google'

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
  return (
    <div className="bg-cyan-900 flex justify-center w-full p-16">
        <div className="w-3/5">
            <h2 className={`${robotoItalic.className}`}>Practice problems for</h2>
            <h1 className={`${robotoRegular.className} text-5xl leading-loose`}>{props.title}</h1>
            <p>{props.description}</p> 
        </div>
    </div>
  )
}