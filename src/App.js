import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import Navibar from "./components/NaviBar";
import MovieDetail from "./components/MovieDetail"; // Create a MovieDetail component
import "./styles.css"; // Make sure to import your CSS file

const App = () => {
  const [movies, setMovies] = useState([
    // Add your initial movie data here
    {
      title: "Simba",
      description: "The Lion King 2019 ",
      posterURL:
        "https://c4.wallpaperflare.com/wallpaper/343/724/32/the-lion-king-2019-movie-poster-wallpaper-preview.jpg",
      rating: 7.5,
      trailerLink:
        "https://www.youtube.com/embed/7TavVZMewpY?si=wkJufYaG8RW_Yi4-",
    },
    {
      title: "Lord of the rings",
      description:
        "Aragorn viggo return of the king Entertainment Movies HD Art",
      posterURL:
        "https://c4.wallpaperflare.com/wallpaper/1022/525/87/movies-the-lord-of-the-rings-aragorn-viggo-mortensen-movie-posters-posters-the-return-of-the-king-entertainment-movies-hd-art-wallpaper-preview.jpg",
      rating: 3.5,
      trailerLink:
        "https://www.youtube.com/embed/V75dMMIW2B4?si=8gqUHXVPX_Ax1oqB",
    },
    {
      title: "The Wolverine",
      description: "Sword, water, architecture, nautical vessel",
      posterURL:
        "https://c4.wallpaperflare.com/wallpaper/241/660/901/wolverine-sword-wallpaper-preview.jpg",
      rating: 5.5,
      trailerLink:
        "https://www.youtube.com/embed/toLpchTUYk8?si=KOCS_R6Q8291WDl7",
    },
    {
      title: "Godzilla",
      description: "King of the Monsters",
      posterURL:
        "https://c4.wallpaperflare.com/wallpaper/846/216/1006/godzilla-movies-movie-poster-godzilla-king-of-the-monsters-wallpaper-preview.jpg",
      rating: 5.5,
      trailerLink:
        "https://www.youtube.com/embed/QFxN2oDKk0E?si=lYKv3-zIbJ7P5wbA",
    },
    {
      title: "Avengers Endgame",
      description: "Iron Man, Robert Downey Jr., Captain America",
      posterURL:
        "https://c4.wallpaperflare.com/wallpaper/361/823/829/avengers-endgame-iron-man-robert-downey-jr-captain-america-chris-evans-hd-wallpaper-preview.jpg",
      rating: 5.5,
      trailerLink:
        "https://www.youtube.com/embed/TcMBFSGVi1c?si=hOak9KmMGv2MB1st",
    },
    {
      title: "Star Wars",
      description: " The Rise of Skywalker, 2019 (Year)",
      posterURL:
        "https://c4.wallpaperflare.com/wallpaper/153/860/948/movie-poster-star-wars-star-wars-the-rise-of-skywalker-2019-year-movies-hd-wallpaper-preview.jpg",
      rating: 5.5,
      trailerLink:
        "https://www.youtube.com/embed/NvnNl9s9aCk?si=z03HlDsNakwHXk9N",
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [isDarkMode, setIsDarkMode] = useState(false);
  //filter for title and rating
  const handleFilter = ({ title, rating }) => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (!rating || movie.rating >= parseFloat(rating))
    );
    setFilteredMovies(filtered);
  };
  // Dark mode switch

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
    }
  };

  return (
    <Router>
      <Navibar />
      <div className="container">
        <div className="row">
          <div className="col-md-8 d-flex justify-content-between mt-4">
            <div className={`container${isDarkMode ? " dark-mode" : ""}`}>
              <h1 className="mt-4 mb-4">Movie App</h1>
            </div>
            <div className="col-md-3">
              <div className="btn btn-dark mb-2" onClick={toggleDarkMode}>
                <i className={`fa ${isDarkMode ? "fa-sun" : "fa-moon"}`}></i>
              </div>
            </div>
          </div>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              // Use "element" instead of wrapping in a React.Fragment
              <>
                <Filter onFilter={handleFilter} />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route
            path="/movie/:index"
            element={<MovieDetail movies={movies} />}
          />
        </Routes>
      </div>
      <Navibar />
    </Router>
  );
};

export default App;
