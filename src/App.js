import React from 'react';
import { Link} from 'react-scroll';
import './App.css';
import './projects.css';
import './otherprojects.css';
import './contact.css';
import './footer.css';

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

	constructor(props){
		super(props)
		this.state = {
			windowHeight: window.innerHeight,
			windowWidth: window.innerWidth
		}
		this.handleResize = this.handleResize.bind(this);
	}

	handleResize(){
		this.setState({
			windowHeight: window.innerHeight,
			windowWidth: window.innerWidth
		});

		let images = document.getElementsByClassName('resize-image-iphone');
		for(let i = 0; i<images.length; i++){
			if(this.state.windowWidth < 1100 && this.state.windowWidth > 600){
					images[i].width = this.state.windowWidth*0.4;
					images[i].height = images[i].width;
			}
			else if(this.state.windowWidth > 1100 ){
				images[i].width = 400;
				images[i].height = 400;
			}
		}

		images = document.getElementsByClassName('resize-image-laptop');
		for(let i = 0; i<images.length; i++){
			if(this.state.windowWidth < 1100 && this.state.windowWidth > 600){
					images[i].width = this.state.windowWidth*0.4;
					images[i].height = images[i].width*0.66;
			}
			else if(this.state.windowWidth > 1100 ){
				images[i].width = 450;
				images[i].height = 300;
			}
		}
	}

  componentDidMount(){
    window.addEventListener('scroll', scrollReveal);
		window.addEventListener('resize',this.handleResize);
    scrollReveal();
  }

  render(){
    return(
      <div id="root">
				<div id="topbar">
					<div id="icon">
						<img src="images/circle-icon.png" alt="icon" width="40px" height="40px" />
					</div>
					<NavBar />
				</div>
        <Home addElement={this.addElement} />
				<Contact />
				<Footer />
      </div>
    )
  }
}

function NavBar(){
	return(
		<div id="navbar" >
			<Link className="detail_btn"  to="About" spy={true} smooth='easeOutCubic' offset={-70} duration={500} >About </Link>
			<Link className="detail_btn"  to="Web" spy={true} smooth={true} offset={-70} duration={500} > Web & Mobile </Link>
			<Link className="detail_btn"  to="OtherProjects" spy={true} smooth={true} offset={-70} duration={500} > Side Projects </Link>
			<Link className="detail_btn"  to="Contact" spy={true} smooth={true} offset={-70} duration={500} > Contact </Link>
			<a href="images/AngieTa_Resume.pdf" className="detail_btn small-button" >Resume</a>
		</div>
	)
}

function Home(){
    return (
      <div>
        <div id="home">
          <div id="header">
            <h1>Hello!</h1>
						<h1 id="heading_bold">I'm Angie Ta, </h1>
						<h1>a front-end engineer intent on creating</h1>
						<h1>seamless and charming webpages.</h1>
          </div>
        </div>
					<About />
        	<Project />
					<OtherProjects />
      </div>
    )
  }

