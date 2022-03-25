import { all, takeLatest } from "redux-saga/effects";

import { RepositoriesTypes } from "./repositories/types";
import { load } from "./repositories/sagas";

export default function* rootSaga(): Generator<any, any, unknown> {
  return yield all([takeLatest(RepositoriesTypes.LOAD_REQUEST, load)]);
}
