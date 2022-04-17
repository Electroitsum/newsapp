import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Newscard from "./Newscard";

function Newscontent(props) {
  // console.log(currPath)
  console.log(props.location);
  console.log(process.env.REACT_APP_APIKEY);
  const [value, setValue] = useState([]);
  var searchedNews = props.linkData.newsSearch;
  searchedNews = searchedNews.replace(/\s+/g, ' AND ');
  console.log(searchedNews)

  function apicall1() {
    fetch(
      ` https://newsapi.org/v2/top-headlines?country=${props.linkData.country}&apiKey=${process.env.REACT_APP_APIKEY}`
      // `https://api.github.com/${props.linkData}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setValue(data.articles);
      })
      .catch((error) => {
        console.log("server connection error");
      });
  }

  function apicall2() {
    fetch(
      ` https://newsapi.org/v2/everything?q=${searchedNews || 'news'}&language=en&apiKey=${process.env.REACT_APP_APIKEY}`
      // `https://api.github.com/${props.linkData}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setValue(data.articles);
      })
      .catch((error) => {
        console.log("server connection error");
      });
  }
  useEffect(() => {
    window.location.pathname === "/search" ? apicall2() : apicall1();
  }, [props.linkData]);

  console.log(value);
  console.log(props.location);

  return (
    <div>
      <div className="main-news-con">
        {value.map((currdata) => {
          return <Newscard key={currdata.title} user={currdata}></Newscard>;
        })
      }
      </div>
    </div>
  );
}

export default Newscontent;
