import Head from 'next/head'
import { Component} from 'react'
import Link from 'next/link'

export default class GalleryPost5 extends Component {

  state = {
    galleryPage1: false,
    galleryPage2: false,
    galleryPage3: false,
    galleryPage4: false,
    galleryPage5: false
  }

  // Button Handlers
  togglePage5 = () => {
    this.setState(prevState => {
      return {
        galleryPage5: true
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
    this.togglePage5();

  }
  
  render(){

    return <div>
      <Head title="Gallery Page 5"/>
      <h1>Gallery Page 5</h1>
        <Link href="/">
            <a>Home</a>
        </Link>
    </div>
  }

}