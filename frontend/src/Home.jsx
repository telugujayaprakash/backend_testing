import React, { useEffect, useState } from 'react'
export default function Home() {
    const [data, setdata] = useState("wait..")
    useEffect(() => {
      fetch("https://backend-testing-blond.vercel.app/")
      .then(res=>res.text())
      .then(response=>setdata(response))
    }, [])
    
  return (
    <div>
      <h1>hello </h1>
      <p>{data}</p>
    </div>
  )
}
