import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
// import SearchContainer from "./components/SearchContainer";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import NotFound from "./components/NotFound";
import CardDetail from "./components/CardDetail";
import CardGenre from "./components/CardGenre";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Search />
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
        <Route path="/person" element={<CardDetail mediaType="person" />} />
        <Route path="/person/:mediaUrl" element={<CardDetail mediaType="person" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