function About(){
    return(
      <div className="content" id="About">
				<div className="card">
					<h2 className="heading">About</h2>
          <div className="card-body">
          	<p>
          	My name is Angie Ta. I am currently a front-end software engineer seeking new opportunities.
						I recently graduated from UC Davis with a degree in Computer Science and Engineering after
					 	the opportunity to work closely on an iOS app with members of the UC Davis School of Medicine
					 	and later presented at the UC Davis Eye Center conferences.</p>
						<p>
						Recently, I enjoy building React webpages from design to testing to publishing. I am focused on creating scalable,
						device-friendly front-end design.</p>
          </div>
					</div>
					<a href="images/AngieTa_Resume.pdf" >
						<h2 className="card-title" id="ViewResume">View Resume</h2>
							<img className="arrow-demo-link" src="images/svg/text-document.svg" alt="Resume" height="30" width="30" />
					</a>
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
        <div className="card card_ver1">
				<a className="demo-link" href="https://github.com/angielt/Ophth" target="_blank" rel="noopener noreferrer">
					<img className="resize-image-iphone" src="images/ophthoiphone.png" alt="Demo" height="400" width="400" />
				</a>
          <div className="card-content">
					<div className="card-heading">
						<h4 className="card-title">PocketOphtho</h4>
						<a className="arrow-demo-link" href="https://github.com/angielt/Ophth" target="_blank" rel="noopener noreferrer">
							<img src="images/svg/arrow.svg" alt="Demo" height="20" width="20" />
							</a>
					</div>
            <div className="card-body">
              <p> Developed closely with members of the UC Davis School of Medicine and UC Davis Eye Center.  </p>
              <p> PocketOphtho is an interactive ophthalmology review app designed
              for residents and fellows preparing for OKAPs and written boards.
              </p>
							<div className="card-tags">
								<span className="card-tag"> XCode </span>
								<span className="card-tag"> Swift </span>
							</div>
            </div>
          </div>
        </div>

        <div className="card card_ver2">
					<a className="demo-link" href="projects/artmuseum/exhibit.html" target="_blank">
            <img className="resize-image-laptop" src="images/manettilaptop.png" alt="Demo" height="300" width="450" />
          </a>
          <div className="card-content">
						<div className="card-heading">
							<h4 className="card-title">Manetti Shrem Museum Exhibition Demo</h4>
							<a className="arrow-demo-link" href="projects/artmuseum/exhibit.html" target="_blank">
								<img src="images/svg/arrow.svg" alt="Demo" height="20" width="20" />
								</a>
						</div>
            <div className="card-body">
            	<p> Created a demo website for the Wayne Thiebaud Exhibition at the Manetti Shrem Art Museum
                using JS Flex.
            	</p>
							<div className="card-tags">
								<span className="card-tag"> JavaScript </span>
								<span className="card-tag"> HTML </span>
								<span className="card-tag"> CSS </span>
							</div>
          	</div>
          </div>
        </div>
				<div className="card">

					<div className="card-content">
						<div className="card-heading">
							<h4 className="card-title">Google CSSI MTV</h4>
							<a className="arrow-demo-link" href="http://www.stage-bright.appspot.com" target="_blank" rel="noopener noreferrer">
								<img src="images/svg/arrow.svg" alt="Demo" height="20" width="20" />
							</a>
						</div>
						<div className="card-body">
						<p> Created several small projects in Python, HTML and CSS that were
						used to create the resource pages and establish the teleprompter on
						stage-bright.appspot.com, a web app that anyone, especially children,
						can use to improve their public speaking and presentation skills.
						 </p>
						 <div className="card-tags">
							<span className="card-tag"> Google App Engine </span>
							<span className="card-tag"> Python </span>
							<span className="card-tag"> HTML </span>
							<span className="card-tag"> CSS </span>
							<span className="card-tag"> JavaScript </span>
							<span className="card-tag"> TeleprompterAPI </span>
						</div>
						</div>
					</div>
				</div>
      </div>
    )
  }

	function OtherProjects(){
		return(
			<div id="OtherProjects" className="content" >
				<div className="heading">
					<h2>Other Projects</h2>
					<h4> Side passions and personal projects turned reality </h4>
				</div>

				<div id="grid">
					<div className="grid-card">
							<div className="card-heading">
								<h4 className="card-title">TORO</h4>
								<a className="arrow-demo-link" href="images/welcometotheoasis.html">
									<img src="images/svg/arrow.svg" alt="Demo" height="15" width="15" />
								</a>
							</div>
	            <div className="card-body">
	            	<p> A 2D scroller platformer exploring the themes of animal ethics through a tuna fish's escape
	            	to freedom. Developed in a team using PICO-8.
	            	</p>
								<div className="card-tags">
	 								<span className="card-tag"> PICO-8 </span>
	 								<span className="card-tag"> Lua </span>
	 							</div>
	            </div>
	        </div>

	        <div className="grid-card">
							<div className="card-heading">
								<h4 className="card-title">1 Year Out</h4>
								<a className="arrow-demo-link" href="https://samclee.itch.io/1-year-out">
									<img src="images/svg/arrow.svg" alt="Demo" height="15" width="15" />
									</a>
							</div>
	            <div className="card-body">
	            <p> Created for annual Game Jam. A RPG adventure exploring life of 4 characters out of college.
	            I don't have an itch.io.
	            </p>
							<div className="card-tags">
								<span className="card-tag"> Lua </span>
								<span className="card-tag"> FireAlpaca </span>
							</div>
	          	</div>
					</div>

					<div className="grid-card">
							<div className="card-heading">
								<h4 className="card-title">Personal Site V1</h4>

							</div>
	            <div className="card-body">
	            <p>
								First digital resume using React.
	            </p>
							<div className="card-tags">
								<span className="card-tag"> React </span>
								<span className="card-tag"> Javascript </span>
								<span className="card-tag"> HTML </span>
								<span className="card-tag"> CSS </span>
							</div>
	          	</div>
						</div>
					</div>

        </div>

		)
	}


	function Contact(){
		return(
			<div id="Contact" className="content">
			<div className="heading">
				<h2>Contact</h2>
			</div>
				<div id="contact-content">
					<div id="contact-left">
						<ul>E-MAIL <a href="mailto:angielisata@gmail.com">angielisata@gmail.com</a></ul>
						<ul>GITHUB <a href="https://github.com/angielt">github.com/angielt</a></ul>
						<ul>LINKEDIN <a href="https://www.linkedin.com/in/angie-ta/">linkedin.com/in/angie-ta/</a></ul>

					</div>
					<div id="contact-right">
						<p>
						I'm currently seeking new opportunities. If you think
						I would be a great fit for your team please feel free to reach out.
						</p>
						<p>
						I also enjoy meeting new people! If you are interested I would love to make a new friend too! :>
						</p>
					</div>

				</div>

			</div>
		)
	}


	function Footer(){
		return(
			<div id='Footer'>
				<ul>
					Built by Angie Ta 2021 <span role='img' aria-label='wave-emoji'>👋</span>
				</ul>
				<ul>
					Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/authors/kirill-kazachek" title="Kirill Kazachek">Kirill Kazachek</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
				</ul>

			</div>
		)
	}
export default Page;
