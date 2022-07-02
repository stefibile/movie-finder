import "../styles/Search.scss";
import { useState } from "react";
import SearchContainer from "./SearchContainer";

const Search = () => {
  const [searchValue, setSearch] = useState("");
  const findValue = (event) => {
    setSearch(event.target.value);
    const container = document.querySelector(".input-container");
    if (searchValue !== "") container.classList.remove("no-search");
  };

  return (
    <div className="input-container no-search">
      <input
        type="text"
        className="search-input"
        onInput={findValue}
        placeholder="Find what you want here"
      />
      {/* Querida Male: No pude encontrar mejor manera de limitar el fetch con espacios vacíos que rompen la app */}
      {/* existe el metodo trim() que nos permite borrar espacios vacios de un string: */}
      {/* searchValue.trim() === "" && */}
      {/* con eso ya lo dejas resuelto. igual lo hicste re bien! */}
      {searchValue !== "" && searchValue !== " " && searchValue !== "  " && (
        <SearchContainer searchValue={searchValue} />
      )}
    </div>
  );
};

export default Search;
