import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({ profilePage: profileReducer, });
let store = createStore(reducers);
export default store;