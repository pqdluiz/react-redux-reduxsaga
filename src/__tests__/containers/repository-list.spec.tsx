import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import RepositoryList from "../../containers/repository-list";
import store from "../../store";

describe("RepositoryList", () => {
  test("Deve renderizar o container", () => {
    render(
      <Provider store={store}>
        <RepositoryList />
      </Provider>
    );
  });
});
