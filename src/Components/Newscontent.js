import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Newscard from "./Newscard";

function Newscontent(props) {
  console.log(props.linkData);
  console.log(process.env.REACT_APP_APIKEY);
  const [value, setValue] = useState([]);
  function apicall() {
    fetch(
      // ` https://newsapi.org/v2/top-headlines?country=${props.linkData}&apiKey=${process.env.REACT_APP_APIKEY}`
      // `https://api.github.com/${props.linkData}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setValue(data.articles);
        console.log(data.articles);
      });
  }
  useEffect(apicall, [props.linkData]);

  console.log(value);

  return (
    <div>
      <div className="main-news-con">
        {value.map((currdata) => {
          return <Newscard key={currdata.title} user={currdata}></Newscard>;
        })}
      </div>
    </div>
  );
}

export default Newscontent;
