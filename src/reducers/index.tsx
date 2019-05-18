import { combineReducers } from "redux";
import auth from "./auth";

const rootReducer = combineReducers({ auth });

/**
 * export type on top of export default in a single reducer code
 */
export type AppState = ReturnType<typeof rootReducer>;

/**
 * required export default at all times
 */
export default rootReducer;