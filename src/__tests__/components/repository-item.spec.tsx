import { render } from "@testing-library/react";
import { RepositoryItem } from "../../components/repository-item";

describe("RepositoryItem", () => {
  test("Deve renderizar o componente", () => {
    render(<RepositoryItem repository={{} as any} />);
  });
});