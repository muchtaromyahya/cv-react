import React from 'react';
// import '../../App.css';
import './home.css'
import image from './assets/IMG_20201009_204855.jpg';



export default function Home() {
  return (
    <>
      <div className="profile">
        <div className="container">
          <div className="title">
            <h1>Profile</h1>
          </div>
          <div className="row">
           <div className="col-md-5">
              <div >
                <img src={image}  className="photo"/>
              </div>
            </div>
            <div className="col-md-7 ">
              <div class="card">
                <div class="card-body">
                  <h1 className="name"><b>Muchtarom Yahya</b></h1>
                  <h3 className="position">Front End Developer</h3>
                  <h1 className="description">Innovative Front End Developer with 2 years experience building and maintaining responsive website in commercial industry. Proficient in HTML, CSS, Javascript, plus modern libraries and framework (Angular, Vue, react). Passionate about usability and process working knowladge UI/UX</h1>
                  <h1 className="quote">" The key to pursuing excellence is to embrace an organic, long-term learning process, and not to live in a shell of static, safe mediocrity. Usually, growth comes at the expense of previous comfort or safety "</h1>
                  <div className="center"><button class="btn follow-me" > Follow Me</button></div>
                </div>
              </div></div>
          </div>
        </div>
      </div>      
    </>
  );
  
}
