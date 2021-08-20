import "./repolist.scss";

import Emptystate from "../Emptystate";
import Loading from "../Loading";
import React from "react";
import Repocard from "../Repocard";

type StateType = {
  loading: boolean;
  error: string;
  data: Object[];
};

type RepolistPropsType = {
  state: StateType;
};

const Repolist = ({ state }: RepolistPropsType) => {
  const { loading, data } = state;

  return (
    <section className="repolist__container">
      {loading ? (
        <Loading />
      ) : !data?.length ? (
        <Emptystate />
      ) : (
        data?.map((repo: any) => <Repocard key={repo?.id} data={repo} />)
      )}
    </section>
  );
};

export default Repolist;
