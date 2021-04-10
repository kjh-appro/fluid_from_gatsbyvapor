import React, { Component } from "react";
import { Link } from "gatsby";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

class Layout extends Component {
  
  render() {
    const { title, children} = this.props
    const toggler = (
      <div className="toggler">
        <ThemeToggler>{({ theme, toggleTheme }) => (
          <label className="tog">
            <input
              type="checkbox"
              onChange={e =>
                toggleTheme(e.target.checked ? "dark" : "light")
              }
              checked={theme === "dark"}
              className="tog-checkbox"
            />
          </label>
        )}</ThemeToggler>
      </div>
    )

    return (
      <div className="site-container_front">
      <div className="header-menu-bar">
        <div className="nav-container">
            <ul className="header-nav">
              <li id="header-nav-first"><Link
            to={`/`}>home</Link></li>
              <li><Link to={`/tags`}>tag</Link></li>
              <li><a href="http://femilog.link/log/">
              log</a></li>
            </ul>
            <ul className="header-link">
              <li className="header-nav-cross">
            <Link  to={`/`}><img
    src={ require('../components/cross.png') }
    width='25px'
    height='25px'/></Link></li>
    <li className="header-nav-femilog">© fluid</li>
              <li><a href="https://twitter.com/fluid_from" target="_blank" rel="noopener noreferrer">
              <img
    src={ require('../components/sns_t.png') }
    width='20px'
    height='20px'/></a></li>
              <li><a href="https://www.youtube.com/channel/UCsZq-1r-ksmHXaf47LZwytw/videos" target="_blank" rel="noopener noreferrer">
              <img
    src={ require('../components/sns_y.png') }
    width='20px'
    height='20px'/></a></li>
    <li><a href="http://www.podbbang.com/ch/1780218" target="_blank" rel="noopener noreferrer">
              <img
    src={ require('../components/sns_p.png') }
    width='20px'
    height='20px'/></a></li>
            </ul>
          </div>
      </div>
      <div className="header-container">
        <Link
            className="header-title"
            to={`/`}
          >
              <img
    src={ require('../components/header-logo_3.png') }
    width='219px'
    height='229px'/>
       </Link>
       </div>

       <div className="menu-category">
       <li><a href="http://femilog.link/tags/research">Research</a></li> 
       <li><a href="http://femilog.link/tags/review">Review</a></li> 
       <li><a href="http://femilog.link/tags/translation">Translation</a></li> 
       <li><a href="http://femilog.link/tags/wiki">Wiki</a></li> 
       <li><a href="http://femilog.link/tags/writing">Writing</a></li> 
       <li><a href="http://femilog.link/tags/project">Project</a></li> 
       </div>

<div ID="aside-bar-0">
<li><a href="http://femilog.dothome.co.kr" >구)페미로그 old version is here!</a>
  </li>
</div>
<div ID="aside-bar-hidden">
  
  <li><a href="http://femilog.dothome.co.kr">;;;;</a>/
  <a href="http://femilog.dothome.co.kr">;;;;</a>/
  <a href="http://femilog.dothome.co.kr">;;;;</a>/
  <a href="http://femilog.dothome.co.kr">;;;;</a>/
  <a href="http://femilog.dothome.co.kr">;;;;</a>/
  <a href="http://femilog.dothome.co.kr">;;;;</a>/
  <a href="http://femilog.dothome.co.kr">;;;;</a>/
  </li>
</div>
       <div ID="aside-bar">
       <li><a href="http://femilog.link/log_2008-2014/">2008-2014</a>/
</li>
<li><a href="http://femilog.link/log_2015-2017/">2015-2017</a>/
</li>
<li>
<a href="http://femilog.link/log_2017-2020/">2017-2020</a>/
</li>
<li><a href="http://femilog.link/log_2021-/">2021-</a>
</li>
</div>

          <div ID="top-btn" onClick="window.scrollTo(0,0);">
        <a href="#"><img
    src={ require('../components/top_btn_4.png') }
    width='47px'
    height='47px'/></a>
        </div>
      <main>{children}</main>

        <footer className="footer-copyright">
          © {new Date().getFullYear()} {title}, Built with
          {` `}
          <a className="footer-gatsby" href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      
      
      </div>
    )
  }
}


export default Layout
