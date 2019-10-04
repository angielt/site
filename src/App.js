import React from 'react';
import logo from './logo.svg';
import './App.css';

class RightPage extends React.Component {
  constructor(props){
    super(props);
    this.contact = this.contact.bind(this);
    this.language = this.language.bind(this);
    this.project = this.project.bind(this);
    this.game = this.game.bind(this);
    this.state = {tab:0,language:'english'}
  }

  language(){
      this.setState({tab:1});
      if(this.state.language == 'english'){
          this.setState({language:'chinese'})
      }
      else if(this.state.language == 'chinese') {
          this.setState({language:'english'})
      }
  }
  contact(){
      this.setState({tab:2});
  }
  project(){
      this.setState({tab:3});
  }
  game(){
      this.setState({tab:4});
  }

  render(){
    return(
      <div id="root">
      <div id="button_group">
        <button type="button" className="detail_btn" onClick={this.language} title="coming soon，請等一下" >語言</button>
        <button type="button" className="detail_btn" onClick={this.contact}>Contact</button>
        <button type="button" className="detail_btn" onClick={this.project} >Project Details</button>
        <button type="button" className="detail_btn" onClick={this.game}>Game Dev</button>
      </div>
          <Content curTab={this.state.tab} curLanguage={this.state.language}/>
      </div>
    )
  }
}


class Content extends React.Component {
  render(){
    let content;

    if(this.props.curTab==0 ||this.props.curTab==1){
      content = <Home curLanguage={this.props.curLanguage}/>
    }
    else if(this.props.curTab==2){
      content = <Contact />
    }
    else if(this.props.curTab==3){
      content = <Project />
    }
    else if(this.props.curTab==4){
      content = <Game />
    }
    return (
      <div>
      {content}
      </div>
    )
  }
}

class Home extends React.Component{
  render(){
    var index;
    var title = {'english':['Who am I?'],
                 'chinese':['我是誰？']}
    var description = {'english':['My name is Angie Ta. I am a web/iOS developer and recent graduate from the University of California, Davis.','Some of my passions are:'],
                      'chinese':['你好，我叫Angie Ta。我是web/iOS developer.正在在加州大學戴维斯畢業了。情看我的網站。','你好']
                      }


    if(this.props.curLanguage=="chinese"){
    }
    return (
      <div className="Content" onload="this.style.opacity='1">
        <div className="card">
          <div className="card-body">
          <h4 className="card-title">{title[this.props.curLanguage]}</h4>
          <p className="card-text">
          {description[this.props.curLanguage][0]} <br></br>
          Some of my passions are:
          </p>
          <li>React/ReactNative</li>
          <li>CS in Medicine</li>
          <li>Linguistics/Learning Spoken Languages</li>
          <li>Language Translation</li>
          <li>Game Dev/Game Art</li>
          </div>
        </div>
        <div className="card">
          <h4 className="card-title">Projects and Experience</h4>
          <div className="card-body">
          <p className="card-text">PocketOphtho
          </p>
          <p className="card-text">Google CSSI 2015 MTV
          </p>
          </div>
        </div>
      </div>
    )
  }
}

class Contact extends React.Component{
  render(){
    return (
      <div className="Content" onload="document.body.style.opacity='1'">
        <div className="card">
          <div className="card-body">
          <h4 className="card-title">Contact Me</h4>
          <p className="card-text">
            I would love to chat! Reach out to me @:
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
      <div className="Content" onload="document.body.style.opacity='1'">
        <div className="card">
          <div className="card-body">
          <h4 className="card-title">Recent Projects:</h4>
          <p className="card-text">
            PocketOphtho
          </p>
          <img src="images/ophth.png" height="70" width="70"></img>
          <div>
          <ul> Developed closely with members of the UC Davis School of Medicine and UC Davis Eye Center.  </ul>
          <ul> PocketOphtho is an interactive ophthalmology review app designed
          for residents and fellows preparing for OKAPs and written boards. With
          the use of spaced repetition, a learning technique that takes advantage
          of the psychological spacing effect, PocketOphtho aims to be the new
          standard for clinical review apps. </ul>
          <img border="0" alt="github" src="images/UCDavisHealth.svg" height="30" width="70"></img>
          </div>
          <p className="card-text">
            Google CSSI MTV
          </p>
          <div>
          <a href="www.stage-bright.appspot.com">
          Demo
          </a>
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
      <div className="Content" onload="document.body.style.opacity='1'">
        <div className="card">
          <div className="card-body">
          <h4 className="card-title">Recent Projects:</h4>
          <p className="card-text">
            I dabble a bit into the Game Dev and Art scene. Here is what I have created so far.
          </p>
          <a href="images/welcometotheoasis.html">
            <img border="0" alt="github" src="images/toro.png" height="70" width="70"></img>
          </a>
          <div>
          <h5> The Oasis (Click fish to play)</h5>
          <ul> A 2D scroller platformer exploring the themes of animal ethics through a tuna fish's escape
          to freedom. Developed in a team using PICO-8.
          </ul>
          <a href="https://samclee.itch.io/1-year-out">
            <img border="0" alt="github" src="images/logo.png" height="70" width="70"></img>
          </a>
          <h5> 1 Year Out (Click)</h5>
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
