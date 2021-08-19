import "./searchbar.scss";

import {
  GET_REPOS,
  GET_REPOS_FAILED,
  GET_REPOS_SUCCESS,
  reposStore,
} from "../../context/repos";
import React, { useContext, useState } from "react";

import useFetch from "../../hooks/useFetch";

const Search = () => {
  const { dispatch } = useContext(reposStore);
  const [query, setQuery] = useState("");
  const { fire } = useFetch(
    `${process.env.REACT_APP_GITHUB_API}/users/${query}/repos`
  );

  const getRepos = () => {
    dispatch({ type: GET_REPOS });
    fire()
      .then((res: any) =>
        dispatch({ type: GET_REPOS_SUCCESS, data: res, page: 1 })
      )
      .catch((err) =>
        dispatch({
          type: GET_REPOS_FAILED,
          error: err?.response?.data?.message || err?.message,
        })
      );
  };

  const handleEnter = (e: any) => {
    e.key === "Enter" && getRepos();
  };

  return (
    <input
      className="searchbar"
      placeholder="Search username..."
      onChange={(e) => setQuery(e.target.value)}
      onKeyPress={handleEnter}
    />
  );
};

export default Search;
