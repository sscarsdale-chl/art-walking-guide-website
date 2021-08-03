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

    const dylanCavinBigSkyVisited = this.state.dylanCavinBigSky;
    let dylanCavinBigSkyStatus;
    if(dylanCavinBigSkyVisited){
      dylanCavinBigSkyStatus = <p className="font-sans text-green-500">dylanCavinBigSky: YES</p>
    } else {
      dylanCavinBigSkyStatus = <p className="font-sans text-red-500">dylanCavinBigSky: NO</p>
    }

    const stevenPaulJuddMedallionVisited = this.state.stevenPaulJuddMedallion;
    let stevenPaulJuddMedallionStatus;
    if(stevenPaulJuddMedallionVisited){
      stevenPaulJuddMedallionStatus = <p className="font-sans text-green-500">stevenPaulJuddMedallion: YES</p>
    } else {
      stevenPaulJuddMedallionStatus = <p className="font-sans text-red-500">stevenPaulJuddMedallion: NO</p>
    }

    const stevenPaulJuddPushmatahaVisited = this.state.stevenPaulJuddPushmataha;
    let stevenPaulJuddPushmatahaStatus;
    if(stevenPaulJuddPushmatahaVisited){
      stevenPaulJuddPushmatahaStatus = <p className="font-sans text-green-500">stevenPaulJuddPushmataha: YES</p>
    } else {
      stevenPaulJuddPushmatahaStatus = <p className="font-sans text-red-500">stevenPaulJuddPushmataha: NO</p>
    }

    const dianaFolsomOkhinaVisited = this.state.dianaFolsomOkhina;
    let dianaFolsomOkhinaStatus;
    if(dianaFolsomOkhinaVisited){
      dianaFolsomOkhinaStatus = <p className="font-sans text-green-500">dianaFolsomOkhina: YES</p>
    } else {
      dianaFolsomOkhinaStatus = <p className="font-sans text-red-500">dianaFolsomOkhina: NO</p>
    }

    const timNevaquayaTheMatriarchsVisited = this.state.timNevaquayaTheMatriarchs;
    let timNevaquayaTheMatriarchsStatus;
    if(timNevaquayaTheMatriarchsVisited){
      timNevaquayaTheMatriarchsStatus = <p className="font-sans text-green-500">timNevaquayaTheMatriarchs: YES</p>
    } else {
      timNevaquayaTheMatriarchsStatus = <p className="font-sans text-red-500">timNevaquayaTheMatriarchs: NO</p>
    }

    const conniePhillipsDuskDawnVisited = this.state.conniePhillipsDuskDawn;
    let conniePhillipsDuskDawnStatus;
    if(conniePhillipsDuskDawnVisited){
      conniePhillipsDuskDawnStatus = <p className="font-sans text-green-500">conniePhillipsDuskDawn: YES</p>
    } else {
      conniePhillipsDuskDawnStatus = <p className="font-sans text-red-500">conniePhillipsDuskDawn: NO</p>
    }

    const laurettaCokerJustLikeWeRememberedVisited = this.state.laurettaCokerJustLikeWeRemembered;
    let laurettaCokerJustLikeWeRememberedStatus;
    if(laurettaCokerJustLikeWeRememberedVisited){
      laurettaCokerJustLikeWeRememberedStatus = <p className="font-sans text-green-500">laurettaCokerJustLikeWeRemembered: YES</p>
    } else {
      laurettaCokerJustLikeWeRememberedStatus = <p className="font-sans text-red-500">laurettaCokerJustLikeWeRemembered: NO</p>
    }

    const geraldHillVisited = this.state.geraldHill;
    let geraldHillStatus;
    if(geraldHillVisited){
      geraldHillStatus = <p className="font-sans text-green-500">geraldHill: YES</p>
    } else {
      geraldHillStatus = <p className="font-sans text-red-500">geraldHill: NO</p>
    }

    const geraldHillFortScottVisited = this.state.geraldHillFortScott;
    let geraldHillFortScottStatus;
    if(geraldHillFortScottVisited){
      geraldHillFortScottStatus = <p className="font-sans text-green-500">geraldHillFortScott: YES</p>
    } else {
      geraldHillFortScottStatus = <p className="font-sans text-red-500">geraldHillFortScott: NO</p>
    }

    const waniMarshallIshkiVisited = this.state.waniMarshallIshki;
    let waniMarshallIshkiStatus;
    if(waniMarshallIshkiVisited){
      waniMarshallIshkiStatus = <p className="font-sans text-green-500">waniMarshallIshki: YES</p>
    } else {
      waniMarshallIshkiStatus = <p className="font-sans text-red-500">waniMarshallIshki: NO</p>
    }

    const joannaKaufmanMothStoryVisited = this.state.joannaKaufmanMothStory;
    let joannaKaufmanMothStoryStatus;
    if(joannaKaufmanMothStoryVisited){
      joannaKaufmanMothStoryStatus = <p className="font-sans text-green-500">joannaKaufmanMothStory: YES</p>
    } else {
      joannaKaufmanMothStoryStatus = <p className="font-sans text-red-500">joannaKaufmanMothStory: NO</p>
    }

    const janeUmstedGorgetVisited = this.state.janeUmstedGorget;
    let janeUmstedGorgetStatus;
    if(janeUmstedGorgetVisited){
      janeUmstedGorgetStatus = <p className="font-sans text-green-500">janeUmstedGorget: YES</p>
    } else {
      janeUmstedGorgetStatus = <p className="font-sans text-red-500">janeUmstedGorget: NO</p>
    }

    const janeUmstedMapVisited = this.state.janeUmstedMap;
    let janeUmstedMapStatus;
    if(janeUmstedMapVisited){
      janeUmstedMapStatus = <p className="font-sans text-green-500">janeUmstedMap: YES</p>
    } else {
      janeUmstedMapStatus = <p className="font-sans text-red-500">janeUmstedMap: NO</p>
    }

    const dgSmallingSportsVisited = this.state.dgSmallingSports;
    let dgSmallingSportsStatus;
    if(dgSmallingSportsVisited){
      dgSmallingSportsStatus = <p className="font-sans text-green-500">dgSmallingSports: YES</p>
    } else {
      dgSmallingSportsStatus = <p className="font-sans text-red-500">dgSmallingSports: NO</p>
    }

    const lindaBaileyWonderVisited = this.state.lindaBaileyWonder;
    let lindaBaileyWonderStatus;
    if(lindaBaileyWonderVisited){
      lindaBaileyWonderStatus = <p className="font-sans text-green-500">lindaBaileyWonder: YES</p>
    } else {
      lindaBaileyWonderStatus = <p className="font-sans text-red-500">lindaBaileyWonder: NO</p>
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
        <Link href="/Dylan_Cavin_Big_Sky">
            <a className="underline pr-4 text-blue-500">Dylan Cavin Big Sky</a>
        </Link>
        <Link href="/Steven_Paul_Judd_Medallion">
            <a className="underline pr-4 text-blue-500">Steven Paul Judd Medallion</a>
        </Link>
        <Link href="/Steven_Paul_Judd_Pushmataha">
            <a className="underline pr-4 text-blue-500">Steven Paul Judd Pushmataha</a>
        </Link>
        <Link href="/Diana_Folsom">
            <a className="underline pr-4 text-blue-500">Diana Folsom Okhina</a>
        </Link>
        <Link href="/Tim_Nevaquaya_The_Matriarchs">
            <a className="underline pr-4 text-blue-500">Tim Nevaquaya The Matriarchs</a>
        </Link>
        <Link href="/Connie_Phillips">
            <a className="underline pr-4 text-blue-500">Connie Phillips Dusk & Dawn</a>
        </Link>
        <Link href="/Lauretta_Newby_Coker_Just_Like_We_Remembered">
            <a className="underline pr-4 text-blue-500">Lauretta Coker Just Like We Remembered</a>
        </Link>
        <Link href="/Gerald_Hill_Choctaw_Nation_Hospital">
            <a className="underline pr-4 text-blue-500">Gerald Hill Choctaw Nation Hospital</a>
        </Link>
        <Link href="/Gerald_Hill_Choctaw_Fort_Scott">
            <a className="underline pr-4 text-blue-500">Gerald Hill Fort Scott</a>
        </Link>
        <Link href="/Wani_Marshall_Ishki">
            <a className="underline pr-4 text-blue-500">Wani Marshall Ishki</a>
        </Link>
        <Link href="/Joanna_Kaufman_Moth_Story">
            <a className="underline pr-4 text-blue-500">Joanna Kaufman Moth Story</a>
        </Link>
        <Link href="/Jane_Umsted_GOTSK">
            <a className="underline pr-4 text-blue-500">Jane Umsted Gorget of the Sun King</a>
        </Link>
        <Link href="/Jane_Umsted_MOTSK">
            <a className="underline pr-4 text-blue-500">Jane Umsted Map of the Sun King</a>
        </Link>
        <Link href="/DG_Smalling_Sport_Art_Series">
            <a className="underline pr-4 text-blue-500">DG Smalling Sport Art Series</a>
        </Link>
        <Link href="/Linda_Bailey_When_I_In_Awesome_Wonder">
            <a className="underline pr-4 text-blue-500">Linda Bailey When I in Awesome Wonder</a>
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
        <li>{dylanCavinBigSkyStatus}</li>
        <li>{stevenPaulJuddMedallionStatus}</li>
        <li>{stevenPaulJuddPushmatahaStatus}</li>
        <li>{dianaFolsomOkhinaStatus}</li>
        <li>{timNevaquayaTheMatriarchsStatus}</li>
        <li>{conniePhillipsDuskDawnStatus}</li>
        <li>{laurettaCokerJustLikeWeRememberedStatus}</li>
        <li>{geraldHillStatus}</li>
        <li>{geraldHillFortScottStatus}</li>
        <li>{waniMarshallIshkiStatus}</li>
        <li>{joannaKaufmanMothStoryStatus}</li>
        <li>{janeUmstedGorgetStatus}</li>
        <li>{janeUmstedMapStatus}</li>
        <li>{dgSmallingSportsStatus}</li>
        <li>{lindaBaileyWonderStatus}</li>
        <li>{introVisitedStatus}</li>
      </ul>

    </div>
  }

}
