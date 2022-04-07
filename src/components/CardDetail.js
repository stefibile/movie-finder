import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "../styles/cardDetail.scss"

const CardDetail = ({ mediaType }) => {
  const params = useParams() 
  const [media, setMedia] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${mediaType}/${params.mediaUrl}?api_key=373eecafbff0160b817ed626c7213572&language=es-AR`)
    .then(res => res.json())
    .then(data => setMedia(data))
  }, [])


  return (
    <div className="detail-container" style={{backgroundImage: "url(" + `https://image.tmdb.org/t/p/w1280/${media.backdrop_path}` + ")"}}>
      <div className="detail-mask"></div>
      <img src={`https://image.tmdb.org/t/p/w500/${media.poster_path}`} alt={mediaType === 'movie' ? media.title: media.name} />
      <div className="detail-info">
        <h2 className="title">{mediaType === 'movie' ? media.title: media.name}</h2>
        <p>{media.overview}</p>
        <ul>Genres:
          {media.genres?.map(genres => (
            <li key={genres.id}>{genres.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardDetail;
