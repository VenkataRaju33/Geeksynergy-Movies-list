import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../Api/Api";
import "./Dashboard.css";

function DashBoard() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const movieParam = {
      category: "movies",
      language: "kannada",
      genre: "all",
      sort: "voting",
    };
    axios
      .post("https://hoblist.com/api/movieList", movieParam)
      .then((response) => {
        setMovieList(response.data.result);
        //console.log(movieList, "list");
      });
  }, []);

  return (
    <div className="dashboard-grid">
      {movieList.map((movie) => (
        <MovieCard key={movie.id} movieInfo={movie} />
      ))}
    </div>
  );
}

export default DashBoard;
