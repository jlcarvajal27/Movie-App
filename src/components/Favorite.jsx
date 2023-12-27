import { Link } from "react-router-dom";
import Header from "./Header";

function Favorite(props) {
  return (
    <>
      <Header />
      <div className="row mx-1 bg-dark">
        {props.favorite.map((movie) => (
          <div className=" col-3 " key={movie.id}>
            <div className="card my-3 bg-dark">
              <div className="card-body">
                <img
                  src={movie.imgUrl}
                  className="card-img-top rounded "
                  alt="imagen"
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
                  className="btn btn-outline-danger mx-2"
                >
                  Delete to fav
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Favorite;
