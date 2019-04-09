import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import auth from "./auth";
import likes from "./likes";
import targets from "./targets";
import users from "./users";
import hunts from "./hunts";

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    likes,
    targets,
    users,
    hunts
  });
