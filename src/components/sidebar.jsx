import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <h1 id="colorlib-logo"><a href="index.html">Pravin Deshmukh</a></h1>
              <span className="email"><i className="icon-mail"></i> pravin.deshmukh12@gmail.com</span>
              <span className="email"><i className="icon-mail"></i> +91 82861 81119</span>
              <br></br>
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <p><small>
              Hi, my name is Pravin <br/>and I'm a senior software engineer.<br/>Welcome to my personal website!
              </small></p>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/ThePravinDeshmukh/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a> 
                <a href="https://twitter.com/prawin_D" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a> 
                <a href="https://www.instagram.com/thepravindeshmukh/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a> 
                <a href="https://www.linkedin.com/in/thepravindeshmukh/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a> 
                <a href="https://github.com/thepravindeshmukh" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a> 
                <a href="https://www.fiverr.com/pravin_d?up_rollout=true" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> 
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
