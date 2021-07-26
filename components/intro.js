import Head from 'next/head'
import Image from 'next/image'
import ReactPlayer from 'react-player';
import { useRef } from "react";
import { useRouter } from 'next/router'

export default function Intro( {page} ) {

  const vidRef = useRef(null);
  const router = useRouter()
  console.log("PAGE:::: " + page);
  const videoEnded = () => (
    // vidRef.current.play()
    router.push({page}, null, { shallow: true })
  );

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <video ref={vidRef} className='videoTag' poster='VideoFPO.png' autoPlay muted onEnded={() => videoEnded()}>
          <source src='/Berries.mp4' type='video/mp4' />
        </video>
      </section>
    </div>
  )
}
