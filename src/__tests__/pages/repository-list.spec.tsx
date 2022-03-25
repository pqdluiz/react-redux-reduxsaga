import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { RepositoryList } from "../../pages/repository-list";
import store from "../../store";

describe("RepositoryList", () => {
  test("Deve renderizar o componente", () => {
    render(
      <Provider store={store}>
        <RepositoryList repositories={{} as any} loadRequest={{} as any} />
      </Provider>
    );
  });
});
