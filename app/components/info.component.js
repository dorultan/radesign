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
         <p>Hi, my name is Raul Cirt and i am a graphic designer, illustrator and social media marketer. I
live in Romania (yes… Dracula) and no…. We are not gypsies :)))). I am proficient in brand
identity which includes everything from logo design, business card design, stationary printing
design, tshirt design, flyers, billboards, social media banners, website layouts and the list goes
on. I also do illustrations that can be used on different mediums eg. Book covers, posters,
album covers and so on. I like drawing, swimming, playing the guitar(not good at it but i like it)
and most of all, i love what i do for a living,i can easily say my work is based on pure passion for
problem solving and beautiful visuals custom made to elevate startups and medium size
companies to the next level by making their brand stand out from the competition and look good
at the same time!</p>
       </div>
       <div className="info__page-experience column">
         <h4>Experience</h4>
         <p>Experience - 1 year at an online coffe shop as a graphic designer and social media
marketer, 2 and a half years at a local prin shop as the main graphic designer where i
created and prepared different materials for print on different mediums, 6 months at a
national creative agency as the main graphic designer, 4 months and still counting at
multiple companies as the main graphic designer social media and email marketing
specialist</p>
       </div>
       <div className="info__page-clients column">
         <h4>Skills</h4>
         <ul>
           <li>Adobe illustrator.</li>
           <li>Corel draw.</li>
           <li>Adobe photoshop.</li>
           <li>Adobe afterefects.</li>
         </ul>
       </div>
     </section>
    </main>
  )
}

export default InfoComponent;
