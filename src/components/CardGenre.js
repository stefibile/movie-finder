import { useParams } from "react-router-dom";
import CardContainer from "./CardContainer";
import { useState } from "react";
import "../styles/cardGenre.scss";


const CardGenre = ({ mediaType }) => {
  const params = useParams();
  const [page, setPage] = useState(1);
  const paginationHandleChange = () => setPage(page);
  const paginationHandleBack = () => page > 1 && setPage(page - 1);
  const paginationHandleForward = () => setPage(page + 1);

  return (
    <div className="genre-section">
      <CardContainer title={params.genre} mediaType={mediaType} url={params.genre} reel="isNotReel" page={page} />
      <div className="pagination">
        <button className="back" onClick={paginationHandleBack}>👈</button>
        <input value={page} onChange={paginationHandleChange}></input>
        <button className="forward" onClick={paginationHandleForward}>👉</button>
      </div>
    </div>
  );
};

export default CardGenre;
