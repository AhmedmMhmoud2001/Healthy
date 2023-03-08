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
              <img className='M-img' src={"https://www.konsilmed.com/dashboardImages/specializations/1584282023ايقونات التخصصات لتطبيق كونزيل -15-31-11.png"} width="300px"alt=""/>
                 <h1 className='M-title'>{data.title}</h1>
              </div>  
            {data.paragraph.map((para)=>(
                        <div className='paragr-one'>
                           <div>
                           <img src={"https://www.konsilmed.com/dashboardImages/specializations/1584282023ايقونات التخصصات لتطبيق كونزيل -15-31-11.png"} width="300px"alt=""/>
                           </div>
                           <div>
                               <h4 className='P-title'>{para.title}</h4>
                               <p className='P-info'>ggggggggggg</p>
                           </div>
                       </div>
            ))}
            <p className='auther'>auther</p>
            </div>
    )}
        </div>
    );
}

export default Article;