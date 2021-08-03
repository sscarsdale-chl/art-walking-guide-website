import Head from 'next/head'
import { Component } from 'react'
import Link from 'next/link'
import Gallery from "../components/Fort_Scott";
import Intro from "../components/intro";

export default class GalleryPost5 extends Component {

  state = {
    galleryPage1: false,
    galleryPage2: false,
    galleryPage3: false,
    galleryPage4: false,
    galleryPage5: false,
    dylanCavinBigSky: false,
    stevenPaulJuddMedallion: false,
    stevenPaulJuddPushmataha: false,
    dianaFolsomOkhina: false,
    timNevaquayaTheMatriarchs: false,
    conniePhillipsDuskDawn: false,
    laurettaCokerJustLikeWeRemembered: false,
    geraldHill: false,
    geraldHillFortScott: false,
    waniMarshallIshki: false,
    joannaKaufmanMothStory: false,
    janeUmstedGorget: false,
    janeUmstedMap: false,
    dgSmallingSports: false,
    lindaBaileyWonder: false,
    pageCount: "0/5",
    introVisited: false
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
        geraldHillFortScott: true
      }
    })

    // Figure out how many pages have been viewed and set the PageCount string
    this.setState(prevState => {

      var pageStatusArray = [ prevState.galleryPage1,
                                prevState.galleryPage2,
                                prevState.galleryPage3,
                                prevState.galleryPage4,
                                prevState.galleryPage5,
                                prevState.dylanCavinBigSky,
                                prevState.stevenPaulJuddMedallion,
                                prevState.stevenPaulJuddPushmataha,
                                prevState.dianaFolsomOkhina,
                                prevState.timNevaquayaTheMatriarchs,
                                prevState.conniePhillipsDuskDawn,
                                prevState.laurettaCokerJustLikeWeRemembered,
                                prevState.geraldHill,
                                prevState.geraldHillFortScott,
                                prevState.waniMarshallIshki,
                                prevState.joannaKaufmanMothStory,
                                prevState.janeUmstedGorget,
                                prevState.janeUmstedMap,
                                prevState.dgSmallingSports,
                                prevState.lindaBaileyWonder ];

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
    if (!this.state.introVisited) {
      return(
        <Intro></Intro>
      )
    }else{
      return(
        <Gallery pagecount={this.state.pageCount} />
      )
    }
  }

}
