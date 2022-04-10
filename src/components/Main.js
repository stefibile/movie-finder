import CardContainer from "./CardContainer";
import Header from "./Header";

const Main = () => {
  return (
    <div>
      <Header />
      <CardContainer title="Popular Movies" mediaType="movie" url="popular" reel="isReel" />
      <CardContainer title="Popular TV Shows" mediaType="tv" url="popular" reel="isReel" />
    </div>
  );
};

export default Main;
