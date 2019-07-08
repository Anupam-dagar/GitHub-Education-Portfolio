import React, { Component } from 'react';

class Skills extends Component {
  constructor(props) {
    super(props);

    this.skills = props.skills;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul className="list-inline dev-icons">
          {
            this.skills.map((data, index) => (
              <li key={index} className="list-item">
                {data.name}
              </li>
            ))
          }
          </ul>
        </div>
      </section>
    );
  }
}

export default Skills;
