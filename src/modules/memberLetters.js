import { memberList } from "lib/member";
import { v4 as uuid } from "uuid";
import defaultAvatar from "../assets/img/default-avatar.png";

// 액션 설정 , memberlist에 C -> 추가, R, U , D가 있다.
const CREATE = "memberLetters/CREATE";
const UPDATE = "memberLetters/UPDATE";
const DELETE = "memberLetters/DELETE";
// 액션 생성자 설정
export const createMemberLetter = (payload) => ({
  type: CREATE,
  payload,
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
      const { nickname, content, selected } = action.payload;
      const newLetter = {
        nickname,
        content,
        selected,
        id: uuid(),
        avatar: defaultAvatar,
        createdAt: new Date().toISOString(),
      };
      return {
        memberLetters: state.memberLetters.concat(newLetter),
      };
    case UPDATE:
      return {
        ...state,
        memberLetters: state.memberLetters.map(updateLetter(action.payload)),
      };
    case DELETE:
      return {
        ...state,
        memberLetters: state.memberLetters.filter(
          removeLetterById(action.payload),
        ),
      };
    default:
      return state;
  }
};
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
