import Head from 'next/head'
import Image from 'next/image'
import ReactPlayer from 'react-player';
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from 'next/router'

export default function Intro() {

  const [introVisited, setintroVisited] = useState()

  const vidRef = useRef(null)
  const router = useRouter()
  let data = []

  useEffect(() => {
    data = localStorage.getItem('_pagetracking')
  });

  function videoEnded() {
    let parsedData = JSON.parse(data);
    parsedData['introVisited'] = true;
    localStorage.setItem('_pagetracking', JSON.stringify(parsedData));
    router.reload(window.location.pathname)
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <video ref={vidRef} className='videoTag' poster='VideoFPO.png' autoPlay muted onEnded={videoEnded}>
          <source src='/Berries.mp4' type='video/mp4' />
        </video>
      </section>
    </div>
  )
}
