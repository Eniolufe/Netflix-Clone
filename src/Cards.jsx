import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Cards.css";
import YouTube from "react-youtube";

const image_url = "https://image.tmdb.org/t/p/original/";

function Cards({ title, fetchUrl, isLargeCards }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.table(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="card">
      <h2>{title}</h2>

      <div className="posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`poster ${isLargeCards && "posterLarge"}`}
            src={`${image_url}${
              isLargeCards ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
