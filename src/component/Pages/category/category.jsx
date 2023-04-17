import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import './category.scss'
import { Card } from '../../allComps'

const Category = () => { 
    const [cat, setCat] = useState([])
    let {category} = useParams()

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-BingApis-SDK': 'true',
                'X-RapidAPI-Key': 'd2af35cb5bmsha8f52819f3ca6cdp118da6jsn79888714f6ff',
                'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
            }
        };
        const fetchNewsByCategory = async () => {
            const news = await fetch(
              `https://bing-news-search1.p.rapidapi.com/news?count=20&originalImg=true&category=${category}&mkt=en-GB&setLang=EN&safeSearch=Off&textFormat=Raw`,
              options
            );
            return news.json().then((res) => {setCat(res.value)});
          };
          fetchNewsByCategory();
    },[category])

  return (
    <section className='category'>
      <span id='catName'><h1>{category === 'ScienceAndTechnology'? 'TECH':category.toUpperCase()}</h1></span>
        {
          cat.map((res,index)=>{
            return(
              <Card key={index} className={'horizontal sm '} data={res} isCategory={true}/>
            )
          })
        }
    </section>
  )
}

export default Category