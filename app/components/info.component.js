import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faFacebook} from '@fortawesome/free-brands-svg-icons';
import './info.less';
import NavbarComponent from './navbar.component';

const InfoComponent = (props) => {

  return (
    <main className="info__page">
     <NavbarComponent backgroundColor={true} navbarRelative={true}/>
     <section className="info__page-sections">
       <div className="info__page-contact column">
         <h4>Contact</h4>
         <p>
           <a href="tel:+40725640513"><FontAwesomeIcon icon={faPhone}/> +40725640513</a>
           <a href="mailto:raul.cirt1993@gmail.com"><FontAwesomeIcon icon={faEnvelope}/> raul.cirt1993@gmail.com</a>
         </p>
         <p>
           <a href="https://www.linkedin.com/in/raul-cirt-b72481172/"><FontAwesomeIcon icon={faLinkedin}/> Raul Cirt</a>
           <a href="https://www.facebook.com/profile.php?id=100010341764382"><FontAwesomeIcon icon={faFacebook}/> Raul Cirt</a>
         </p>
       </div>
       <div className="info__page-about column">
         <h4>About</h4>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo metus et leo maximus porttitor. Donec fermentum finibus ipsum sed elementum. Maecenas a iaculis nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare ipsum consequat arcu venenatis commodo. Cras id tellus et lorem porta tempus. Aliquam at nunc odio. Sed ut dignissim enim, ornare suscipit tortor. Phasellus in turpis at tellus porta efficitur. Sed urna libero, ultricies id purus vel, efficitur iaculis nunc. Vestibulum commodo, odio in sodales placerat, odio dolor dapibus turpis, sed accumsan mauris leo tristique orci.</p>
       </div>
       <div className="info__page-experience column">
         <h4>Experience</h4>

       </div>
       <div className="info__page-clients column">
         <h4>Clients</h4>
         <ul>
           <li>Name</li>
           <li>Name</li>
           <li>Name</li>
           <li>Name</li>
           <li>Name</li>
         </ul>
       </div>
     </section>
    </main>
  )
}

export default InfoComponent;
