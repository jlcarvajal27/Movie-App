import React from "react";
import { Route, Routes } from "react-router-dom/dist";
import { Detail, Favorite, Listado, Login, Result } from "../components";
import { useEffect, useState } from "react";

function RoutesElement() {
  //
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const favStorage = localStorage.getItem("favs");

    if (favStorage !== null) {
      const arrayFav = JSON.parse(favStorage);
      setFavorite(arrayFav);
    }
  }, []);

  const addOrRemoveFromFavs = (e) => {
    const favMovie = localStorage.getItem("favs");

    let tempMoviesFav;

    if (favMovie === null) {
      tempMoviesFav = [];
    } else {
      tempMoviesFav = JSON.parse(favMovie);
    }

    const btnFav = e.currentTarget;
    const parent = btnFav.parentElement;
    const imgUrl = parent.querySelector("img").getAttribute("src");
    const title = parent.querySelector("h5").innerText;
    const overview = parent.querySelector("p").innerText;

    const movieData = {
      title,
      imgUrl,
      overview,
      id: btnFav.dataset.movieId,
    };

    let moviesInArray = tempMoviesFav.find((onMovie) => {
      return onMovie.id === movieData.id;
    });
    if (!moviesInArray) {
      tempMoviesFav.push(movieData);
      localStorage.setItem("favs", JSON.stringify(tempMoviesFav));
      setFavorite(tempMoviesFav);
      console.log("se agrego la movie");
    } else {
      let removeMovie = tempMoviesFav.filter((onMovie) => {
        return onMovie.id !== movieData.id;
      });
      localStorage.setItem("favs", JSON.stringify(removeMovie));
      setFavorite(removeMovie);
      console.log("se elimino la movie");
    }
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/listado"
          element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />}
        />
        <Route path="/detail" element={<Detail />} />
        <Route
          path="/result"
          element={<Result addOrRemoveFromFavs={addOrRemoveFromFavs} />}
        />
        <Route
          path="/favorite"
          element={
            <Favorite
              favorite={favorite}
              addOrRemoveFromFavs={addOrRemoveFromFavs}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default RoutesElement;
