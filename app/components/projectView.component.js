import React from 'react';
import Navbar from './navbar.component';
import {Link} from 'react-router-dom';
import hexToRgba from 'hex-to-rgba';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLongArrowAltRight, faLongArrowAltLeft} from '@fortawesome/free-solid-svg-icons';

import './projectView.less';


const ProjectViewComponent = (props) => {
  return (
    <main className="project__view">
      <Navbar {...props} backgroundColor={true} navbarRelative={true}/>
      <section className="project__view-images">
        <header className="project__view-header" style={{backgroundImage: `url(${props.project.imageUrl})`}}>
        </header>
        <section className="project__view-meta">
          <h1 className="project_view__meta--name">{props.project.name}</h1>
          <span className="project_view__meta--tag">{props.project.tag}</span>
          <p className="project_view__meta--description">{props.project.description}</p>
        </section>
        {
          props.project.uploads.map((imgPath, key) => {

            return (
              <section key={key} className="project__view-image" >
                <img src={imgPath}/>
              </section>
            )
          })
        }
        <section className="social">
          <div className="social-links">
            <span>Share on </span>
            <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}>facebook</a>
            <a target="_blank" href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`}>Linkedin</a>
          </div>
        </section>
        <section className="nav-next--prev">
          {
            props.previous !== null ?
            <Link className={`nav-link previous-link ${!props.next ? 'single-link' :'' }`} to={`/projects/${props.previous.uid}`} style={{backgroundColor: hexToRgba(props.previous.color, 0.5)}}>
            <div className="icon">
              <FontAwesomeIcon icon={faLongArrowAltLeft}/>
            </div>
             <span className="link__project-action">View previous project</span>
             <h2 className="link__project-name">{props.previous.name}</h2>
            </Link>
            : null
          }
          {
            props.next !== null ?
            <Link className={`nav-link next-link ${!props.previous ? 'single-link' : ''}`} to={`/projects/${props.next.uid}`} style={{backgroundColor: hexToRgba(props.next.color, 0.5)}}>
            <div className="icon">
              <FontAwesomeIcon icon={faLongArrowAltRight}/>
            </div>
            <span className="link__project-action">View next project</span>
              <h2 className="link__project-name">{props.next.name}</h2>
            </Link>
            : null
          }
        </section>
      </section>
    </main>
  )
}

export default ProjectViewComponent;
