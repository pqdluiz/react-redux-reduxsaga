import React, { useEffect } from "react";

import { Repository } from "../store/ducks/repositories/types";
import { RepositoryItem } from "../components/repository-item";

interface StateProps {
  repositories: Repository[];
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

export const RepositoryList: React.FC<Props> = (props) => {
  useEffect(() => {
    const { loadRequest } = props;

    loadRequest();
  }, []);

  const { repositories } = props;

  return (
    <ul>
      {repositories.length === 0 ? (
        repositories &&
        repositories.map((repository, index) => (
          <RepositoryItem key={index} repository={repository} />
        ))
      ) : (
        <RepositoryItem repository={{} as any} />
      )}
    </ul>
  );
};
