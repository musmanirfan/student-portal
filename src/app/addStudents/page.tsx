"use client"

import React, { FormEvent, useState } from 'react'
import studentsArr from '../studentArr';
import Link from 'next/link';

export default function AddStudents() {

    const [name, SetName] = useState("")
    const [rNom, setRNom] = useState<number | string>("");

    const addStudent = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        studentsArr.push(
            { name, rNom }
        )
        console.log(studentsArr);
        setRNom("");
        SetName("")

    }
    return (
        <div>
            <form onSubmit={addStudent}>

                <label htmlFor="Name">Name:</label>
                <input type="text" id='Name' value={name} onChange={(e) => SetName(e.target.value)} />

                <label htmlFor="rNom">Roll Number:</label>
                <input type="number" id='rNom' value={rNom} onChange={(e) => setRNom(e.target.value)} />

                <button type={'submit'}>Click</button>
            </form>
            {
                studentsArr.map(({ name, rNom }, i) => (
                    <div key={i} className='flex gap-2 bg-slate-400 rounded-full py-2 px-2 w-[95%] m-auto'>
                        <h1>Name: {name}</h1>
                        <h1>Roll Number:{rNom}</h1>
                    </div>
                ))
            }
            <Link href={"/"}>Back to Home</Link>
        </div>
    )
}
