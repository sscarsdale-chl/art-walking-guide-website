import Head from 'next/head'
import { Component} from 'react'
import Link from 'next/link'

export default class SuccessPage extends Component {

  state = {
    galleryPage1: false,
    galleryPage2: false,
    galleryPage3: false,
    galleryPage4: false,
    galleryPage5: false
  }

  // Button Handlers
  resetStateVars = () => {
    this.setState(prevState => {
      return {
        galleryPage1: false,
        galleryPage2: false,
        galleryPage3: false,
        galleryPage4: false,
        galleryPage5: false
      }
    })
  }

  // Local Storage
  componentDidUpdate() {
    localStorage.setItem('_pagetracking', JSON.stringify(this.state))
  }

  componentDidMount(){
    const data = localStorage.getItem('_pagetracking')
    if(data) {
      this.setState(prevState => {
        return JSON.parse(data)
      })
    }
    this.resetStateVars();
  }
  
  render() {
    return <div>
      <div
        className="fixed justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-full h-full mx-auto">
          <div className="border-0 relative flex flex-col w-full h-full bg-black outline-none focus:outline-none">
            <div className="flex justify-between py-3 pl-3 pr-5 ">
              <Link href="/">
                <a>
                  <span className="sr-only">Choctaw</span>
                  <img
                    className="h-12 w-auto"
                    src="/logo.png"
                    alt="Choctaw"
                  />
                </a>
              </Link>
              <div className="flex justify-end">
              <Link href="/">
                    <a href="#">
                      <span className="sr-only">Map Thumbnail</span>
                      <img
                        className="h-14 w-auto"
                        src="/map_thumb.png"
                        alt="Map Thumbnail"
                      />
                    </a>
              </Link>
            </div>
            </div>
            <div className="from-base_pink via-base_purple to-base_teal bg-gradient-to-r w-full h-2 block"></div>
            <div className="relative py-10 flex flex-col items-center justify-center h-full ">
              <h2 className="uppercase text-5xl px-4 font-bold text-transparent text-center bg-clip-text bg-gradient-to-r from-base_pink via-base_purple to-base_teal">
                Take a gift<br/>home from us
              </h2>
              <img
                className="h-48 w-auto m-8"
                src="/gift_lg.png"
                alt="Gift Icon"
              />
              <h4 className="uppercase px-8 text-xl font-bold text-white text-center bg-clip-text">
                Scan the qr codes for all<br/>of the works of art<br/>to recieve a choctaw gift!
              </h4>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  }

}