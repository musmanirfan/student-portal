import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between px-12 py-4 m-auto bg-slate-200 items-center'>
        <h1 className='text-3xl'>Made by usman</h1>
        <Link href={"/addStudents"}><button className='border border-black px-5 py-2 hover:scale-105 transition-all duration-300'>Add Student</button></Link>
    </div>
  )
}
