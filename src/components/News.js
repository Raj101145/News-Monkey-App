
import NewsItem from "./NewsItem";
import React, {useState , useEffect} from "react";

  
    const News = () =>{
        const [articles ,setArticles] = useState([]);

        useEffect(() => {
            const fetchNews = async () =>{
                let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=236a41042c8e4b2d96b32efaa7252a44';
             let data =  await fetch(url);
             let parsedData = await data.json();
             setArticles(parsedData.articles);   
            };
            fetchNews();
        },[]);
  
  
    return (
      <div className="container mt-3">
        <div className="row">
          {articles.map((article, index) => (
            <div className="col-md-6 mb-3" key={index}>
              <NewsItem
                title={article.title}
                description={article.description}
                urlToImage={article.urlToImage}
                url={article.url}
              />
            </div>
          ))}
        </div>
      </div>
    );
    };
    


export default News;
