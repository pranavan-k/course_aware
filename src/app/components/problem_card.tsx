import React from 'react'

interface IProblem {
    name: string,
    discription: string,
    difficulty: string
}

export default function ProblemCard(prop: IProblem) {
  return (
    <div>
        <a className='group'>
            <h1>{prop.name}</h1>
            <p className='lg:collapse lg:group-hover:visible'>{prop.discription}</p>
        </a>
    </div>
  )
}