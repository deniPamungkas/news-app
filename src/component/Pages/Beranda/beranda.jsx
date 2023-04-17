import React, { useEffect, useState, Component } from "react";
import './beranda.scss'
import { Card, Carousel, Footer, Headline } from "../../allComps";

const Beranda = () => {
  const [trending, setTrending] = useState([]);
  const [head, ...trend] = trending;

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "d2af35cb5bmsha8f52819f3ca6cdp118da6jsn79888714f6ff",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    };
    const fetchNewsByTrend = async () => {
      const news = await fetch(
        `https://bing-news-search1.p.rapidapi.com/news/trendingtopics?mkt=en-GB&textFormat=Raw&safeSearch=Off&count=10`,
        options
      );
      return news.json().then((res) => {setTrending(res.value)});
    };
    fetchNewsByTrend();
  }, []);

  return (
    <section className="beranda">
      <div className="headline">
        <div className="jumboCard" onClick={()=>{window.open(head.newsSearchUrl)}}>
          <img src={head?.image.url} alt="thumbheadline" />
          <div className="meta">
            <span id="tgl"><p>{head?.image.provider[0].name} - {new Date().toDateString()}</p></span>
            <span id="title"><h1>{head?.name}</h1></span>
          </div>
        </div>
        <div className="topHeadline">
          <h1 id="Headline-mark">Top Headlines</h1>
          <Headline data={trend}/>
        </div>
      </div>
    </section>
  );
};

export default Beranda;
