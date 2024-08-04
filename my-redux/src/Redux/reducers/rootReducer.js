import taskReducers from "./taskReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({taskReducers})
export default rootReducer