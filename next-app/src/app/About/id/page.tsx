import React from 'react'

export default async function page({params}: any) {
    const id = await params.id;
  return (
    <div>
          <h1>{id}</h1>
    </div>
  )
}


