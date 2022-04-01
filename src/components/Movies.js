import CardContainer from "./CardContainer";

const Movies = () => {
  return (
    <div>
      <CardContainer title="Popular Movies" mediaType="movie" url="popular" reel="isReel" />;
      <CardContainer title="Top Rated Movies" mediaType="movie" url="top_rated" reel="isReel" />;
      <CardContainer title="Now Playing Movies" mediaType="movie" url="now_playing" reel="isReel" />;
      <CardContainer title="Upcoming Movies" mediaType="movie" url="upcoming" reel="isReel" />;
    </div>
  );
};

export default Movies;
