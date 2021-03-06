import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import "../styles/cardContainer.scss";

const CardContainer = ({ title, mediaType, url, reel, page, type }) => {
  const [mediaList, setMedia] = useState([]);
  let cardAmount = 5;
  const width = window.innerWidth;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${mediaType}/${url}?api_key=373eecafbff0160b817ed626c7213572&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => setMedia(data.results));
  }, [page, mediaType, url]);

  const defineWidth = () => {
    if (width <= 700) cardAmount = 4;
    else if (width <= 920) cardAmount = 3;
    else if (width <= 1150) cardAmount = 4;
    else if (width >= 1350) cardAmount = 6;
    else if (width >= 1500) cardAmount = 7;
  }

  defineWidth();

  return (
    <div className="reel">
      <div className="reel-info">
        <h3 className="reel-title">{title}</h3>
        {reel === "isReel" && <Link to={mediaType + '/genre/' + url} >See more</Link>}
      </div>
      <div className="card-container">
        {reel === "isReel" &&
          mediaList
            .slice(0, `${cardAmount}`)
            .map((media) => (
              <Card
                title={mediaType === "movie" ? media.title : media.name}
                img={`https://image.tmdb.org/t/p/w300/${media.poster_path}`}
                url={`/${media.id}`}
                key={media.id}
                mediaType={mediaType}
              />
            ))}
        {reel === "isNotReel" &&
          mediaList.map((media) => (
            <Card
              title={mediaType === "movie" ? media.title : media.name}
              img={`https://image.tmdb.org/t/p/w300/${media.poster_path}`}
              url={`/${media.id}`}
              key={media.id}
              mediaType={mediaType}
            />
          ))}
      </div>
    </div>
  );
};

export default CardContainer;
