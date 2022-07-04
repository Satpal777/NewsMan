import { useState, useEffect } from 'react';
import React from 'react'
import newsContext from '../context/NewsContext';
import Card from './Card';
import { useContext } from 'react';
import Spinner from './Spinner';
var a=0


export default function Container(props) {
  const [unfiltered, setUnfiltered] = useState([]);
  const [load, setload] = useState(false)
  let bgColors = ["#dcedc8", "#ffecec", "#b2eaf2"];


  const contextData = useContext(newsContext);
  


  const update = async () => {
    setload(true);
    var url = 'https://newsapi.org/v2/top-headlines?country=' + props.country + '&category=' + props.category + '&apiKey=' + process.env.REACT_APP_API_KEY;
    await fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setUnfiltered(result.articles);
          contextData.setOut(result.articles);
          contextData.holder=result.articles;
          setload(false);
        }
      )
  }



  // function update() {
  //   var xmlhttp = new XMLHttpRequest();
  //   var url="https://newsdata.io/api/1/news?apikey=pub_44529f657e2ba87db683493b51f9dec4bd3e&q=pegasus";
  //   xmlhttp.onreadystatechange = function(){
  //   if(xmlhttp.readyState==4 && xmlhttp.status==200){
  //       var result = JSON.parse(xmlhttp.responseText);
  //       setOutput(result.results);
  //   }
  // }
  // xmlhttp.open("GET",url);
  // xmlhttp.send();
  // }

  useEffect(() => update(),[])
  var id = 0;
  return (

    <div className={`container bg-${props.mode} pt-3 d-flex flex-wrap align-items-center justify-content-center m-auto`}>

      {
        load && <Spinner />
      }

      {
         !contextData.filter.filter&&(unfiltered.map((e, i) => {
          var index = i % 3;
          var info = {
            title: e.title,
            desc: e.description == null ? "No descrption..." : e.description,
            imgurl: e.urlToImage == null ? "images/null" : e.urlToImage,
            id: id++
          };
          return <Card key={i} info={info} bgColors={bgColors[index]} />;
        }))
      }
      {
         contextData.filter.filter&&(contextData.output.map((e, i) => {
          var index = i % 3;
          var info = {
            title: e.title,
            desc: e.description == null ? "No descrption..." : e.description,
            imgurl: e.urlToImage == null ? "images/null" : e.urlToImage,
            id: id++
          };
          return <Card key={i} info={info} bgColors={bgColors[index]} />;
        }))
      }
    </div>
  );
}



