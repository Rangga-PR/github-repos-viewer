import "./layout.scss";

import React, { ReactNode } from "react";

import Topbar from "../components/Topbar";

type LayoutPropsType = {
  children: ReactNode;
};

const IndexLayout = ({ children }: LayoutPropsType) => {
  return (
    <main className="layout">
      <Topbar />
      <div className="layout__content">{children}</div>
    </main>
  );
};

export default IndexLayout;
