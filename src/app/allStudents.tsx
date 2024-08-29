"use client"

import React, { useEffect, useState } from 'react'
import studentsArr from './studentArr'
import Link from 'next/link'
import deleteTodo from './deleteTodo'

export default function AllStudents() {
    const [print, setPrint] = useState(false)


    useEffect(() => {
        setPrint(true)
    }, [studentsArr])
    return (
        <>
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
                                <button className='border border-black w-20 py-1 rounded-full hover:scale-105 transition-all duration-300' onClick={()=>{deleteTodo(i)}}>Delete</button>
                            </div>
                        </div >
                    ))
                }
            </div >

        </>
    )
}
