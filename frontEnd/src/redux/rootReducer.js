import {combineReducers} from "redux";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
      usersReducer: usersReducer,
      authReducer: authReducer
});

export default rootReducer;