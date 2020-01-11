import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Swiper from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLongArrowAltRight, faTimes} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import hexToRgba from 'hex-to-rgba';
import Navbar from './navbar.component';
import logo from '../images/header.svg';
import './home.less';
console.log('something')
class HomeComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      horizontal_container: React.createRef(),
      vertical_container: React.createRef(),
      tracker_container: React.createRef(),
      swiper_pager: React.createRef(),
      horizontalSwiper: {},
      indexMenu: false,
      sidebars: false
    }
    this.slideToProjects = this.slideToProjects.bind(this);
    this.toggleSideMenus = this.toggleSideMenus.bind(this);
    this.openIndexMenu = this.openIndexMenu.bind(this);
    this.closeIndexMenu = this.closeIndexMenu.bind(this);
    this.onPageHover = this.onPageHover.bind(this);
  }
  openIndexMenu() {
    this.setState({
      indexMenu: true
    })
  }
  slideToProjects() {
    this.verticalSwiper.slideTo(1);
  }
  closeIndexMenu() {
    this.setState({
      indexMenu: false
    })
  }

  onPageHover(idx) {
    this.verticalSwiper.slideTo(idx + 1);
  }

  toggleSideMenus() {
    if(this.horizontalSwiper.activeIndex > 0) {
      this.setState({
        sidebars: true
      })
    }
    else {
      this.setState({
        sidebars: false
      })
    }
  }

  componentDidMount() {
    const config = {
      mousewheel: true,
      simulateTouch: true,
      speed: 300,
      touch: true,
      slidesPerView: 1,
      delay: 0,
      keyboard: true

    }

    config.direction = "horizontal";
    this.horizontalSwiper = new Swiper(this.state.horizontal_container.current, config);
    config.centeredSlides = true;
    this.trackerSwiper = new Swiper(this.state.tracker_container.current, {
      speed: 300,
      initialSlide: 0,
      onlyExternal: true,
      centeredSlides: true,
      slidesPerView: 1,
      direction: 'horizontal'
    });
    config.direction = "vertical";
    this.verticalSwiper = new Swiper(this.state.vertical_container.current, config)

    this.verticalSwiper.controller.control = this.horizontalSwiper;
    this.horizontalSwiper.controller.control = this.trackerSwiper;
    // this.verticalSwiper.controller.control = this.verticalSwiper
    // this.verticalSwiper.controller.control = this.trackerSwiper;
    config.centeredSlides = true;

    this.horizontalSwiper.on('slideChange', (idx) => {
      this.toggleSideMenus();
    })
    // Init

    // window.addEventListener('mousewheel', (e) => {
    //   console.log(e)
    // })
    this.trackerSwiper.on('slideChange', (idx) => {
      this.toggleSideMenus(idx)
    })

    if(this.props.match.path === '/projects') {
      this.verticalSwiper.slideTo(1);
    }
  }

  render() {

    return (
      <main autoscroll="true"  className="home">
        <Navbar {...this.props} slideToProjects={this.slideToProjects} backgroundColor={this.state.sidebars}/>
        <div className="home-sliders">
          <aside className={`slides-tracker ${this.state.sidebars ? "slides-tracker-show" : ''}`} >
            <span className="total-slides">{this.props.projects.length}</span>
            <span className="number-separator">/</span>
            <div className={`swiper-container horizontal-tracker-container`} ref={this.state.tracker_container}>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <span className="slide-number">0</span>
                </div>
                {
                  this.props.projects.map((project, key) => {
                    return (
                      <div key={key} className="swiper-slide">
                        <span className="slide-number">{key + 1}</span>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </aside>
         <div className={`home-slides ${this.state.indexMenu && this.state.sidebars ? 'index-menu-open' : ""}`}>
           <div className={`swiper-container vertical-container ${this.state.indexMenu ? 'right' : 'left'}`} ref={this.state.vertical_container}>
            <div className="swiper-wrapper">
              <header className="swiper-slide home-header">
                <div className="home__header__intro-wrapper">
                  <h1 className="intro-heading">
                    I'm Raul<br/>
                  I <span>design</span> and <span>research</span> your business ideas.
                  </h1>
                </div>
                <footer className="home__header__intro-footer">
                  <ul className="footer-list">
                    <li className="footer__list-item">Get in touch</li>
                    <li className="footer__list-item email"><a target="_blank" href="mailto:raul.cirt1993@gmail.com">raulcirt@gmail.com</a></li>
                    <li className="footer__list-item phone"><a target="_blank" href="tel:+40725640513">+40725640513</a></li>
                    <li className="footer__list-item"><a target="_blank" href="https://www.facebook.com/profile.php?id=100010341764382"><FontAwesomeIcon icon={faFacebook}/></a></li>
                    <li className="footer__list-item"><a target="_blank" href="https://www.linkedin.com/in/raul-cirt-b72481172/"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                  </ul>
                </footer>
              </header>
              {
                this.props.projects.map((project, key) => {

                  return (
                    <div key={key} className="content-silde swiper-slide">
                      <div className="content-wrapper" style={{background: project.color}}>
                        <span className="tag">{project.tag}</span>
                        <h1 className="project-name">{project.name}</h1>
                        <Link to={`/projects/${project.uid}`}>
                          <div className="icon">
                            <FontAwesomeIcon icon={faLongArrowAltRight}/>
                          </div>
                            <span className="link-text">View project</span>
                        </Link>
                      </div>
                      <Link className="image-wrapper" style={{background: hexToRgba(project.color, 0.5)}} to={`/projects/${project.uid}`}></Link>
                    </div>
                  )
                })
              }
            </div>
           </div>
           <div className={`swiper-container horizontal-container ${this.state.indexMenu ? 'left' : 'right'}`} ref={this.state.horizontal_container}>
             <div className="swiper-wrapper">
               <div className="image-slide swiper-slide empty-slide">
               </div>
               {
                 this.props.projects.map((project, key) => {

                   return (
                     <div key={key} className="image-slide swiper-slide">
                      <img src={project.imageUrl} alt="project image"/>
                     </div>
                   )
                 })
               }
             </div>
           </div>
         </div>
         <aside className={`slides-pager ${this.state.indexMenu ? 'pager-menu-view' : ''}`}>
           <a href="#" className={`button-view-index ${this.state.sidebars || this.state.indexMenu ? 'button-index-show' : ''} ${this.state.indexMenu ? 'button-view-index-open' : ''}`} onClick={this.openIndexMenu}><span className="text">index</span></a>
           <div className="slides__pager-wrapper">
             <div className="slides__pager-close">
               <a href="#" className="slides__pager__close-button" onClick={this.closeIndexMenu}>
                 <FontAwesomeIcon icon={faTimes}/>
               </a>
             </div>
             <ul className={`pager`}>
              {
                this.props.projects.map((project, key) => {
                  return (
                    <li key={key}><Link to={`/projects/${project.uid}`} onMouseEnter={() => {this.onPageHover(key)}}>{project.name}</Link><span>{project.tag}</span></li>
                  )
                })
              }
             </ul>
           </div>
         </aside>
        </div>
     </main>
    )
  }
}

export default HomeComponent;
