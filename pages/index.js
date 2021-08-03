import Head from 'next/head'
import { Component} from 'react'
import HomePageLayout from '../components/HomePageLayout'
import Router from 'next/router'


export default class App extends Component {

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
    pagecount: "0/5",
    introVisited: false
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
        pagecount: "0/5",
        introVisited: false
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

    // TODO: Refactor this into a CompletionCheck function
    // VISITED PAGE STATES
    const galleryPage1Visited = this.state.galleryPage1;
    const galleryPage2Visited = this.state.galleryPage2;
    const galleryPage3Visited = this.state.galleryPage3;
    const galleryPage4Visited = this.state.galleryPage4;
    const galleryPage5Visited = this.state.galleryPage5;
    const dylanCavinBigSkyVisited = this.state.dylanCavinBigSky;
    const stevenPaulJuddMedallionVisited = this.state.stevenPaulJuddMedallion;
    const stevenPaulJuddPushmatahaVisited = this.state.stevenPaulJuddPushmataha;
    const dianaFolsomOkhinaVisited = this.state.dianaFolsomOkhina;
    const timNevaquayaTheMatriarchsVisited = this.state.timNevaquayaTheMatriarchs;
    const conniePhillipsDuskDawnVisited = this.state.conniePhillipsDuskDawn;
    const laurettaCokerJustLikeWeRememberedVisited = this.state.laurettaCokerJustLikeWeRemembered;
    const geraldHillVisited = this.state.geraldHill;
    const geraldHillFortScottVisited = this.state.geraldHillFortScott;
    const waniMarshallIshkiVisited = this.state.waniMarshallIshki;
    const joannaKaufmanMothStoryVisited = this.state.joannaKaufmanMothStory;
    const janeUmstedGorgetVisited = this.state.janeUmstedGorget;
    const janeUmstedMapVisited = this.state.janeUmstedMap;
    const dgSmallingSportsVisited = this.state.dgSmallingSports;
    const lindaBaileyWonderVisited = this.state.lindaBaileyWonder;

    // HOMEPAGE MESSAGE
    let homeStatusMessage;
    if (dylanCavinBigSkyVisited && stevenPaulJuddMedallionVisited && stevenPaulJuddPushmatahaVisited && dianaFolsomOkhinaVisited && timNevaquayaTheMatriarchsVisited && conniePhillipsDuskDawnVisited && laurettaCokerJustLikeWeRememberedVisited){
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
