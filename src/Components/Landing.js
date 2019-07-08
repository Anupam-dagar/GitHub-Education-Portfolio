import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Landing extends Component {
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0">Clarence
            <span className="text-primary">Taylor</span>
          </h1>
          <div className="subheading mb-5">3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·
            <a href="mailto:name@email.com">name@email.com</a>
          </div>
          <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
          <div className="social-icons">
            <a href="/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faGoogle}/>
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;
