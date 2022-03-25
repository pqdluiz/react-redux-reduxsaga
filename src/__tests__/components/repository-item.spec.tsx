import { render } from "@testing-library/react";
import { faker } from "@faker-js/faker";

import { RepositoryItem } from "../../components/repository-item";
import { Repository } from "../../store/ducks/repositories/types";

const repositories: Repository = {
  id: 0,
  name: faker.name.findName(),
};

describe("RepositoryItem", () => {
  test("Deve renderizar o componente", () => {
    render(<RepositoryItem repository={repositories} />);
  });
});
