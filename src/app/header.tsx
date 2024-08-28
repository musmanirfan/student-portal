import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between px-16 py-4 m-auto bg-slate-200 items-center'>
        <h1 className='text-3xl'>Made by usman</h1>
        <Link href={"/addStudents"}><button className='border border-black px-2 py-1'>Add Student</button></Link>
    </div>
  )
}
