import React from "react";
import swAlert from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();
    console.log(keyword);

    if (keyword.length === 0) {
      swAlert(<h5>Tienes que escribir una palabra </h5>);
    } else {
      e.currentTarget.keyword.value = "";
      navigate(`/result?keyword=${keyword}`);
    }
  };

  return (
    <>
      <form className=" d-flex justify-content-end " onSubmit={submitHandler}>
        <input
          className="form-control"
          type="text"
          name="keyword"
          placeholder="Search"
        />
        <button className="btn btn-primary mx-2" type="submit">
          Search
        </button>
      </form>
    </>
  );
}

export default Search;
