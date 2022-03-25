import { call, put } from "redux-saga/effects";
import api from "../../../services/api";

import { loadSuccess, loadFailure } from "./actions";

export function* load(): Generator<any, void, unknown> {
  try {
    const response: any = yield call(api.get, "users/pqdluiz/repos");

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
