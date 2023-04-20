import React from "react";

export const New = ({ author, title, urlToImage, publishedAt, content }) => {
  return (
    <div className="article">
      <h2>{title}</h2>
      <p>Autor:{author} Fecha: {publishedAt}</p>
      {urlToImage &&
              (urlToImage.startsWith("http") ||
                urlToImage.startsWith("data:image/")) && (
                <img src={urlToImage} alt={title} />
              )}
      <p>{content}</p>
    </div>
  );
};