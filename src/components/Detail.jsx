import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

function Detail() {
  let token = sessionStorage.getItem("token");
  let query = new URLSearchParams(window.location.search);
  let movieId = query.get("movieId");

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=cc6e7b792c3f3968a741cd4be5686ce4`;
    axios.get(url).then((res) => {
      const movieData = res.data;
      setMovie(movieData);
    });
  }, [movieId]);

  return (
    <>
      <Header />
      <div className="card m-4">
        {!token && <Navigate to="/" />}
        {movie && (
          <>
            <h2 className="font-bold m-3">{movie.title}</h2>
            <div className="row m-2">
              <div className="col-4">
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  className="img-fluid"
                />
              </div>
              <div className="col-8">
                <h5>Fecha de estreno: {movie.release_date}</h5>
                <h5>Reseña:</h5>
                <p>{movie.overview}</p>
                <h5>Generos</h5>
                <ul>
                  {movie.genres.map((item) => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default Detail;
