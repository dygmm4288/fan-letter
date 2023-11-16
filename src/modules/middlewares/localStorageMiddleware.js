export default function localStorageMiddleware(key) {
  return (store) => (next) => (action) => {
    const result = next(action);

    localStorage.setItem(
      key,
      JSON.stringify(store.getState().memberLettersReducer.memberLetters),
    );
    return result;
  };
}
