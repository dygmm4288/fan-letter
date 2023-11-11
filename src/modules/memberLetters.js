import { memberList } from "lib/member";

// 액션 설정 , memberlist에 C -> 추가, R, U , D가 있다.
const CREATE = "memberLetters/CREATE";
const READ = "memberLetters/READ";
const UPDATE = "memberLetters/UPDATE";
const DELETE = "memberLetters/DELETE";
// 액션 생성자 설정
export const createMemberLetter = (memberLetter) => ({
  type: CREATE,
  payload: memberLetter,
});
export const readMemberLetter = ({ id, member }) => ({
  type: READ,
  payload: { member, id },
});
export const updateMemberLetter = ({ id, content }) => ({
  type: UPDATE,
  payload: { id, content },
});
export const deleteMemberLetter = ({ id }) => ({
  type: DELETE,
  payload: { id },
});

// 초기 state 값
// TODO: 비동기 함수를 이용해서 데이터를 가져와서 적용하는 것도 추가해야함
const FAN_LETTER_KEY = "fan-letter";
const initialState = {
  memberLetters: (function () {
    return JSON.parse(localStorage.getItem(FAN_LETTER_KEY)) || [];
  })(),
};
// reducer 생성
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return state.memberLetters.concat(action.payload);
    case READ:
      return state.memberLetters.find(findLetterById(action.payload));
    case UPDATE:
      return state.memberLetters.map(updateLetter(action.payload));
    case DELETE:
      return state.memberLetters.filter(removeLetterById(action.payload));
    default:
      return state;
  }
};
const findLetterById =
  ({ id }) =>
  (letter) =>
    letter.id === id;
const removeLetterById =
  ({ id }) =>
  (letter) =>
    letter.id !== id;
const updateLetter = ({ id, content }) => {
  return (letter) => {
    if (letter.id === id) {
      return {
        ...letter,
        content,
      };
    }
    return letter;
  };
};
const memberListMap = memberList.reduce((a, c) => {
  a[c] = [];
  return a;
}, {});
function toMap(letters) {
  Object.keys(memberListMap).forEach((key) => (memberListMap[key] = []));
  letters.forEach((letter) => {
    memberListMap[letter.writedTo].push(letter);
  });
  return memberListMap;
}
export const selectMemberLetterList = (store) =>
  toMap(store.memberLettersReducer.memberLetters);

export default reducer;
