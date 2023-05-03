import React from 'react';
import './Article.css'
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";

const Article = () => {   
    const Article = useParams();
  //  console.log(Prodact.id);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = `/Articles/${Article.id}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }, [Article.id]);
  useEffect(() => {
    if (data.length !== 0) {
      setIsLoading(false);
    }
  }, [data]);
    return (
        <div className='article-componant'>
            {isLoading ? (
      <h1>
        loading ...
      </h1>
    ) : (
            <div className='container'>
              <div className='M-div'>
              <h1 className='M-title'>{data.title}</h1>
              <img className='M-img' src={data.img} width="300px"alt=""/>
              </div>  
            {data.paragraph.map((para)=>(
                        <div className='paragr-one'>
                           <div>
                               <h4 className='P-title'>{para.title}</h4>
                               <p className='P-info'>{para.summary}</p>
                           </div>
                       </div>
            ))}
            </div>
    )}
        </div>
    );
}

export default Article;