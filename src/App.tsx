import React, { useContext } from "react";

import Layout from "./layout";
import Repolist from "./components/Repolist";
import { reposStore } from "./context/repos";

function App() {
  const { state } = useContext(reposStore);
  return (
    <Layout>
      <Repolist state={state} />
    </Layout>
  );
}

export default App;
