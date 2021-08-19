import "./layout.scss";

import React, { ReactNode } from "react";

type LayoutPropsType = {
  children: ReactNode;
};

const IndexLayout = ({ children }: LayoutPropsType) => {
  return (
    <main className="layout">
      <div className="layout__content">{children}</div>
    </main>
  );
};

export default IndexLayout;
