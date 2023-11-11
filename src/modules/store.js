import { combineReducers, createStore } from "redux";
import memberLettersReducer from "./memberLetters";
const rootReducer = combineReducers({
  memberLettersReducer: memberLettersReducer,
});

const store = createStore(rootReducer);
export default store;
