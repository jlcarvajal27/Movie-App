import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";

function Result(props) {
  //
  const [movieResult, setMovieResult] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const keyword = query.get("keyword");

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=cc6e7b792c3f3968a741cd4be5686ce4&language=en-US&query=${keyword}`;
    try {
      axios.get(url).then((res) => {
        const data = res.data;
        setMovieResult(data.results);
      });
    } catch (error) {
      console.log(error, "hubo un error");
    }
  }, [keyword]);

  return (
    <>
      <Header />

      <div className="row mx-1 bg-dark">
        <h3 className="m-2 text-white bg-dark font-bold">
          Buscaste: <em>{keyword}</em>
        </h3>
        {movieResult.map((movie) => (
          <div className=" col-3 " key={movie.id}>
            <div className="card my-2 mx-1 bg-dark">
              <div className="card-body">
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
                  className="btn btn-outline-primary "
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

export default Result;
