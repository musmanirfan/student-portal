"use client"

import React, { useEffect, useState } from 'react'
import studentsArr from './studentArr'
import Link from 'next/link'

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
                        <div key={i} className='flex gap-2 bg-slate-400 rounded-full py-2 px-4 w-[95%] m-auto mt-2'>
                            <h1>Name: {name} |</h1>
                            <h1>Roll Number: {rNom}</h1>
                        </div>
                    )
                    )}
            </div>

        </>
    )
}
