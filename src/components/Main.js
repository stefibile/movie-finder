import CardContainer from "./CardContainer";

const Main = () => {
  return (
    <div>
      <CardContainer title="Popular Movies" mediaType="movie" url="popular" reel="isReel" />
      <CardContainer title="Popular TV Shows" mediaType="tv" url="popular" reel="isReel" />
    </div>
  );
};

export default Main;
