import "./emptystate.scss";

import React from "react";

const index = () => {
  return (
    <div className="emptystate__container">
      <object
        className="emptystate__icon"
        data="/not-found.svg"
        aria-label="not found"
        data-testid="not found icon"
      />
      <p className="emptystate__caption" data-testid="not found caption">
        Repository not found
      </p>
    </div>
  );
};

export default index;
