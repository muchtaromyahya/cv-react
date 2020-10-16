import React from 'react';
// import '../../App.css';
import './product.css'
import {experience} from '../MenuItems'

export default function Products() {
  return(
    <>
      <div className="product">
        <div className="container">
          <div className="title">
            <h1>Experience</h1>
          </div>
          <div>
            {experience.map((item, index) => {
              return (
                <div class="card" id="card" key={index}>
                  <div class="card-body">
                    <h1 className="experience-title">{item.Title}</h1>
                    {/* <h1 className="experience-url">{item.url}</h1> */}
                    <a className="experience-url" href={item.link} target="_blank">{item.url}</a>
                    <h1 className="experience-description">{item.description}</h1>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
