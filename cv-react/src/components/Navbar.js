import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {MenuItems} from "./MenuItems"

class Navbar extends Component {
  state = {clicked : false}
  handClick = () => {
    this.setState({clicked: !this.state.clicked})
  }
  render(){
    return(
      <nav className="navbarItems">
        <div className="menu-icon" onClick={this.handClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <Link  to={`/${item.url}`} key={index}>
                <a  className={item.cName} >
                  {item.title}
                </a>
              </Link>
            )
          })}
        </ul>
      </nav>
    )
  }
}
  
  

export default Navbar
