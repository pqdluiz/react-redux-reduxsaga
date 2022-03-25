import React from "react";
import { Repository } from "../store/ducks/repositories/types";

interface OwnProps {
  repository: Repository;
}

export const RepositoryItem: React.FC<OwnProps> = ({ repository }) => {
  return <li>{repository.name}</li>;
};
