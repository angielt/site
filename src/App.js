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
    this.state = {tab:0}
  }

  language(){
      this.setState({tab:1});
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
        <button type="button" className="detail_btn" onClick={this.language} >語言</button>
        <button type="button" className="detail_btn" onClick={this.contact}>Contact</button>
        <button type="button" className="detail_btn" onClick={this.project} >Project Details</button>
        <button type="button" className="detail_btn" onClick={this.game}>Game</button>
      </div>
          <Content curTab={this.state.tab}/>
      </div>
    )
  }
}


class Content extends React.Component {
  render(){
    let content;

    if(this.props.curTab==0 ||this.props.curTab==1){
      content = <Home />
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
    return (
      <div className="Content" onload="this.style.opacity='1">
        <div className="card">
          <div className="card-body">
          <h4 className="card-title">Who am I?</h4>
          <p className="card-text">
          My name is Angie Ta, and I am a web/iOS developer and recent graduate from
          the University of California, Davis. <br></br>
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
          <img src="images/ophth.png" height="42" width="42"></img>
          <div>
          <ul> Developed closely with members of the UC Davis School of Medicine and UC Davis Eye Center.  </ul>
          <ul> PocketOphtho is an interactive ophthalmology review app designed
          for residents and fellows preparing for OKAPs and written boards. With
          the use of spaced repetition, a learning technique that takes advantage
          of the psychological spacing effect, PocketOphtho aims to be the new
          standard for clinical review apps. </ul>
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
