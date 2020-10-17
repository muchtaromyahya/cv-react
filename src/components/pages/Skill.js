import React from 'react';
import './skill.css'
import {skillProgramming} from '../MenuItems'
import {otherSkills} from '../MenuItems'
export default function Skill() {
  return (
    <>
      <div className="skill">
        <div className="container">
          <div className="title">
            <h1>Skill</h1>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <h1 className="education-content">
                Language Programming
              </h1>
              <div className="list"> 
                <div>
                  {skillProgramming.map((item, index) => {
                    return (
                      <div key={index}>
                        <h1 className={item.cName}>{item.Title}</h1>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <h1 className="education-content">
                Other Skill
              </h1>
              <div className="list"> 
                <div>
                  {otherSkills.map((item, index) => {
                    return (
                      <div key={index}>
                        <h1 className={item.cName}>{item.Title}</h1>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          
        </div>
        </div>
      </div>
    </>
  );
}
