"use client"

import React, { FormEvent, useState } from 'react'
import studentsArr from '../studentArr';
import Link from 'next/link';
import { TextField } from '@mui/material';

export default function AddStudents() {

    const [name, SetName] = useState("")
    const [rNom, setRNom] = useState<number | string>("");

    const addStudent = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        studentsArr.push(
            { name, rNom }
        )
        // console.log(studentsArr);
        setRNom("");
        SetName("");

    }
    return (
        <div>
            <div className='flex items-center mt-5 justify-between px-10'>
                <form onSubmit={addStudent} className='flex items-center gap-5'>
                    <TextField type='text' id="Name" label="Name" variant="outlined" value={name} onChange={(e) => SetName(e.target.value)} />
                    <TextField type='number' id="number" label="Roll Number" variant="outlined" value={rNom} onChange={(e) => setRNom(e.target.value)} />
                    <button className='border border-gray-400 px-7 py-4 rounded-md hover:bg-black hover:text-white duration-700' type={'submit'}>Click</button>
                </form>
                <Link href={"/"}> <button className='border border-black px-10 rounded-lg hover:scale-105 transition-all py-4'> Back to Home</button></Link>
            </div>
            <div className='mt-10'>
                {
                    studentsArr.map(({ name, rNom }, i) => (
                        <div key={i} className=' w-[95%] mx-auto items-center justify-between flex gap-2 bg-slate-400 rounded-full py-2 px-4 mt-2'>
                            <div className='flex gap-5'>
                                <h1> <b> Name: </b>{name}</h1>
                                <h1>|</h1>
                                <h1><b>Roll Number: </b>{rNom}</h1>
                            </div>
                            <div className='flex gap-3'>
                                <button className='border border-black w-20 py-1 rounded-full hover:scale-105 transition-all duration-300'>Edit</button>
                                <button className='border border-black w-20 py-1 rounded-full hover:scale-105 transition-all duration-300'>Delete</button>
                            </div>
                        </div >
                    ))
                }
            </div >

        </div >
    )
}
