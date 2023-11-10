export default function Button({ handleClickEvent, children, type }) {
  return (
    <button type={type || "button"} onChange={handleClickEvent || null}>
      {children}
    </button>
  );
}
