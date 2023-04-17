import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./cari.scss";
import { Card } from "../../allComps";

const Cari = () => {
  const [searchNews, setSearchNews] = useState([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const { search } = useParams();


  const handleLoadMore = (e) =>{
    e.preventDefault();
    setPage((cur)=>cur+1)
  }
  const indexOfLastItem = page * itemsPerPage;
  const currentItems = searchNews.slice(0,indexOfLastItem);
  try {
    useEffect(() => {
      const options = {
        method: "GET",
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key":
            "d2af35cb5bmsha8f52819f3ca6cdp118da6jsn79888714f6ff",
          "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        },
      };
      const fetchNewsBySearch = async () => {
        setPage(1)
        const news = await fetch(
          `https://bing-news-search1.p.rapidapi.com/news/search?q=${search}&count=100&mkt=en-GB&freshness=Day&originalImg=true&textFormat=Raw&offset=0&safeSearch=Off`,
          options
        );
        return news.json().then((res) => {
          if (res.value.length !== 0) {
            return setSearchNews(res.value);
          } else {
            return setSearchNews({ error: `Sorry can't find your keyword` });
          }
        });
      };
      fetchNewsBySearch();
    }, [search]);
    return (
      <section className="cari">
        {currentItems.map((res, index) => {
          return (
            <Card
              key={index}
              className={"horizontal sm "}
              data={res}
              isSearch={true}
            />
          );
        })}
        <button disabled={searchNews.length>currentItems.length ? false:true} onClick={handleLoadMore}>Load More</button>
      </section>
    );
  } catch (error) {
    return (
      <section className="cariErr">
        <h1>{searchNews.error}</h1>
      </section>
    );
  }
};

export default Cari;
