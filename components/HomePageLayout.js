import Head from 'next/head'
import { Component} from 'react'
import Link from 'next/link'

export default class HomePageLayout extends Component {

  state = {
    galleryPage1: false,
    galleryPage2: false,
    galleryPage3: false,
    galleryPage4: false,
    galleryPage5: false
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
      galleryPage1Status = <p>You have visited GalleryPage1</p>
    } else {
      galleryPage1Status = <p>You have NOT visited GalleryPage1</p>
    }

    const galleryPage2Visited = this.state.galleryPage2;
    let galleryPage2Status;
    if(galleryPage2Visited){
      galleryPage2Status = <p>You have visited GalleryPage2</p>
    } else {
      galleryPage2Status = <p>You have NOT visited GalleryPage2</p>
    }

    const galleryPage3Visited = this.state.galleryPage3;
    let galleryPage3Status;
    if(galleryPage3Visited){
      galleryPage3Status = <p>You have visited GalleryPage3</p>
    } else {
      galleryPage3Status = <p>You have NOT visited GalleryPage3</p>
    }

    const galleryPage4Visited = this.state.galleryPage4;
    let galleryPage4Status;
    if(galleryPage4Visited){
      galleryPage4Status = <p>You have visited GalleryPage4</p>
    } else {
      galleryPage4Status = <p>You have NOT visited GalleryPage4</p>
    }

    const galleryPage5Visited = this.state.galleryPage5;
    let galleryPage5Status;
    if(galleryPage5Visited){
      galleryPage5Status = <p>You have visited GalleryPage5</p>
    } else {
      galleryPage5Status = <p>You have NOT visited GalleryPage5</p>
    }

    // HOMEPAGE MESSAGE
    let homeStatusMessage;
    if (galleryPage1Visited && galleryPage2Visited && galleryPage3Visited && galleryPage4Visited && galleryPage5Visited){
      homeStatusMessage = <h1>You have visited all of the pages, collect your prize</h1>
    } else {
      homeStatusMessage = <h1>Home Page</h1>
    }

    return <div>
      <Head title="home"/>
      {homeStatusMessage}
      <div>
        <Link href="/galleryPage1">
            <a>Gallery Page 1</a>
        </Link>
        <Link href="/galleryPage2">
            <a>Gallery Page 2</a>
        </Link>
        <Link href="/galleryPage3">
            <a>Gallery Page 3</a>
        </Link>
        <Link href="/galleryPage4">
            <a>Gallery Page 4</a>
        </Link>
        <Link href="/galleryPage5">
            <a>Gallery Page 5</a>
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
      </ul>
  
    </div>
  }

}