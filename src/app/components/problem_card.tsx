'use client';
import React from 'react'
import Link from 'next/link';

interface IProblem {
    link: string,
    name: string,
    discription: string,
    difficulty: string
}

export default function ProblemCard(prop: IProblem) {
    return (
        <Link href={prop.link}>
            <div className='border-2 border-neutral-700 w-full py-1 px-2 hover:scale-105 transition-transform ease-linear'>
                <h1 className='text-xl font-medium'>{prop.name}</h1>
                <div className='flex justify-between'>
                    <p className="text-sm font-extralight">{prop.discription}</p>
                    <p>Difficulty: {prop.difficulty}</p>
                </div>
            </div>
        </Link>
    )
}