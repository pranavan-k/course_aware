'use client';
import { useEffect, useState } from "react";
import Heading from '@/app/components/heading';
import ProblemCard from "@/app/components/problem_card";
require("dotenv").config()

export default function Categories() {
  const [problemsList, setProblemsList] = useState([])
  const description = "Course Aware has a wide range of practice problems"

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

  useEffect(() => {
    fetch(`http://localhost:5000/api/problems/functions`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.problems);
      setProblemsList(data.problems);
    })
  }, [])

  return (
   <main className="w-full bg-black h-screen m-0 p-0">
    <div className="h-full w-full bg-neutral-900">
      <Heading title="Functions" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, eligendi ipsam qui odio quos vitae aut, minus minima quaerat ea iure atque dignissimos. Officia ducimus illum adipisci pariatur, laborum exercitationem molestias harum dolorem deleniti?"/>
      <div className="flex justify-center">
        <div className="flex w-2/3 flex-wrap justify-evenly flex-col">
          {
            problemsList.map((problem: any) => {
              return <div key={problem._id}>
                <ProblemCard link={`/practice/functions/problems/${problem._id}`} name={problem.name} discription={problem.description} difficulty={problem.difficulty}/>
              </div>
            })
          }
        </div>
      </div>
    </div>
    <div className="bg-black w-full h-full">

    </div>
   </main>
  )
}