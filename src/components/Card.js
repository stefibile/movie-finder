import { Link } from "react-router-dom";
import "../styles/card.scss"

const hideSearch = () => {
  const searchReel = document.querySelector(".type-search");
  searchReel.classList.add("hidden");
};

const Card = ({title, img, mediaType, url}) => {
  return (
    <Link to={`/${mediaType}${url}`} onClick={hideSearch}>
      <div className="card">
        <img src={img} alt={title} />
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default Card;
