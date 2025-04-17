import React, { useEffect, useState } from 'react'
import Newsitem from './newsitem';

const Newsboard = (props) => {


    const [articles, setarticles] =useState([]);

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=a6711c51d1974597b1143b79dffc7dbe`;
       // const url2 = 'https://newsdata.io/api/1/news?apikey=pub_8124234bcf7efc325185b01af3be7a84bf0db&q=bangladsesh%20news&country=bd&language=bn&category=business,entertainment,health,science,technology '
        fetch(url)
          .then(response => response.json())
          .then(data => {
            if (Array.isArray(data.articles)) {
              setarticles(data.articles);
            } else {
              console.error('Invalid response:', data);
              setarticles([]); // fallback to empty array
            }
          })
          .catch(err => {
            console.error('Error fetching news:', err);
            setarticles([]); // fallback in case of fetch error
          });
      }, [props.category]);
  return (
    <div>
    <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
    <div style={{paddingLeft:"150px", paddingRight:"150px"}}>
    {articles.map((news, index) => (
      <Newsitem key={index} title={news.title} desc={news.description} src={news.urlToImage} url={news.url}/>
    ))}
    </div>
  </div>
  )

}

export default Newsboard