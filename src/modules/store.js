import { combineReducers, createStore } from "redux";
import memberLettersReducer from "./memberLetters";
import selectedMemberReducer from "./selectedMember";
const rootReducer = combineReducers({
  memberLettersReducer: memberLettersReducer,
  selectedMemberReducer: selectedMemberReducer,
});

const store = createStore(rootReducer);
export default store;
