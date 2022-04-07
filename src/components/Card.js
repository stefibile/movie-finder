import { Link } from "react-router-dom";
import "../styles/card.scss"

const Card = ({title, img, mediaType, url}) => {
  return (
    <Link to={`/${mediaType}${url}`}>
      <div className="card">
        <img src={img} alt={title} />
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default Card;
