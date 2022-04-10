import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Header.scss";
import React from "react";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mediaList, setMedia] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=373eecafbff0160b817ed626c7213572`
    )
      .then((res) => res.json())
      .then((data) => setMedia(data.results));
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {mediaList.slice(0, 5).map((media) => (
      <div className="poster-container">
        <img src={`https://image.tmdb.org/t/p/w1280/${media.backdrop_path}`} alt={media.title} className="poster" />
				<Link to={`movie/${media.id}`} className="poster-info">
						<h3 className="title">{media.title}</h3>
						<p>{media.overview}</p>
				</Link>
      </div>
      ))}
    </Slider>
  );
};

export default Header;
