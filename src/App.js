import React from 'react';
import logo from './logo.svg';
import './App.css';

class RightPage extends React.Component {
  constructor(props){
    super(props);
    this.contact = this.contact.bind(this);
    this.language = this.language.bind(this);
    this.state = {tab:0}
  }

  language(){
      this.setState({tab:1});
  }

  contact(){
      this.setState({tab:2});
  }

  render(){
    return(
      <div id="root">
      <div id="button_group">
        <button type="button" className="detail_btn" onClick={this.language} >語言</button>
        <button type="button" className="detail_btn" onClick={this.contact}>Contact</button>
        <button type="button" className="detail_btn" >Project Details</button>
        <button type="button" className="detail_btn" >Art</button>
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
      <div className="Content" onload="document.body.style.opacity='1'">
        <div className="card">
          <div className="card-body">
          <h4 className="card-title">Who am I?</h4>
          <p className="card-text">
          My name is Angie Ta, and I am a web/iOS developer and recent graduate from
          the University of California, Davis. <br></br>
          Some of my interests are:
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
            I would love to chat! Reach out to me:
          </p>
          <ul> angielisata@gmail.com</ul>
          <ul> or on social media</ul>
          </div>
        </div>
      </div>
    )
  }
}
export default RightPage;
