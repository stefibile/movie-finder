import CardContainer from "./CardContainer";

const TvShows = () => {
  return (
    <div>
      <CardContainer title="Popular Tv Shows" mediaType="tv" url="popular" reel="isReel" />
      <CardContainer title="On the air Tv Shows" mediaType="tv" url="on_the_air" reel="isReel" />
      <CardContainer title="Now Playing Tv Shows" mediaType="tv" url="airing_today" reel="isReel" />
      <CardContainer title="Top Rated Tv Shows" mediaType="tv" url="top_rated" reel="isReel" />
    </div>
  );
};

export default TvShows;
