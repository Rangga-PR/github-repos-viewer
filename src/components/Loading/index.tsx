import "./loading.scss";

import React from "react";

const Loading = () => {
  return (
    <div className="loading__container">
      <div className="loading__spinner" data-testid="spinner" />
    </div>
  );
};

export default Loading;
