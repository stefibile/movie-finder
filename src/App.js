import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import NotFound from "./components/NotFound";
import CardDetail from "./components/CardDetail";
import CardGenre from "./components/CardGenre";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/:mediaUrl" element={<CardDetail mediaType="movie" />} />
        <Route path="/movie/genre/:genre" element={<CardGenre mediaType="movie" />} />
        <Route path="/movie/movie/genre/:genre" element={<CardGenre mediaType="movie" />} />
        <Route path="/tv" element={<TvShows />} />
        <Route path="/tv/:mediaUrl" element={<CardDetail mediaType="tv" />} />
        <Route path="/tv/tv/genre/:genre" element={<CardGenre mediaType="tv" />} />
        <Route path="/tv/genre/:genre" element={<CardGenre mediaType="tv" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
