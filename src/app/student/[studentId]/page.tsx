import React from 'react'


type studentIdType= {
    params: {studentId: string};
}

export default function page({params:{studentId}}:studentIdType) {
  return (
    <div>{studentId}</div>
  )
}
