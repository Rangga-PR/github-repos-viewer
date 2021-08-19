import "./topbar.scss";

import React from "react";
import Searchbar from "../Search";

const Topbar = () => {
  return (
    <div className="topbar__container">
      <div className="topbar__content">
        <object
          data="/github-logo.svg"
          className="topbar__icon"
          aria-label="github logo"
          data-testid="github logo"
        />
        <Searchbar />
      </div>
    </div>
  );
};

export default Topbar;
