import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "../styles/cardDetail.scss"

const CardDetail = ({ mediaType }) => {
  const params = useParams() 
  const [media, setMedia] = useState([])
  const [trailerList, setTrailer] = useState([])
  
  const TrailerButton = () => trailerList.slice(0, 1).map(trailer => (
    <a href={`https://youtu.be/${trailer.key}`} className="trailer">📽 See trailer</a>
  ))

  // podes poner dos fetch en el mismo useEffect, asi no repetis tanto
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${mediaType}/${params.mediaUrl}?api_key=373eecafbff0160b817ed626c7213572`)
    .then(res => res.json())
    .then(data => setMedia(data))
  }, [mediaType, params.mediaUrl])
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${mediaType}/${params.mediaUrl}/videos?api_key=373eecafbff0160b817ed626c7213572`)
    .then(res => res.json())
    .then(data => setTrailer(data.results))
  }, [mediaType, params.mediaUrl])
  
  // que hace esto aca?
  TrailerButton();

  return (
    <div className="detail-container" style={{backgroundImage: `url("https://image.tmdb.org/t/p/w1280/${media.backdrop_path}")`}}>
      <div className="detail-mask"></div>
      <img src={`https://image.tmdb.org/t/p/w500/${media.poster_path || media.profile_path}`} alt={mediaType === 'movie' ? media.title: media.name} />
      <div className="detail-info">
        <TrailerButton />
        <h2 className="title">{mediaType === 'movie' ? media.title: media.name}</h2>
        <p>{media.overview || media.biography}</p>
        {mediaType !== 'person' && <ul>Genres:
          {media.genres?.map(genres => (
            <li key={genres.id}>{genres.name}</li>
          ))}
        </ul>}
      </div>
    </div>
  );
};

export default CardDetail;
