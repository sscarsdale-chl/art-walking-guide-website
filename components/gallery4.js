import Head from 'next/head'
import { useState, useEffect } from 'react';

export default function Gallery(props) {
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

      <main className="flex flex-col items-center w-full flex-1 px-18 pt-20 text-left">
        <section className="w-full">
          <a href="#">
            <span className="sr-only">Video Thumbnail</span>
            <img
              className="h-auto w-full"
              src="/VideoFPO.png"
              alt="Video Thumbnail"
            />
          </a>
        </section>
        <section className="container mx-auto px-10 mt-5 mb-32">
          <h3 className="uppercase my-1 text-3xl tracking-wider">Her roots run deep 4</h3>
          <h5 className="my-1 text-xl tracking-wide">by CONNIE PHILLIPS</h5>

          <div className="from-base_pink via-base_purple to-base_teal bg-gradient-to-r w-full h-0.5 my-3 block"></div>

          <p>Lorem ipsum dolor sit amet, conseLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nos</p>

          <p>Lorem ipsum dolor sit amet, conseLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nos</p>

          <p>Lorem ipsum dolor sit amet, conseLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nos</p>

          <p>Lorem ipsum dolor sit amet, conseLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nos</p>

          <p>Lorem ipsum dolor sit amet, conseLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nos</p>
        </section>

        {showModal ? (
          <>
            <div
              className="fixed justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-full h-full mx-auto">
                <div className="border-0 relative flex flex-col w-full h-full bg-black outline-none focus:outline-none">
                  <div className="flex justify-between py-3 pl-3 pr-5 ">
                    <a href="#">
                      <span className="sr-only">Choctaw</span>
                      <img
                        className="h-12 w-auto"
                        src="/logo.png"
                        alt="Choctaw"
                      />
                    </a>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-white float-right text-5xl leading-none font-thin outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-white h-9 w-9 text-5xl leading-7 block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  <div className="relative py-10 flex flex-col items-center justify-center h-full ">
                    <h2 className="uppercase text-4xl px-4 font-bold text-transparent text-center bg-clip-text bg-gradient-to-r from-base_pink via-base_purple to-base_teal">
                      Fill your glass<br/>by scanning<br/>five artwalk<br/>qr codes
                    </h2>
                    <img
                      className="h-48 w-auto m-8"
                      src="/drink_full.png"
                      alt="Drink Icon"
                    />
                    <h4 className="uppercase px-8 text-xl font-bold text-transparent text-center bg-clip-text bg-gradient-to-r from-base_pink via-base_purple to-base_teal">
                      Once you scan them all report to any bar to redeem your drink!
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </main>

      <footer className="fixed w-full bottom-0">
        <div className="from-base_pink via-base_purple to-base_teal bg-gradient-to-r w-full h-2 block"></div>
        <div className="mx-auto bg-black">
          <div className="flex space-x-4">
            <div className="flex-grow w-9/12 h-28 bg-emerald-300 text-white text-2xl font-extrabold flex items-center justify-center">
              <div className="h-full flex items-center justify-center">
                <a href="#" onClick={() => setShowModal(true)}>
                  <span className="sr-only">Gift Thumb</span>
                  <img
                    className="drink-thumb"
                    src="/gift_thumb.png"
                    alt="Gift Thumbnail"
                  />
                </a>
              </div>
              <h4 className="uppercase ml-5 mr-2.5 text-5xl font-bold text-transparent text-center bg-clip-text bg-gradient-to-r from-base_pink via-base_purple to-base_teal">
                {props.pagecount}
              </h4>
            </div>
            <div className="flex-grow-0 mx-auto mt-2 h-full rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center">
              <div className="from-base_pink via-base_purple to-base_teal bg-gradient-to-b h-24 w-0.5 flex flex-grow-0 justify-center items-center"></div>
            </div>
            <div className="flex-grow w-9/12 h-28 bg-emerald-300 text-white text-2xl font-extrabold flex items-center justify-center">
              <div className="h-full flex items-center justify-center">
                <a href="#">
                  <span className="sr-only">Snap Thumbnail</span>
                  <img
                    className="snap-thumb"
                    src="/snap_chat_thumb.png"
                    alt="Map Thumbnail"
                  />
                </a>
              </div>
              <h4 className="uppercase text-xl ml-2 mr-2 leading-none text-transparent text-center bg-clip-text bg-gradient-to-r from-base_pink via-base_purple to-base_teal">
                Try The<br/>Snap Lens
              </h4>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
