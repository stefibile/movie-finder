import { useState, useEffect } from "react"
import Card from "./Card";

const CardContainer = ({ title, mediaType, url, reel }) => {
  const [mediaList, setMedia] = useState([])
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${mediaType}/${url}?api_key=373eecafbff0160b817ed626c7213572&language=es-AR&page=1`)
    .then(res => res.json())
    .then(data => setMedia(data.results))
  }, [])

  return (
    <div>
      <h3>{title}</h3>
      {reel === "isReel" && mediaList.slice(0, 5).map(media => (
        <Card 
          title={mediaType === 'movie' ? media.title: media.name}
          img={`https://image.tmdb.org/t/p/w300/${media.poster_path}`}
          url={`/${media.id}`}
          key={media.id}
        />
      ))}
      {reel === "isNotReel" && mediaList.map(media => (
        <Card 
        title={mediaType === 'movie' ? media.title: media.name}
          img={`https://image.tmdb.org/t/p/w300/${media.poster_path}`}
          url={`/${media.id}`}
          key={media.id}
        />
      ))}
    </div>
  );
};

export default CardContainer;
