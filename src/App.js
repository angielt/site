import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import logo from './logo.svg';
import './App.css';

class RightPage extends React.Component {
  constructor(props){
    super(props);
    this.elements = []
    this.state = {tab:0,language:'english'}
    this.addElement = this.addElement.bind(this)
    this.about = this.about.bind(this)
  }

  addElement(element){
    this.elements.push(element)
  }
  about(){
    var scroll = Scroll.animateScroll;
    scroll.scrollTo(100);
  }
  project(){
    var scroll = Scroll.animateScroll;
    scroll.scrollTo(400);
  }
  game(){
    var scroll = Scroll.animateScroll;
    scroll.scrollTo(800);
  }

  render(){
    return(
      <div id="root">
      <div id="button_group">
        <button type="button" className="detail_btn" id="1" onClick={this.about} >About</button>
        <button type="button" className="detail_btn" id="3" onClick={this.project} >Project Details</button>
        <button type="button" className="detail_btn" id="4" onClick={this.game}>Game Dev</button>
      </div>
          <Home addElement={this.addElement} />
      </div>
    )
  }
}


class Home extends React.Component{
  render(){
    var ScrollLink = Scroll.ScrollLink;
    var ScrollElement = Scroll.ScrollElement;
    let Element = <Game />
    this.props.addElement(Element)

    return (
      <div id="Home">
        <About />
        <Project />
        {Element}

      </div>
    )
  }
}

class About extends React.Component{

  render(){

    var title = {'english':['About'],
                 'chinese':['我是誰？']}
    var description = {'english':['My name is Angie Ta. I am a web/iOS developer and recent graduate from the University of California, Davis.','Some of my passions are:'],
                      'chinese':['你好，我叫Angie Ta。我是web/iOS developer.正在在加州大學戴维斯畢業了。情看我的網站。','我的一些興趣是:']
                      }
    var projects = {'english':['Projects and Experience'],
                      'chinese':['項目']
                      }


    return(
      <div className="Content" id="About" onLoad="this.style.opacity='1" >
      <h3 className="content-title">About</h3>
        <div className="card">
          <div className="card-body">
          <p className="card-text">
          My name is Angie Ta. I am a web/iOS developer and recent graduate from the University of California, Davis. <br></br>
          Some of my passions are:
          </p>
          <li>React/ReactNative</li>
          <li>CS in Medicine</li>
          <li>Linguistics/Learning Spoken Languages</li>
          <li>Language Translation</li>
          <li>Game Dev/Game Art</li>
          </div>
        </div>
      </div>
    )
  }
}

class Contact extends React.Component{
  render(){
    var contact = {'english':'Contact Me',
                 'chinese':'聯繫方式'}
    var info = {'english':'I would love to chat! Reach me at:',
                'chinese':'想跟我講的話請用:'}
    return (
      <div className="Content" id="Contact" onLoad="document.body.style.opacity='1'">
        <div className="card">
          <div className="card-body">
          <h4 className="card-title">{contact[this.props.curLanguage]}</h4>
          <p className="card-text">
            {info[this.props.curLanguage]}
          </p>
          <ul> angielisata@gmail.com</ul>
          <ul> or on social media</ul>
          </div>
        </div>
      </div>
    )
  }
}

class Project extends React.Component{
  render(){
    return (
      <div className="Content" id="Content" onLoad="document.body.style.opacity='1'">
      <h3 className="content-title">Recent Projects:</h3>

        <div className="card">
          <h4 className="card-title">PocketOphtho</h4>
          <div className="card-content">
            <img src="images/ophth.png" height="70" width="70"></img>
            <div className="card-body">
              <ul> Developed closely with members of the UC Davis School of Medicine and UC Davis Eye Center.  </ul>
              <ul> PocketOphtho is an interactive ophthalmology review app designed
              for residents and fellows preparing for OKAPs and written boards. With
              the use of spaced repetition, a learning technique that takes advantage
              of the psychological spacing effect, PocketOphtho aims to be the new
              standard for clinical review apps.
              </ul>
              <img border="0" alt="github" src="images/UCDavisHealth.svg" height="30" width="70"></img>
            </div>
          </div>
        </div>

        <div className="card">
          <h4 className="card-title">Manetti Shrem Museum Art Gallery Exhibition Demo</h4>
          <div className="card-content">
          <a href="projects/artmuseum/exhibit.html">Demo</a>
            <div className="card-body">
            <ul> Created a demo website for the Wayne Thiebaud Exhibition at the Manetti Shrem Art Museum
                using JS Flex.
            </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <h4 className="card-title">Google CSSI MTV</h4>
          <div className="card-content">
          <a href="http://www.stage-bright.appspot.com">Demo</a>
            <div className="card-body">
            <ul> Created several small projects in Python, HTML and CSS that were
            used to create the resource pages and establish the teleprompter on
            stage-bright.appspot.com, a web app that anyone, especially children,
            can use to improve their public speaking and presentation skills.
            The web app utilizes voice recognition APIs that produces a scrolling
            teleprompter and includes a library of linked YouTube videos and articles.  </ul>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

class Game extends React.Component{
  render(){
    return (
      <div className="Content" id="Content" onLoad="document.body.style.opacity='1'">
      <h3 className="content-title">Recent Game Projects:</h3>
      <p>I dabble a bit into the Game Dev and Art scene. Here is what I have created so far. </p>

        <div className="card">
          <h4 className="card-title">The Oasis (Click fish to play)</h4>
          <div className="card-content">
            <a href="images/welcometotheoasis.html">
              <img border="0" alt="github" src="images/toro.png" height="70" width="70"></img>
            </a>
            <div className="card-body">
            <ul> A 2D scroller platformer exploring the themes of animal ethics through a tuna fish's escape
            to freedom. Developed in a team using PICO-8.
            </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <h4 className="card-title">1 Year Out</h4>
          <div className="card-content">
          <a href="https://samclee.itch.io/1-year-out">
            <img border="0" alt="github" src="images/logo.png" height="70" width="70"></img>
          </a>
            <div className="card-body">
            <ul> A RPG adventure exploring life of 4 characters out of college. Developed in a team using LUA and FireAlpaca.
            I don't have an itch.io.
            </ul>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
export default RightPage;
