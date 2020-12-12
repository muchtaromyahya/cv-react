import React, { useEffect, useState } from 'react';
import app from '../../services/firebase';
import './style.css'
import 'firebase/database';

var activity = Object;

const CoronaNews = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const db = app.database().ref('news');
    db.on('value', (snapshot) => {
      const firebaseNews = snapshot.val();
      setNews(firebaseNews.data);
      setIsLoading(false);
    });
  }, []);
  console.log(news);
  // DisplayData(data)
  return (
    <div className="product">
      <div className="container2">
        <h1 className="title"> Berita Corona</h1>
        {isLoading ? <p>loading</p> :
         <p>berita corona : </p>  
        }
        {news.map((data, index) => {
          activity = data.activity
          return (
            <>
            <div className="card" id="card" key={index}>
              <h1 className="experience-title">{data.date}</h1>
              {/* <h1 className="experience-title">{data.activity[0]}</h1> */}
              {activity.map((dataChild, indexChild) => {
                return (
                  <>
                    <div  key={indexChild}>
                      <h3 className="experience-description" > {dataChild.title}</h3>
                      <a className="experience-url" href={dataChild.url} target="_blank">{dataChild.url}</a>
                    </div>
                  </>
                )
              })}
            </div>
            </>
          )
        })}
      </div>
    </div>
  );
};


export default CoronaNews;