import React from 'react';
// import '../../App.css';
import './contactUs.css'
import instagram from './assets/icon/instagram-icon-white-png-4.png';
import github from './assets/icon/github.png';
import linkedin from './assets/icon/linkedln.png';
import twitter from './assets/icon/twitter.png';

export default function ContactUs() {
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="center">
            <h1 className="head-footer">YOU CAN FIND ME ON</h1>
          </div>
        </div>
        <div className="center">
          <div className="row" id="row">
            <div className="col-md-3">
              <a className="experience-url" href="https://www.instagram.com/muhyhya/" target="_blank"><img src={instagram}  className="instagram"/></a>
            </div>
            <div className="col-md-3">
            <a className="experience-url" href="https://www.github.com/muchtaromyahya" target="_blank"><img src={github}  className="instagram"/></a>
            </div>
            <div className="col-md-3">
            <a className="experience-url" href="https://www.twitter.com/muhyhya/" target="_blank"><img src={twitter}  className="instagram"/></a>
            </div>
            <div className="col-md-3">
            <a className="experience-url" href="https://www.linkedin.com/in/muchtarom-yahya-0a7663185/" target="_blank"><img src={linkedin}  className="instagram"/></a>
            </div>
          </div>
        </div>
        <div className="container-fluid">
        <div className="row" id="row1">
            <div className="col-md-4">
            <a className="experience-url" href="https://api.whatsapp.com/send/?phone=628982788440&text&app_absent=0" target="_blank">
              <h1 className="text">+62 8982788440</h1>
            </a>
            </div>
            <div className="col-md-4">
              <a className="experience-url" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=muchtaromyahya.office@gmail.com&tf=1%22" target="_blank">
                <h1 className="text">Muchtaromyahya.office@gmail.com</h1>
              </a>
            </div>
            <div className="col-md-4">
              <h1 className="text">Copyright 2020 Muchtarom Yahya</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
