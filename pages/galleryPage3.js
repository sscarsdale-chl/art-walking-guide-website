import Head from 'next/head'
import { Component} from 'react'
import Link from 'next/link'
import Gallery from "../components/gallery3";

export default class GalleryPost3 extends Component {

  state = {
    galleryPage1: false,
    galleryPage2: false,
    galleryPage3: false,
    galleryPage4: false,
    galleryPage5: false
  }

  // Button Handlers
  togglePage3 = () => {
    this.setState(prevState => {
      return {
        galleryPage3: true
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
    this.togglePage3();

  }

  render(){

    return(
      <Gallery>

      </Gallery>
    )
  }

}
