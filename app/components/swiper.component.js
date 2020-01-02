import React, {Component} from 'react';
import Swiper from 'swiper';
import {Link} from 'react-router-dom';
import './swipper.component.less';

class SwiperComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      horizontal_container: React.createRef(),
      vertical_container: React.createRef()
    }
  }

  componentDidMount() {
    const horizontalSwiper = new Swiper(this.state.horizontal_container.current, {
      direction: 'horizontal',
      mousewheel: true,
      loop: false,
      draggable: true,
      touch: true,
      noSwiping: false
    })

    const verticalSwiper = new Swiper(this.state.vertical_container.current, {
      direction: 'vertical',
      mousewheel: true,
      loop: false,
      draggable: true,
      touch: true,
      noSwiping: false
    })
  }

  render() {
    return (
      <section className="projects__section-swipers">
       <div className="swiper-container horizontal-container" ref={this.state.horizontal_container}>
        <div className="swipper-wrapper">
          {
            this.props.projects.map((project, key) => {
              <div key={key} className="swiper-slide">
                <h1>{project.name}</h1>
                <Link to={`/projects/${project._id}`}>View project</Link>
              </div>
            })
          }
        </div>
       </div>
       <div className="swiper-container vertical-container" ref={this.state.vertical_container}>
         <div className="swiper-wrapper">
           {
             this.props.projects.map((project, key) => {

               return (
                 <div key={key} className="image-slide swiper-slide">
                  <img src={window.origin + '/' + project.imageUrl} alt="project image"/>
                 </div>
               )
             })
           }
         </div>
       </div>
      </section>
    )
  }
}

export default SwiperComponent;
