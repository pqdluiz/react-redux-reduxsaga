import { render } from "@testing-library/react";
import RepositoryList from "../../pages/repositry-list";

describe("RepositoryList", () => {
  test("Deve renderizar o componente", () => {
    render(<RepositoryList />);
  });
});
