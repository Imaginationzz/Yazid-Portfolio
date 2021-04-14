import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://previews.123rf.com/images/hironicons/hironicons1912/hironicons191201172/136455877-cv-resume-icon.jpg"
              alt="avatar"
              className="avatar-img"
              style={{ height: "50px" }}
            />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />

              <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

              <div className="social-links">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/yezidrahmouni/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="https://github.com/Imaginationzz" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>



              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
