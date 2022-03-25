import React from "react";
import { Provider } from "react-redux";

import RepositoryList from "./pages/repositry-list";
import store from "./store";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RepositoryList />
    </Provider>
  )
};
