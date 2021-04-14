import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://previews.123rf.com/images/hironicons/hironicons1912/hironicons191201172/136455877-cv-resume-icon.jpg"
                alt="avatar"
                className="avatar-img"
                style={{ maxHeight: "3rem" }}
              />
            </div>

            <h2 style={{ paddingTop: '2em' }}>Yazid Rahmouni</h2>
            <h4 style={{ color: 'grey' }}>Full-Stack Engineer And Financial Consultant</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p> An International and Multi-Cultural IT and Business Consultant with technical and management skills in different fields ....... As well as multi-cultural skills, having worked in different countries like Tunisia ,The United States of America , India, Qatar. Additionally, through the variety of team projects in university, I am team-oriented with excellent communication ,organization skills and implementing efficient management solutions </p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p>West Bay Doha Qatar</p>
            <h5>Phone</h5>
            <p>(+974) 66203922</p>
            <h5>Email</h5>
            <p>yezidrahmouni@gmail.com</p>
            <h5>Web</h5>
            <p>https://yazid-rahmouni-portfolio.herokuapp.com/</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2003}
              endYear={2007}
              schoolName=" Manar University Tunis "
              schoolDescription=" Bachelor's Degree in computer science applied to managment"
            />

            <Education
              startYear={2012}
              endYear={2016}
              schoolName="HBKU Qatar"
              schoolDescription="Master of Science in Finance"
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Experience</h2>

            <Experience
              startYear={2017}
              endYear={2021}
              jobName="Full Stack Engineer And Financial  lecturer @Institute of Public Administration"
              jobDescription="Giving trainings and lectures in various fields such as : IT , public Finance,Statistics,Project Management.."



              jobDescription2="designed and developed different Web  applications  using React ,Nodejs,MongoDB Javascript,ECS6…"
            />

            <Experience
              startYear={2013}
              endYear={2017}
              jobName="IT CONSULTANT — MINISTRY OF ADMINISTRATIVE DEVELOPMENT -QATAR"
              jobDescription="designed IOS application  "
              jobDescription2="Management team lead"
            />
            <Experience
              startYear={2010}
              endYear={2013}
              jobName="IT CONSULTANT — MINISTRY OF LABOUR -QATAR"
              jobDescription="INVOLVED IN DESIGN OF WEB APPLICATION , DELIVERED IT TRAININGS  "

              jobDescription2="ADMINISTRATIVE MANAGEMENT"
            />
            <Experience
              startYear={2009}
              endYear={2010}
              jobName="QA ENGINEER -USA"
              jobDescription="Design, implement, execute and debug information technology test cases and scripts • Diagnose, find bugs, defects, and regressions. Verify fixes. "

              jobDescription2="Collaborate at ease with developers, customer support, product managers and operations "
            />
            <Experience
              startYear={2008}
              endYear={2009}
              jobName="Internship -India"
              jobDescription="Internship as a QA ENGINEER  "

              jobDescription2="Besides to some Management tasks "
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Skills</h2>
            <Skills
              skill="javascript"
              progress={100}
            />
            <Skills
              skill="HTML/CSS"
              progress={100}
            />
            <Skills
              skill="NodeJS"
              progress={100}
            />
            <Skills
              skill="React"
              progress={100}
            />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
