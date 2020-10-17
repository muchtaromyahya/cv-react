import React from 'react';
// import '../../App.css';
import './Education.css'
import education from './assets/education.png';

export default function Education() {
  return (
    <>
      <div className="education"> 
        <div className="container">
        <div className="title">
              <h1 className="section">Education</h1>
            </div>
          <div className="row">
            <div className="col-sm-6">
              <h1 className="education-content">
                Bachelor of Informatic Engineering Telkom University 2021. Focus on Website Developer, Responsive Design, and RESTfull API
              </h1>
              <h1 className="education-content">
                Member of Research Group and Laboratory Assistant at RPLGDC Laboratory Telkom Universty 2019-2021
              </h1>
            </div>
            <div className="col-sm-6">
                <div className="center">
                  <img src={education}  className="icon-education"/>
                </div>
            </div>
          
        </div>
        </div>
      </div>
    </>
  )
}
