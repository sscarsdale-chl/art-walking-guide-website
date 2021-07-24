import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll'

export default function Gallery() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="fixed w-full">
        <div className="mx-auto bg-black">
          <div className="flex justify-between items-center py-2 pl-3 pr-5 ">
            <div className="flex justify-start">
              <a href="/">
                <span className="sr-only">Choctaw</span>
                <img
                  className="h-12 w-auto"
                  src="/logo.png"
                  alt="Choctaw"
                />
              </a>
            </div>

            <div className="flex justify-end">
              <a href="#">
                <span className="sr-only">Map Thumbnail</span>
                <img
                  className="h-14 w-auto"
                  src="/map_thumb.png"
                  alt="Map Thumbnail"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="from-base_pink via-base_purple to-base_teal bg-gradient-to-r w-full h-2 block"></div>
      </div>
      <div className="w-full overflow-auto">
        <ScrollContainer
          className="container"
          style={{width: "100%", height: "100vh"}}
          horizontal={true}
          vertical={true}
          alt="Map Thumbnail"
          nativeMobileScroll={false}
        >
          <img className="max-w-none " style={{width: 708, height: 1265}} src="/MapwithDots.png" />
        </ScrollContainer>
      </div>
      <main className="flex flex-col items-center">
        <section className="w-full">



        </section>
      </main>
    </div>
  )
}
