import { combineReducers } from "redux";
import { usersReducer } from "./services/slice/users-slice";

const rootReducer = combineReducers({
  users: usersReducer
});

export default rootReducer;