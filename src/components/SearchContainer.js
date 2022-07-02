import { useState, useEffect } from "react";
import Card from "./Card";
import "../styles/cardContainer.scss";

const CardContainer = ({ title, searchValue }) => {
  const [mediaList, setMedia] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=373eecafbff0160b817ed626c7213572&query=${searchValue}`
    )
      .then((res) => res.json())
      .then((data) => setMedia(data.results));
  }, [searchValue]);

  return (
    <div className="reel type-search">
      <div className="reel-info">
        <h3 className="reel-title">{`${
          // que lindo como resolviste esto!
          mediaList.length === 0 ? "No " : ""
        }Results found for ${searchValue}`}</h3>
      </div>
      <div className="card-container">
        {mediaList.map((media) => (
          <Card
            title={media.title || media.name}
            img={`https://image.tmdb.org/t/p/w300/${
              media.poster_path || media.profile_path
            }`}
            url={`/${media.id}`}
            key={media.id}
            mediaType={media.media_type}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
