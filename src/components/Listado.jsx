import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function Listado(props) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/discover/movie?api_key=cc6e7b792c3f3968a741cd4be5686ce4";
    axios.get(url).then((res) => {
      const data = res.data;
      setMovieList(data.results);
    });
  }, [setMovieList]);

  return (
    <>
      <Header />
      <div className="row mx-1 bg-dark">
        {movieList.map((movie) => (
          <div className=" col-3 " key={movie.id}>
            <div className="card my-3 bg-dark ">
              <div className="card-body m-1">
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  className="card-img-top rounded "
                  alt="movie"
                />
                <h5 className="card-title my-3 text-white">{movie.title}</h5>
                <p className="card-text fs-16 text-white">
                  {movie.overview.substring(0, 100)}...
                </p>
                <Link
                  to={`/detail?movieId=${movie.id}`}
                  className="btn btn-outline-primary"
                >
                  View Detail
                </Link>
                <button
                  onClick={props.addOrRemoveFromFavs}
                  data-movie-id={movie.id}
                  className="btn btn-outline-success mx-3"
                >
                  Add to fav
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Listado;
