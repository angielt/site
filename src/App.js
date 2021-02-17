import React from 'react';
import { Link} from 'react-scroll';
import './App.css';
import './content.css'
import AnimateSvg from './AnimateSvg'

function scrollReveal() {
	var revealPoint = 150;
	var revealElement = document.querySelectorAll('.card');
	var revealTitle = document.querySelectorAll('.heading');
	for (var i = 0; i < revealTitle.length; i++) {
		var windowHeight = window.innerHeight;
		var revealTop = revealTitle[i].getBoundingClientRect().top;
		if (revealTop < windowHeight - revealPoint) {
			revealTitle[i].classList.add('active');
		}
	}
	for (var j = 0; j < revealElement.length; j++) {
		 windowHeight = window.innerHeight;
		 revealTop = revealElement[j].getBoundingClientRect().top;
		if (revealTop < windowHeight - revealPoint) {
			revealElement[j].classList.add('active');
		}
	}
}


class Page extends React.Component {

  componentDidMount(){
    window.addEventListener('scroll', scrollReveal);
    scrollReveal();
  }

  render(){
    return(
      <div id="root">
				<div id="topbar">
					<div id="icon">
						<img src="images/circle-icon.png" alt="icon" width="40" height="40" />
					</div>
					<NavBar />
				</div>
				<SNSBar />
        <Home addElement={this.addElement} />
      </div>
    )
  }
}

function NavBar(){
	return(
		<div id="navbar" >
			<Link className="detail_btn"  to="About" spy={true} smooth='easeOutCubic' offset={-70} duration={500} >About </Link>
			<Link className="detail_btn"  to="Web" spy={true} smooth={true} offset={-70} duration={500} > Web & Mobile </Link>
			<Link className="detail_btn"  to="Games" spy={true} smooth={true} offset={-70} duration={500} > Game Dev </Link>
			<Link className="detail_btn"  to="Games" spy={true} smooth={true} offset={-70} duration={500} > Contact </Link>
			<a href="images/AngieTa_Resume.pdf" className="detail_btn" id="toResume">Resume</a>
		</div>
	)
}

function SNSBar(){
	return(
		<div>
		<div id="SNSBar">
		<li>
			<a href="https://github.com/angielt" target="_blank"  rel="noopener noreferrer">
				<img src="images/svg/github.svg" alt="Demo" />
			</a>
		</li>
		<li>
			<a href="https://www.instagram.com/angieesque/" target="_blank"  rel="noopener noreferrer">
				<img src="images/svg/instagram.svg" alt="Demo" />
			</a>
		</li>
		<li>
			<a href="https://github.com/angielt/Ophth" target="_blank"  rel="noopener noreferrer">
				<img src="images/svg/email.svg" alt="Demo" />
			</a>
		</li>
		<li>
			<a href="https://www.linkedin.com/in/angie-ta/" target="_blank"  rel="noopener noreferrer">
				<img src="images/svg/linkedin.svg" alt="Demo" />
			</a>
		</li>
		</div>
		</div>
	)
}

function Home(){
    return (
      <div>
        <div id="home">
          <div id="Header">
            <AnimateSvg />
            <h3 className="fade-in">Welcome to my portfolio</h3>
          </div>
					<div id="overlay_container">
						<div id="overlay"></div>
						<img src="/images/toro.png" alt="pixel fish" height="100" width="100" className="image"/>
					</div>
        </div>
				<About />
        <Project />
        <Game  />
				<Footer />
      </div>
    )
  }

function About(){
    return(
      <div className="content" id="About"  >
			<div className="heading">
				<h2>About</h2>
			</div>
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

function Project(){
    return (
      <div id="Web" className="content" >
        <div className="heading">
          <h2>Web & Mobile</h2>
          <h4> Projects I am proud of </h4>
        </div>
        <div className="card">
				<a className="demo-link" href="https://github.com/angielt/Ophth" target="_blank" rel="noopener noreferrer">
					<img src="images/ophth.png" alt="Demo" height="150" width="150" />
				</a>
          <div className="card-content">
						<h4 className="card-title">PocketOphtho</h4>
            <div className="card-body">
              <p> Developed closely with members of the UC Davis School of Medicine and UC Davis Eye Center.  </p>
              <p> PocketOphtho is an interactive ophthalmology review app designed
              for residents and fellows preparing for OKAPs and written boards.
              </p>

            </div>
          </div>
        </div>

        <div className="card">
					<a className="demo-link" href="projects/artmuseum/exhibit.html" target="_blank">
            <img src="images/manettishremicon.png" alt="Demo" height="200" width="250" />
          </a>
          <div className="card-content">
					<h4 className="card-title">Manetti Shrem Museum Gallery Exhibition Demo</h4>
            <div className="card-body">
            <p> Created a demo website for the Wayne Thiebaud Exhibition at the Manetti Shrem Art Museum
                using JS Flex.
            </p>
            </div>
          </div>
        </div>

        <div className="card">
				<a className="demo-link" href="http://www.stage-bright.appspot.com" target="_blank" rel="noopener noreferrer">
					<img src="images/cssidemo.png" alt="Demo" height="200" width="250" />
				</a>
          <div className="card-content">
						<h4 className="card-title">Google CSSI MTV</h4>
            <div className="card-body">
            <p> Created several small projects in Python, HTML and CSS that were
            used to create the resource pages and establish the teleprompter on
            stage-bright.appspot.com, a web app that anyone, especially children,
            can use to improve their public speaking and presentation skills.
            The web app utilizes voice recognition APIs that produces a scrolling
            teleprompter and includes a library of linked YouTube videos and articles.  </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

function Game(){
    return (
      <div id="Games" className="content">
      <div className="heading">
        <h2>Game Dev</h2>
        <h4> Hobbies and side passions turned reality </h4>
      </div>

        <div className="card">
				<a href="images/welcometotheoasis.html">
					<img border="0" alt="github" src="images/toro.png" height="150" width="150"></img>
				</a>
          <div className="card-content">
						<h4 className="card-title">The Oasis (Click fish to play)</h4>
            <div className="card-body">
            <p> A 2D scroller platformer exploring the themes of animal ethics through a tuna fish's escape
            to freedom. Developed in a team using PICO-8.
            </p>
						<a href="https://github.com/angielt/Ophth" target="_blank" rel="noopener noreferrer"> Start</a>
            </div>
          </div>
        </div>

        <div className="card">
				<a href="https://samclee.itch.io/1-year-out">
					<img border="0" alt="github" src="images/1yearout.png" height="100" width="150"></img>
				</a>
          <div className="card-content">
					<h4 className="card-title">1 Year Out</h4>
            <div className="card-body">
            <p> A RPG adventure exploring life of 4 characters out of college. Developed in a team using LUA and FireAlpaca.
            I don't have an itch.io.
            </p>
            </div>
          </div>
        </div>

      </div>
    )
  }


	function Footer(){
		return(
			<div id='footer'>
				<ul>
					Built by Angie Ta 2021
				</ul>
				<ul>
				Icons made by
				<a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
				</ul>

			</div>
		)
	}
export default Page;
