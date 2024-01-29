'use client';
import { useEffect, useState } from "react";
import Head from 'next/head'

export default function FunctionProblem({params}: any) {
    const id = params.id;

    // state of the current problem
    const [problem, setProblem] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/problems/functions/${id}`)
        .then((res) => res.json())
        .then((data: any) => {
            const fetchedProblem = data.problem;
            setProblem(fetchedProblem);
            console.log(problem);
        })
    }, []);

    return (
        <main className="bg-neutral-900 h-screen w-full">
            {
                problem.map((problem: any) => {
                    return (
                        <div className="p-14">
                            <h1 className="text-5xl font-medium">{problem.name}</h1>
                            <div className="flex flex-col justify-center items-center m-14 px-36">
                                <h2 className="w-full text-xl font-semibold py-6">Description</h2>
                                <p className="whitespace-pre-line w-full pl-4 leading-tight">{problem.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </main>
    )
}