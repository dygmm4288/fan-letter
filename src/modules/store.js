import { applyMiddleware, combineReducers, createStore } from "redux";
import memberLettersReducer, { FAN_LETTER_KEY } from "./memberLetters";
import localStorageMiddleware from "./middlewares/localStorageMiddleware";
import selectedMemberReducer from "./selectedMember";
const rootReducer = combineReducers({
  memberLettersReducer: memberLettersReducer,
  selectedMemberReducer: selectedMemberReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(localStorageMiddleware(FAN_LETTER_KEY)),
);

export default store;
