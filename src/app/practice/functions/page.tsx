'use client';
import { useEffect, useState } from "react";
import Heading from '@/app/components/heading';
import ProblemCard from "@/app/components/problem_card";
require("dotenv").config()

export default function Math() {
  const [problemsList, setProblemsList] = useState([])
  const description = "Course Aware has a wide range of practice problems"

  useEffect(() => {
    fetch(`http://localhost:5000/api/practice/math/functions`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.problems);
      setProblemsList(data.problems);
    })
  }, [])

  return (
   <main className="w-screen bg-slate-900 h-screen m-0 p-0">
    <div className="h-full w-full">
      <Heading title="Functions" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, eligendi ipsam qui odio quos vitae aut, minus minima quaerat ea iure atque dignissimos. Officia ducimus illum adipisci pariatur, laborum exercitationem molestias harum dolorem deleniti?"/>
      <div>
        {
          problemsList.map((problem: any) => {
            return <div key={problem._id}>
              <ProblemCard name={problem.name} discription={problem.description} difficulty={problem.difficulty}/>
            </div>
          })
        }
      </div>
    </div>
   </main>
  )
}