import React, { useState, useEffect } from "react";
import { New } from "./New";
export const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=tesla&from=2023-03-20&sortBy=publishedAt&apiKey=ff5595b068614c32aaf33ae497e9c784"
      );
      const data = await response.json();
      setNews(data.articles);
    };

    fetchNews();
  }, []);

  // Obtener solo los primeros 4 artículos
  const articles = news.slice(0, 4);

  return (
    <div>
      <h2>News about Tesla</h2>
      <ul>
        {articles.map((article) => (
          <New
          author={article.author}
          title={article.title}
          urlToImage={article.urlToImage}
          publishedAt={article.publishedAt}
          content={article.content}
        />
        ))}
      </ul>
    </div>
  );
};