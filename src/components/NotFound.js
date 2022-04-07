import image from "../img/nosignal.jpg"
import "../styles/notFound.scss"

const NotFound = () => {
  return (
  <div className="not-found">
    <img src={image} alt="result not found" />
    <span>NOT FOUND</span>
  </div>
  );
};

export default NotFound;
