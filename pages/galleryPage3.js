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
    galleryPage5: false,
    pageCount: "0/5"
  }

  // Update LocalStorage
  componentDidUpdate() {
    localStorage.setItem('_pagetracking', JSON.stringify(this.state))
  }

  // Load State from LocalStorage and update as necessary
  componentDidMount(){
    const data = localStorage.getItem('_pagetracking')

    // Check for data in LocalStorage and set state if it exists
    if(data) {  
      this.setState(prevState => {
        return JSON.parse(data)
      })
    }

    // Flag this page as viewed
    this.setState(prevState => {
      return {
        galleryPage3: true
      }
    })

    // Figure out how many pages have been viewed and set the PageCount string
    this.setState(prevState => {

      var pageStatusArray = [ prevState.galleryPage1,
                                prevState.galleryPage2,
                                prevState.galleryPage3,
                                prevState.galleryPage4,
                                prevState.galleryPage5 ];

      let counter = 0;

      for(var i=0; i<pageStatusArray.length; i++) {
        if(pageStatusArray[i]) {
          counter += 1;
        }
      }
    
      return {
        pageCount: counter + "/" + pageStatusArray.length
      }
    })

  }

  render(){

    return(
      <Gallery pagecount={this.state.pageCount} />    
    )
  }

}
