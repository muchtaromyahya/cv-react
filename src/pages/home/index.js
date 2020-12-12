import React, { useEffect } from 'react';
import './style.css';

const Home = () => {
  useEffect(() => {
    document.title = ' Home';
  });
  return (
    <div className="text-center pageHome-wrapper">
      {/* <div className="title">Telkom Digital Talent Incubator</div><br></br> */}
      {/* <div className="name"> Muchtarom Yahya</div> */}
    </div>
  );
};

export default Home;
