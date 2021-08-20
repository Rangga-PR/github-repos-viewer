import "./repocard.scss";

import React from "react";

type DataType = {
  id: number;
  html_url: string;
  name: string;
  description: string;
  language: string;
};

type RepocardPropsType = {
  data: DataType;
};

const Repocard = ({ data }: RepocardPropsType) => {
  return (
    <div className="repocard__container">
      <a className="repocard__name" href={data?.html_url}>
        {data?.name}
      </a>
      {data?.description && (
        <p className="repocard__desc">{data?.description}</p>
      )}
      {data?.language && <p className="repocard__lang">{data?.language}</p>}
    </div>
  );
};

export default Repocard;
