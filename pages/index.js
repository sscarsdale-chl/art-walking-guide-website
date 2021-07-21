import Head from 'next/head'
import { Component} from 'react'
import Link from 'next/link'
import HomePageLayout from '../components/HomePageLayout'
import Router from 'next/router'


export default class App extends Component {

  state = {
    galleryPage1: false,
    galleryPage2: false,
    galleryPage3: false,
    galleryPage4: false,
    galleryPage5: false
  }

  // Button Handlers
  resetStateVars = () => {
    alert("resetting state");
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
  }
  
  render(){

    // VISITED PAGE STATES
    const galleryPage1Visited = this.state.galleryPage1;
    const galleryPage2Visited = this.state.galleryPage2;
    const galleryPage3Visited = this.state.galleryPage3;
    const galleryPage4Visited = this.state.galleryPage4;
    const galleryPage5Visited = this.state.galleryPage5;

    // HOMEPAGE MESSAGE
    let homeStatusMessage;
    if (galleryPage1Visited && galleryPage2Visited && galleryPage3Visited && galleryPage4Visited && galleryPage5Visited){
      //homeStatusMessage = <SuccessPageLayout/>
      Router.push('/successPage')
    } else {
      homeStatusMessage = <HomePageLayout/>
    }

    return <div>
      <Head title="home"/>
      {homeStatusMessage}
    </div>
  }

}
