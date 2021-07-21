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
        <h1>Success!</h1>
        <p>You have completed the Guided Art Walk. Show this page at the desk to claim your prize.</p>
        <div>
            <Link href="/">
                <a>Home</a>
            </Link>
        </div>
      
    </div>
  }

}