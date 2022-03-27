import { action } from "typesafe-actions";
import { RepositoriesTypes, Repository } from "./types";

export const loadRequest = () => {
  return action(RepositoriesTypes.LOAD_REQUEST);
};

export const loadSuccess = (data: Repository[]) => {
  return action(RepositoriesTypes.LOAD_SUCCCES, { data });
};

export const loadFailure = () => {
  return action(RepositoriesTypes.LOAD_FAILURE);
};
