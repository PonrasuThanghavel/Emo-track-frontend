import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './css/footer.css';


const Footer = () => {

  const applyBounceAnimation = (e) => {
    e.target.classList.add('bounce');
  };

  const removeBounceAnimation = (e) => {
    e.target.classList.remove('bounce');
  };

  return (
    <footer>
      {/* Social Media Icons and Links */}
      <div className="social-media-icons">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className='facebook'
          onMouseEnter={applyBounceAnimation}
          onMouseLeave={removeBounceAnimation}
        >
        <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className='twitter'
          onMouseEnter={applyBounceAnimation}
          onMouseLeave={removeBounceAnimation}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className='linkedin'
          onMouseEnter={applyBounceAnimation}
          onMouseLeave={removeBounceAnimation}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className='instagram'
          onMouseEnter={applyBounceAnimation}
          onMouseLeave={removeBounceAnimation}
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
          className='github'
          onMouseEnter={applyBounceAnimation}
          onMouseLeave={removeBounceAnimation}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="mailto:your.email@example.com"
          target="_blank"
          rel="noopener noreferrer"
          className='mail'
          onMouseEnter={applyBounceAnimation}
          onMouseLeave={removeBounceAnimation}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
