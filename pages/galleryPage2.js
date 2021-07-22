import Head from 'next/head'
import { Component} from 'react'
import Link from 'next/link'
import Gallery from "../components/gallery2";

export default class GalleryPost2 extends Component {

  state = {
    galleryPage1: false,
    galleryPage2: false,
    galleryPage3: false
  }

  // Button Handlers
  togglePage2 = () => {
    this.setState(prevState => {
      return {
        galleryPage2: true
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
    this.togglePage2();

  }

  render(){

    return(
      <Gallery>

      </Gallery>
    )
  }

}
