import Head from 'next/head'
import { Component} from 'react'
import Link from 'next/link'

export default class HomePageLayout extends Component {

  state = {
    galleryPage1: false,
    galleryPage2: false,
    galleryPage3: false,
    galleryPage4: false,
    galleryPage5: false,
    pageCount: "0/5",
    introVisited: false
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
  }

  render() {

    // VISITED PAGE STATES
    const galleryPage1Visited = this.state.galleryPage1;
    let galleryPage1Status;
    if(galleryPage1Visited){
      galleryPage1Status = <p className="font-sans text-green-500">GalleryPage1: YES</p>
    } else {
      galleryPage1Status = <p className="font-sans text-red-500">GalleryPage1: NO</p>
    }

    const galleryPage2Visited = this.state.galleryPage2;
    let galleryPage2Status;
    if(galleryPage2Visited){
      galleryPage2Status = <p className="font-sans text-green-500">GalleryPage2: YES</p>
    } else {
      galleryPage2Status = <p className="font-sans text-red-500">GalleryPage2: NO</p>
    }

    const galleryPage3Visited = this.state.galleryPage3;
    let galleryPage3Status;
    if(galleryPage3Visited){
      galleryPage3Status = <p className="font-sans text-green-500">GalleryPage3: YES</p>
    } else {
      galleryPage3Status = <p className="font-sans text-red-500">GalleryPage3: NO</p>
    }

    const galleryPage4Visited = this.state.galleryPage4;
    let galleryPage4Status;
    if(galleryPage4Visited){
      galleryPage4Status = <p className="font-sans text-green-500">GalleryPage4: YES</p>
    } else {
      galleryPage4Status = <p className="font-sans text-red-500">GalleryPage4: NO</p>
    }

    const galleryPage5Visited = this.state.galleryPage5;
    let galleryPage5Status;
    if(galleryPage5Visited){
      galleryPage5Status = <p className="font-sans text-green-500">GalleryPage5: YES</p>
    } else {
      galleryPage5Status = <p className="font-sans text-red-500">GalleryPage5: NO</p>
    }

    const introVisited = this.state.introVisited;
    let introVisitedStatus;
    if(introVisited){
      introVisitedStatus = <p className="font-sans text-green-500">introVisited: YES</p>
    } else {
      introVisitedStatus = <p className="font-sans text-red-500">introVisited: NO</p>
    }

    return <div>
      <Head title="home"/>
      <h1>Home Page</h1>
      <div>
        <Link href="/galleryPage1">
            <a className="underline pr-4 text-blue-500">Gallery Page 1</a>
        </Link>
        <Link href="/galleryPage2">
            <a className="underline pr-4 text-blue-500">Gallery Page 2</a>
        </Link>
        <Link href="/galleryPage3">
            <a className="underline pr-4 text-blue-500">Gallery Page 3</a>
        </Link>
        <Link href="/galleryPage4">
            <a className="underline pr-4 text-blue-500">Gallery Page 4</a>
        </Link>
        <Link href="/galleryPage5">
            <a className="underline pr-4 text-blue-500">Gallery Page 5</a>
        </Link>
      </div>
      <hr></hr>
      <h3>Visited Pages:</h3>
      <ul>
        <li>{galleryPage1Status}</li>
        <li>{galleryPage2Status}</li>
        <li>{galleryPage3Status}</li>
        <li>{galleryPage4Status}</li>
        <li>{galleryPage5Status}</li>
        <li>{introVisitedStatus}</li>
      </ul>

    </div>
  }

}
