import React, { useState, useEffect } from 'react';
import Card from './Card';
import Spinner from './Spinner';

export default function Container(props) {

  const [output, setOutput] = useState([]);
  const [load, setload] = useState(false)
  let bgColors = ["#dcedc8","#ffecec","#b2eaf2"];
  const update = async () => {
      setload(true);
    var url = 'https://newsapi.org/v2/top-headlines?country='+props.country+'&category='+props.category+'&apiKey='+process.env.REACT_APP_API_KEY;
    await fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setOutput(result.articles);
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

  useEffect(() => {
    update();
  }
    , [])

  return (
    <>
      <div className={`container bg-${props.mode} pt-3 d-flex flex-wrap align-items-center justify-content-center m-auto`}>
    {
      load && <Spinner />
    }
        { 
          
          output.map((e, i) => {
            var index= i%3;
            var info = {
              title: e.title,
              desc: e.description == null ? "No descrption..." : e.description,
              imgurl: e.urlToImage == null ? "images/null" : e.urlToImage,
              link: e.link
            };
            return <Card key={i} info={info} bgColors={bgColors[index]} />;
          })
        }
      </div>
    </>
  );
}


