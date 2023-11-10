export default function Button({ handleClickEvent, children, type }) {
  return (
    <button type={type || "button"} onClick={handleClickEvent || null}>
      {children}
    </button>
  );
}
