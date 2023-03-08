import React from 'react';
import {Link} from "react-router-dom";
import {useState, useEffect} from "react"
import"./Articles.css"
const Articles = () => {
    const [isLoading, setIsLoading] = useState(true);
      const [data, setData] = useState([]);
    
      useEffect(() => {
        const url = `/Articles`;
        fetch(url)
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.log("error in api"));
      }, []);
       useEffect(() => {
        if (data.length !== 0) {
          setIsLoading(false);
        }
        console.log(data)
      }, [data]);
      
    return (
        <div>
            <div className='Articles'>
                <div className='Articles-title'>
                    <h2>Articles</h2>
                </div>
                <div className='all-Articles-cards'>
                {isLoading ? (
                <h1>
                    loading ...
                </h1>
                ) : (
                    data.map((Article)=>(
                       <div className='Articles-card' key={Article._id}>
                       <div className='Articles-info'>
                             <h2>{Article.title}</h2>
                             <p>
                                {Article.sumary}
                             </p>
                             <button>More</button>
                       </div>
                       <div className='Articles-img'>
                       <Link to={`/Articles/${Article._id}`}>
                       <img src={"https://www.konsilmed.com/dashboardImages/specializations/1584282023ايقونات التخصصات لتطبيق كونزيل -15-31-11.png"}alt=""/>
                       </Link>  
                       </div>
                   </div>
                    )))}
                    
                </div>
            </div>
        </div>
    );
}

export default Articles;