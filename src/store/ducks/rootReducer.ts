import { combineReducers } from "redux";

import repositories from "./repositories";

export const rootReducer = combineReducers({
  repositories,
});
