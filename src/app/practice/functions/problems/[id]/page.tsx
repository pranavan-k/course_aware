'use client';
import { useEffect } from "react";

export default function FunctionProblem({params}: any) {
    const id = params.id;

    useEffect(() => {
        fetch(`http://localhost:5000/api/problems/functions/${id}`)
        .then((res) => res.json())
        .then((data: any) => {
            console.log(data.problem)
        })
    }, []);

    return (
        <div>{id}</div>
    )
}